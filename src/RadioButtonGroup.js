import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RadioButtonGroup.css';
export default function RadioButtonGroup({insurances}) {
	const navigate = useNavigate();
	const [ selection, setSelection ] = useState("");
	const [ checkBoxSelection, setCheckBoxSelection ] = useState([]);

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
				navigate("../healthcare-categories", {state: `${insurances[0].insurance_type}: ${insuranceAlternatives.slice(0, -2)}`});
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
	
	if (insurances[0].insurance_type !== "Uninsured / Self-Pay") { 
		return(
        <form id="insuranceSelectForm" onSubmit={handleSubmit}>
			<button id="submitFromRadioBTN" type="submit">Submit</button><br/>
			<div className="radioButtonMenu">
				{insurances.map((element) => (
					<div className=""id={`radioDiv_${element.id_in_group}`}>
					<input
						type="radio"
						value={`${element.insurance_type}: ${element.insurance_name}`}
						id={`button_${element.id_in_group}`}
						name="insGroup"
						onChange={e => {setSelection(e.target.value)}}
					/>
					<label className="radioButtonText" for={`button_${element.id_in_group}`}>
						{element.insurance_name}
					</label>
					<br />
					</div>
				))}
			</div>
			<div>
				<input type="radio" 
					id="notListed" 
					name="insGroup"
					value={`${insurances[0].insurance_type}: my insurance is not listed.`}
					onChange={e => {setSelection(e.target.value)}}
				/>
				<label className="radioButtonText" for="notListed">My insurance is not listed.</label>
			</div>
		</form>
    );
	} else {
		return (
		<form id="insuranceSelectForm" onSubmit={handleSubmit}>
			<button id="submitFromRadioBTN" type="submit">Submit</button><br/>
			<div className="radioButtonMenu">
				{insurances.map((element) => (
					<div className=""id={`radioDiv_${element.id_in_group}`}>
					<input
						type="checkbox"
						value={element.insurance_name}
						id={`button_${element.id_in_group}`}
						name="insGroup"
						onChange={handleCheckboxChange} // need to fix
					/>
					<label className="radioButtonText" for={`button_${element.id_in_group}`}>
						{element.insurance_name}
					</label>
					<br />
					</div>
				))}
			</div>
			<div>
				<input type="radio" 
					id="notListed" 
					name="insGroup"
					value={`${insurances[0].insurance_type}: my insurance is not listed.`}
					onChange={e => {setSelection(e.target.value)}}
				/>
				<label className="radioButtonText" for="notListed">My insurance is not listed.</label>
			</div>
		</form>
		)
	}
}