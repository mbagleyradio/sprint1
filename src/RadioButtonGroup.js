import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function RadioButtonGroup({insurances, isLoaded}) {
	const navigate = useNavigate();
	const [ selection, setSelection ] = useState("");
	function handleSelection(insurance_type, insurance_name) {
		if (insurance_name !== "My insurance is not listed.") {
			setSelection(`${insurance_type}: ${insurance_name}`);
		} else {
			setSelection(`${insurance_type}: not listed`);
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (selection.includes("not") && selection.includes("listed")) {
			navigate("../contact-ins", {state: selection});
		} else {
			navigate("../sprint2", {state: selection});
		}
	}
	if (!isLoaded) {
		return (<h5>Loading...</h5>);
	} else return(
        <form onSubmit={handleSubmit}>
		<button type="submit">Submit</button><br/>
		{insurances.map((element) => (
			<div id={`radioDiv_${element.id_in_group}`}>
			  <input
				type="radio"
				id={`button_${element.id_in_group}`}
				name="insGroup"
				/*onChange={handleSelection(element.insurance_type, element.insurance_name)}*/
			  />
			  <label for={`button_${element.id_in_group}`}>
				{element.insurance_name}
			  </label>
			  <br />
			</div>
		  ))}
		  <div>
			<input type="radio" id="notListed" name="insGroup" /*onChange={handleSelection(insurances[0].insurance_type, "My insurance is not listed.")}*//>
			<label for="notListed">My insurance is not listed.</label>
		  </div>
		</form>
    );
}