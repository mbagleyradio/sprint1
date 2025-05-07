/*
*	PSEUDOCODE FOR SORTING THE INSURANCES FROM MICK'S ENDPOINT
*	CONTEXT:
*	its an array of 172 {} objects. Each object contains two key value pairs: 
*		1) primaryName
*		2) subName
*	primaryName is the type of insurance (uninsured, commercial, military, etc)
*	subName is the specific brand of insurance ("Catastrophic care discount", "Medicare Advantage (Medicare Part C) Plans", etc)
*	
*	PSEUDO:
*	on component mount, filter all the elements of the array where their primaryName matches the user's selection
*/

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RadioButtonGroup.css';
export default function RadioButtonGroup({insurances, insuranceType}) {
	const navigate = useNavigate();
	const [ selection, setSelection ] = useState("");
	const [ checkBoxSelection, setCheckBoxSelection ] = useState([]);
	const [ filtered, setFiltered ] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();
		if (selection === "") {
			// the radio buttons are not selected, now check if the checkbox is selected
			if (checkBoxSelection.length === 0) {
				// the radio buttons are not selected, and the checkbox is not selected. Don't do anything here!
				alert("Please make a selection before submitting!");
			} else {
				// the checkbox is selected
				let insuranceAlternatives = "";
				checkBoxSelection.map((element) => {
					insuranceAlternatives += `${element}, `;
				});
				navigate("../healthcare-categories", {state: `${insuranceType}: ${insuranceAlternatives.slice(0, -2)}`});
			}
		} else {
			// the radio buttons are selected
			if (selection.includes("not") && selection.includes("listed")) {
				// "My insurance is not listed" was selected
				navigate("../contact-ins", {state: selection});
			} else {
				// Literally any other option was selected, so pass to healthcare categories
				navigate("../healthcare-categories", {state: selection});
			}
		}
	}

	function handleCheckboxChange(event) {
		// if the checkbox is rendered, this event handler gets called
		const checked = event.target.checked;
		const value = event.target.value;

		if (checked === true) {
			// add to the array
			setCheckBoxSelection([...checkBoxSelection, value]);
		} else if (checked === false) {
			// remove from the array
			setCheckBoxSelection(checkBoxSelection.filter(element => element !== value))
		}
	}
	
	useEffect(() => {
		setFiltered(insurances.filter(element => element["primaryName"] === insuranceType));
	}, []);

	if (insuranceType !== "Uninsured / Self-Pay" && filtered.length > 0) { 
		return(
        <form id="insuranceSelectForm" onSubmit={handleSubmit}>
			<div id="coverBTNBlue">
				<button id="submitFromRadioBTN" type="submit">Submit</button>
				<p className="submitBTNInstructions">From the list below, select your insurance provider. Then click on the Submit button.</p>
			</div>
			<div className="radioButtonMenu">
				{filtered.map((element, key) => (
					<div className=""id={`radioDiv_${element["primaryName"]}_${element["subName"]}`}>
					<input
						type="radio"
						value={`${element["primaryName"]}: ${element["subName"]}`}
						id={`button_${element["primaryName"]}_${key}`}
						name="insGroup"
						onChange={e => {setSelection(e.target.value)}}
					/>
					<label className="radioButtonText" for={`button_${element["primaryName"]}_${key}`}>
						{element["subName"]}
					</label>
					<br />
					</div>
				))}
			</div>
			<div>
				<input type="radio" 
					id="notListed" 
					name="insGroup"
					value={`${insuranceType}: my insurance is not listed.`}
					onChange={e => {setSelection(e.target.value)}}
				/>
				<label className="radioButtonText" for="notListed">My insurance is not listed.</label>
			</div>
		</form>
    );
	} else if (filtered.length > 0) {
		return (
		<form id="insuranceSelectForm" onSubmit={handleSubmit}>
			<div id="coverBTNBlue">
				<button id="submitFromRadioBTN" type="submit">Submit</button>
				<p className="submitBTNInstructions">From the list below, select all that are applicable to you. Then click on the Submit button.</p>
			</div>
			<div className="radioButtonMenu">
				{filtered.map((element, key) => (
					<div className=""id={`radioDiv_${element["primaryName"]}_${element["subName"]}`}>
					<input
						type="checkbox"
						value={`${element["primaryName"]}: ${element["subName"]}`}
						id={`button_${element["primaryName"]}_${key}`}
						name="insGroup"
						onChange={handleCheckboxChange}
					/>
					<label className="radioButtonText" for={`button_${element["primaryName"]}_${key}`}>
						{element["subName"]}
					</label>
					<br />
					</div>
				))}
			</div>
		</form>
		)
	} else {
		return (<></>);
	}
}