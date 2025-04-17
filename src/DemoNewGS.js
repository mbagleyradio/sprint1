import './DemoNewGS.css';
import RadioButtonGroup from './RadioButtonGroup.js';
import HealthcareYesModal from './HealthcareYesModal.js';
import { useState } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

export default function GetStarted() {
    const [ insuranceSelection, setInsuranceSelection ] = useState(undefined);
    const [ insuranceBtnStyle, setInsuranceBtnStyle ] = useState(undefined);
    const [ healthcareModalOpen, setHealthcareModalOpen ] = useState(false);
	const [ insuranceQuery, setInsuranceQuery ] = useState(undefined);
    const [ insuranceFetch, setInsuranceFetch ] = useState(undefined);
    const handleMenuSelection = (e) => {
        setInsuranceSelection(prev => {
            return e.target.value;
        });

        setInsuranceBtnStyle(prev => {
            return e.target.id;
        })

	switch (e.target.value) {
		case default:
		break;
		case "noInsurance":
		break;
		case "medicare":
		break;
		case "medicareAdvantage":
		break;
		case "medicaid":
		break;
		case "medicaidManaged":
		break;
		case "healthcareExchange":
		break;
		case "commercial":
		break;
		case "military":
		break;
		case "workersComp":
		break;
		case "international":
		break;
		case "behavioral":
		break;
	}

        populateInsuranceSubMenu();
    }

    const populateInsuranceSubMenu = () => {
        
	// need to make a PHP file GetInsuranceSubMenu.php with a query passed in
        const headers = {};
		fetch("http://uvcsandbox.com/php/GetInsuranceSubMenu.php", {
			method: "POST",
			mode: "cors",
			headers: headers
			body: JSON.stringify({
                		query: insuranceQuery
            		})
		}).then(response => {
			return response.json()
		}).then(data => {
			setInsuranceFetch(data);
		}).catch(error => {
			console.log(error);
		});
    }

    const handleHealthcareModalOpen = () => {
        if (healthcareModalOpen === false) {
            setHealthcareModalOpen(prev => {
                return true;
            });
        }
    }

    const handleHealthcareModalClose = () => {
        setHealthcareModalOpen(prev => {
            return false;
        });
    }

    return (
    <div id="screen">
        <div id="nav">
            <img src={A2CLogo} alt="Access2Care"/>
            <h1 id="navheader">What type of primary insurance do you have? (pick one)</h1>
        </div>
        <div id="menu">
            <div className="menuRow">
                <button className="menuRowButton" id="noInsuranceBtn" value="noInsurance" onClick={handleMenuSelection}>No Insurance</button>
                <button className="menuRowButton" id="mnedicareBtn" value="medicare" onClick={handleMenuSelection}>Medicare</button>
                <button className="menuRowButton" id="medAdvantageBtn" value="medicareAdvantage" onClick={handleMenuSelection}>Medicare Advantage, HMO, PPO</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="medicaidBtn" value="medicaid" onClick={handleMenuSelection}>Medicaid</button>
                <button className="menuRowButton" id="medManagedBtn" value="medicaidManaged" onClick={handleMenuSelection}>Medicaid Managed Plans</button>
                <button className="menuRowButton" id="healthcareExchangeBtn" value="healthcareExchange" onClick={handleMenuSelection}>Healthcare Exchange Plans (ACA)</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="comInsuranceBtn" value="commercial" onClick={handleMenuSelection}>Commercial Insurance</button>
                <button className="menuRowButton" id="milInsuranceBtn" value="military" onClick={handleMenuSelection}>Military Insurance</button>
                <button className="menuRowButton" id="workCompBtn" value="workersComp" onClick={handleMenuSelection}>Workers Comp</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="intInsuranceBtn" value="international" onClick={handleMenuSelection}>International Insurance</button>
                <button className="menuRowButton" id="behavioralBtn" value="behavioral" onClick={handleMenuSelection}>Behavioral Health Ins.</button>
            </div>
        </div>
        {insuranceSelection !== undefined ? 
        <div id="selectionDisplay">
            <div id="arrow">
                <p id="arrowText">You Selected</p>
            </div>
            <button className="menuRowSelection" id={insuranceBtnStyle}>{insuranceSelection}</button>
            {insuranceSelection === "noInsurance" ? 
            <div id="healthcareExchangePrompt">
                <p>Would you like to learn more about Healthcare Exchange Plan (ACA) Insurance? It may be more affordable than you might think.</p>
                <div id="healthcareExchangeMenuButtons">
                    <button className="healthcareMenuBTN" id="greenBtn" onClick={handleHealthcareModalOpen}>Yes</button>
                    <button className="healthcareMenuBTN" id="redBtn">No</button>
                </div>
            </div> : <></>}
        </div> : <></>}
        <div id="insuranceList">
        {insuranceFetch && <RadioButtonGroup insurances={insuranceFetch}/>}
        </div>
        {healthcareModalOpen && <HealthcareYesModal healthcareModalOpen={healthcareModalOpen} handleHealthcareModalClose={handleHealthcareModalClose}/>}
    </div>
    );
}
