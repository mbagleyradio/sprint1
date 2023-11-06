import './HasInsurance.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleInfo from './handleInfo.js';

function HasInsurance() {
	const [isMultiplan, setIsMultiplan] = useState(false);
	const [isOptum, setIsOptum] = useState(false);
	const [isNeighborhood, setIsNeighborhood] = useState(false);
	const [isPreferred, setIsPreferred] = useState(false);
	const [isPHS, setIsPHS] = useState(false);
	const [isUnited, setIsUnited] = useState(false);
	const [isWellcare, setIsWellcare] = useState(false);
	const [isNotListed, setIsNotListed] = useState(false);
    const navigate = useNavigate();

	const handleCheck = (checkboxNum) => {

		switch (checkboxNum) {
			case 1: // Multiplan
				setIsMultiplan(!isMultiplan);
			break;

			case 2: // Neighborhood Health Plan
				setIsNeighborhood(!isNeighborhood);
			break;

			case 3: // Optum Healthcare
				setIsOptum(!isOptum);
			break;

			case 4: // Preferred Medical Plan
				setIsPreferred(!isPreferred);
			break;

			case 5: // Private Healthcare Systems (PHS)
				setIsPHS(!isPHS);
			break;

			case 6: // UnitedHealthCare
				setIsUnited(!isUnited);
			break;
			
			case 7: // Wellcare
				setIsWellcare(!isWellcare);
			break;

			case 8: // My insurance is not listed
				setIsNotListed(!isNotListed);
			break;

			default:
			break;
		}
	}

	// prepare data for processing, and route to entry form for contact info
	const handleClick = () => {
		/* const cbData = [true, isMultiplan, isOptum, isNeighborhood, isPreferred, isPHS, isUnited, isWellcare, isNotListed];*/
		/*const response = await fetch("http://localhost:3000/storeCheckbox", {
            method: "PUT",
            body: cbData
        });
        const result = await response.json();
        
        */
		navigate("../contact-ins");
	}
    
    return (
    <div id="hasInsurance">
		<button onClick={() => handleClick()}>Send</button>
        <div class="checkbox-container">
            <input type="checkbox" id="cb1" onChange={() => handleCheck(1)}/>
            <label for="cb1">Multiplan</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb2" onChange={() => handleCheck(2)}/>
            <label for="cb2">Neighborhood Health Plan</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb3" onChange={() => handleCheck(3)}/>
            <label for="cb3">Optum Healthcare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb4" onChange={() => handleCheck(4)}/>
            <label for="cb4">Preferred Medical Plan (PMP)</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb5" onChange={() => handleCheck(5)}/>
            <label for="cb5">Private Healthcare Systems (PHS)</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb6" onChange={() => handleCheck(6)}/>
            <label for="cb6">UnitedHealthCare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb7" onChange={() => handleCheck(7)}/>
            <label for="cb7">Wellcare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb8" onChange={() => handleCheck(8)}/>
            <label for="cb8">My insurance is not listed</label>
        </div>
    </div>
    );
}

export default HasInsurance;