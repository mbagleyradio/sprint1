export default function RadioButtonGroup({insurances, isLoaded}) {
	if (!isLoaded) {
		return (<h5>Loading...</h5>);
	} else return(
        <>
		{insurances.map((element) => (
			<div id={`radioDiv_${element.id_in_group}`}>
			  <input
				type="radio"
				id={`button_${element.id_in_group}`}
				name="insGroup"
			  />
			  <label for={`button_${element.id_in_group}`}>
				{element.insurance_name}
			  </label>
			  <br />
			</div>
		  ))}
		  <div>
			<input type="radio" id="notListed" name="insGroup"/>
			<label for="notListed">My insurance is not listed.</label>

		  </div>
		</>
    );
}