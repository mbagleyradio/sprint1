import './NoInsurance.css';
import { useState } from 'react';

function NoInsurance() {
	/* got some stinky code. use separate useState hooks for each checkbox to track their values.
	const [isChecked, setIsChecked] = useState(false);
	const [isNoCost, setIsNoCost] = useState(false);
	const [isSliding, setIsSlidng] = useState(false);
	const [isDiscount, setIsDiscount] = useState(false);
	const [isPayment, setIsPayment] = useState(false);
	const [isFAP, setIsFAP] = useState(false);
	const [isCatastrophic, setIsCatastrophic] = useState(false);
	const [isCareCredit, setIsCareCredit] = useState(false);
	const [isSelfPay, setIsSelfPay] = useState(false);

	const handleCheck = (checkboxNum) => {
		setIsChecked(!isChecked);

		switch (checkBoxNum) {
			case 1: // no cost
			break;

			case 2: // sliding

			break;

			case 3: // discount

			break;

			case 4: // payment plan

			break;

			case 5: // financial assistance plan aka FAP

			break;

			case 6: // catastrophic care plan
			
			break;
			
			case 7: // care credit plan

			break;

			case 8: // self pay

			break;
		}
	} */

	// see the commented part below: "checked" is a property of whether the checkbox is checked or not at start. 
	// onChange is a property that will handle what the checkbox does when the checkbox is checked. 
	// use onChange to change the state of some props (for each checkbox) and that will determine the info sent from the user.
    return (
    <div id="noInsurance">
        <div class="checkbox-container">
			<input type="checkbox" id="cb1" /*onChange={handleCheck} checked={isChecked}*//>
			<label for="cb1">No cost for eligible uninsured</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb2"/>
			<label for="cb2">Uninsured sliding fee</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb3"/>
			<label for="cb3">Uninsured discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb4"/>
			<label for="cb4">Payment plans</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb5"/>
			<label for="cb5">F.A.P discount (financial assistance program)</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb6"/>
			<label for="cb6">Catastrophic care discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb7"/>
			<label for="cb7">Care credit card</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb8"/>
			<label for="cb8">Self-pay</label>
		</div>
    </div>
    );
}

export default NoInsurance;