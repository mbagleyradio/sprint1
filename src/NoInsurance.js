import './NoInsurance.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NoInsurance() {
	const [isNoCost, setIsNoCost] = useState(false);
	const [isSliding, setIsSliding] = useState(false);
	const [isDiscount, setIsDiscount] = useState(false);
	const [isPayment, setIsPayment] = useState(false);
	const [isFAP, setIsFAP] = useState(false);
	const [isCatastrophic, setIsCatastrophic] = useState(false);
	const [isCareCredit, setIsCareCredit] = useState(false);
	const [isSelfPay, setIsSelfPay] = useState(false);
	const [isNotListed, setIsNotListed] = useState(false);

	const navigate = useNavigate();

	const handleCheck = (checkboxNum) => {

		switch (checkboxNum) {
			case 1: // no cost
				setIsNoCost(!isNoCost);
			break;

			case 2: // sliding
				setIsSliding(!isSliding);
			break;

			case 3: // discount
				setIsDiscount(!isDiscount);
			break;

			case 4: // payment plan
				setIsPayment(!isPayment);
			break;

			case 5: // financial assistance plan aka FAP
				setIsFAP(!isFAP);
			break;

			case 6: // catastrophic care plan
				setIsCatastrophic(!isCatastrophic);
			break;
			
			case 7: // care credit plan
				setIsCareCredit(!isCareCredit);
			break;

			case 8: // self pay
				setIsSelfPay(!isSelfPay);
			break;

			case 9: // not listed
				setIsNotListed(!isNotListed);
			break;

			default:
			break;
		}
	}

	const processUninsuredInfoString = () => {
		let uninsuredInfo = "Uninsured: ";
	
		if (isNoCost) {
			uninsuredInfo += "No cost for eligible uninsured, ";
		}
		if (isSliding) {
			uninsuredInfo += "Uninsured sliding fee, ";
		}
		if (isDiscount) {
			uninsuredInfo += "Uninsured discount, ";
		}
		if (isPayment) {
			uninsuredInfo += "Payment plans, ";
		}
		if (isFAP) {
			uninsuredInfo += "F.A.P discount (financial assistance program), ";
		}
		if (isCatastrophic) {
			uninsuredInfo += "Catastrophic care discount, ";
		}
		if (isCareCredit) {
			uninsuredInfo += "Care credit card, ";
		} 
		if (isSelfPay) {
			uninsuredInfo += "Self-pay, ";
		}
	
		// cleanup - remove trailing comma at the end
		let length = uninsuredInfo.length - 2;
		uninsuredInfo = uninsuredInfo.slice(0, length);
	
		return uninsuredInfo;
	}

	// send checkbox info to external function for server-request, then route to contact form
	const handleClick = () => {
		// Prepare data - an array of booleans
		const cbData = [false, isNoCost, isSliding, isDiscount, isPayment, isFAP, isCatastrophic, isCareCredit, isSelfPay, isNotListed];

		// if they did not click "my insurance is not listed", send them to the Healthcare Categories page 
		if (isNotListed === false) {
			let uninsuredInfo = processUninsuredInfoString();
			navigate("../healthcare-categories", {state: uninsuredInfo});
		}
		else {
		/*const response = await fetch("http://localhost:3000/storeCheckbox", {
            method: "PUT",
            body: JSON.stringify(cbData);
        }); */
			navigate("../contact-no-ins", {state: cbData});
		}
	}
    
    return (
    <div id="noInsurance">
		<button className="noInsuranceLabels" onClick={() => handleClick()}>Select</button>
        <div class="checkbox-container">
			<input type="checkbox" id="cb1" onChange={() => handleCheck(1)}/>
			<label className="noInsuranceLabels" for="cb1">No cost for eligible uninsured</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb2" onChange={() => handleCheck(2)}/>
			<label className="noInsuranceLabels" for="cb2">Uninsured sliding fee</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb3" onChange={() => handleCheck(3)}/>
			<label className="noInsuranceLabels" for="cb3">Uninsured discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb4" onChange={() => handleCheck(4)}/>
			<label className="noInsuranceLabels" for="cb4">Payment plans</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb5" onChange={() => handleCheck(5)}/>
			<label className="noInsuranceLabels" for="cb5">F.A.P discount (financial assistance program)</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb6" onChange={() => handleCheck(6)}/>
			<label className="noInsuranceLabels" for="cb6">Catastrophic care discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb7" onChange={() => handleCheck(7)}/>
			<label className="noInsuranceLabels" for="cb7">Care credit card</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb8" onChange={() => handleCheck(8)}/>
			<label className="noInsuranceLabels" for="cb8">Self-pay</label>
		</div>
    </div>
    );
}

export default NoInsurance;

/*  "My insurance is not listed"

<div class="checkbox-container">
			<input type="checkbox" id="cb9" onChange={() => handleCheck(9)}/>
			<label for="cb9">My insurance is not listed</label>
		</div>

*/