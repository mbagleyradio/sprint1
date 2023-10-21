import './NoInsurance.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandleInfo } from './handleInfo.js';

function NoInsurance() {
	const [isNoCost, setIsNoCost] = useState(false);
	const [isSliding, setIsSliding] = useState(false);
	const [isDiscount, setIsDiscount] = useState(false);
	const [isPayment, setIsPayment] = useState(false);
	const [isFAP, setIsFAP] = useState(false);
	const [isCatastrophic, setIsCatastrophic] = useState(false);
	const [isCareCredit, setIsCareCredit] = useState(false);
	const [isSelfPay, setIsSelfPay] = useState(false);
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

			default:
			break;
		}
	} 

	// send checkbox info to external function for server-request, then route to contact form
	const handleClick = () => {
		// Prepare data - an array of booleans
		HandleInfo.checkBoxData = [false, isSliding, isDiscount, isPayment, isFAP, isCatastrophic, isCareCredit, isSelfPay];
		navigate("../contact-no-ins");
	}
    
    return (
    <div id="noInsurance">
		<button onClick={() => handleClick()}>Send</button>
        <div class="checkbox-container">
			<input type="checkbox" id="cb1" onChange={() => handleCheck(1)}/>
			<label for="cb1">No cost for eligible uninsured</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb2" onChange={() => handleCheck(2)}/>
			<label for="cb2">Uninsured sliding fee</label>
		</div>
		<div class="checkbox-container">
			<input type="checkbox" id="cb3" onChange={() => handleCheck(3)}/>
			<label for="cb3">Uninsured discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb4" onChange={() => handleCheck(4)}/>
			<label for="cb4">Payment plans</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb5" onChange={() => handleCheck(5)}/>
			<label for="cb5">F.A.P discount (financial assistance program)</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb6" onChange={() => handleCheck(6)}/>
			<label for="cb6">Catastrophic care discount</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb7" onChange={() => handleCheck(7)}/>
			<label for="cb7">Care credit card</label>
		</div>
        <div class="checkbox-container">
			<input type="checkbox" id="cb8" onChange={() => handleCheck(8)}/>
			<label for="cb8">Self-pay</label>
		</div>
    </div>
    );
}

export default NoInsurance;