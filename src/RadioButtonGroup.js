import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RadioButtonGroup.css';
export default function RadioButtonGroup({insurances, isLoaded}) {
	const navigate = useNavigate();
	const [ selection, setSelection ] = useState("");
	
	function handleSubmit(event) {
		event.preventDefault();
		if (selection.includes("not") && selection.includes("listed")) {
			navigate("../contact-ins", {state: selection});
		} else {
			navigate("../healthcare-categories", {state: selection});
		}
	}
	if (!isLoaded) {
		return (<h5>Loading...</h5>);
	} else return(
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
}