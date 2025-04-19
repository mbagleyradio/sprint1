import './DemoNewGS.css';
import RadioButtonGroup from './RadioButtonGroup.js';
import HealthcareYesModal from './HealthcareYesModal.js';
import { useState, useEffect } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

export default function GetStarted() {
    const [ insuranceSelection, setInsuranceSelection ] = useState(undefined);
    const [ insuranceBtnStyle, setInsuranceBtnStyle ] = useState(undefined);
    const [ healthcareModalOpen, setHealthcareModalOpen ] = useState(false);
    const [ insuranceFetch, setInsuranceFetch ] = useState(undefined);
	const [ insuranceBtnName, setInsuranceBtnName ] = useState(undefined);
    const handleMenuSelection = (e) => {
        setInsuranceSelection(prev => {
            return e.target.value;
        });

        setInsuranceBtnStyle(prev => {
            return e.target.id;
        })

	switch (e.target.value) {	
		case "Uninsured / Self-Pay":	
        setInsuranceBtnName(prev => {
            		return "No Insurance";
        		});
		break;
			
		case "Medicare":
			setInsuranceBtnName(prev => {
            		return "Medicare";
        		});
		break;
			
		case "Medicare Manage Care (Advantage, HMO, PPO)":
			setInsuranceBtnName(prev => {
            		return "Medicare Advantage, HMO, PPO";
        		});
		break;
			
		case "Medicaid":
			setInsuranceBtnName(prev => {
            		return "Medicaid";
        		});
		break;
			
		case "Medicaid Managed Care - MCOs":
			setInsuranceBtnName(prev => {
            		return "Medicaid Managed Plans";
        		});
		break;
			
		case "Healthcare Exchange Plans":
			setInsuranceBtnName(prev => {
            		return "Healthcare Exchange Plans (ACA)";
        		});
		break;
			
		case "Commercial Insuranc Plan (HMO, PPO, POS, EPO)":
			setInsuranceBtnName(prev => {
            		return "Commercial Insurance";
        		});
		break;
			
		case "Military Plans":
			setInsuranceBtnName(prev => {
            		return "Military Insurance";
        		});
		break;
			
		case "Workers Compensation Plans":
			setInsuranceBtnName(prev => {
            		return "Workers Comp";
        		});
		break;
			
		case "International Plans":
			setInsuranceBtnName(prev => {
            		return "International Insurance";
        		});
		break;
			
		case "Behavioral Health Plans":
			setInsuranceBtnName(prev => {
            		return "Behavioral Health Ins.";
        		});
		break;

        default:
		break;
	    }
    }

    const populateInsuranceSubMenu = () => {
        
	// need to make a PHP file GetInsuranceSubMenu.php with a query passed in
        const headers = {};
		fetch("http://uvcsandbox.com/php/GetInsuranceSubMenu.php", {
			method: "POST",
			mode: "cors",
			headers: headers,
			body: JSON.stringify({
                		insuranceSelection: insuranceSelection
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

    useEffect(() => {
        if (insuranceSelection !== undefined) {
            populateInsuranceSubMenu();
        }
    }, [insuranceSelection])

    return (
    <div id="screen">
        <div id="nav">
            <img id="A2CLogo" src={A2CLogo} alt="Access2Care"/>
            <h1 id="navheader">What type of primary insurance do you have? (pick one)</h1>
        </div>
        <div id="menu">
            <div className="menuRow">
                <button className="menuRowButton" id="noInsuranceBtn" value="Uninsured / Self-Pay" onClick={handleMenuSelection}>No Insurance</button>
                <button className="menuRowButton" id="mnedicareBtn" value="Medicare" onClick={handleMenuSelection}>Medicare</button>
                <button className="menuRowButton" id="medAdvantageBtn" value="Medicare Manage Care (Advantage, HMO, PPO)" onClick={handleMenuSelection}>Medicare Advantage, HMO, PPO</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="medicaidBtn" value="Medicaid" onClick={handleMenuSelection}>Medicaid</button>
                <button className="menuRowButton" id="medManagedBtn" value="Medicaid Managed Care - MCOs" onClick={handleMenuSelection}>Medicaid Managed Plans</button>
                <button className="menuRowButton" id="healthcareExchangeBtn" value="Healthcare Exchange Plans" onClick={handleMenuSelection}>Healthcare Exchange Plans (ACA)</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="comInsuranceBtn" value="Commercial Insuranc Plan (HMO, PPO, POS, EPO)" onClick={handleMenuSelection}>Commercial Insurance</button>
                <button className="menuRowButton" id="milInsuranceBtn" value="Military Plans" onClick={handleMenuSelection}>Military Insurance</button>
                <button className="menuRowButton" id="workCompBtn" value="Workers Compensation Plans" onClick={handleMenuSelection}>Workers Comp</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" id="intInsuranceBtn" value="International Plans" onClick={handleMenuSelection}>International Insurance</button>
                <button className="menuRowButton" id="behavioralBtn" value="Behavioral Health Plans" onClick={handleMenuSelection}>Behavioral Health Ins.</button>
            </div>
        </div>
        {insuranceSelection !== undefined ? 
        <div id="selectionDisplay">
            <div id="arrow">
                <p id="arrowText">You Selected</p>
            </div>
            <button className="menuRowSelection" id={insuranceBtnStyle}>{insuranceBtnName}</button>
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
