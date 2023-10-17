import placeholder from './placeholder_for_monroe-county-logo.png';
import './GetStarted.css';
import Options from './Options.js';
import { useState } from 'react';

function GetStarted() {
    const [insurance, setInsurance] = useState(undefined);
    const [buttonName, setButtonName] = useState("Your Selection");
    const [color, setColor] = useState("#B0E0E6");
    
    const handleClick = (buttonNum) => {
        switch(buttonNum) {
            case 1: // Commercial Insurance
                setInsurance(true);
                setButtonName("Commercial Insurance");
                setColor("#00de00");
            break;

            case 2: // No Insurance
                setInsurance(false);
                setButtonName("No Insurance");
                setColor("#ffff00");
            break;

            case 3: // Medicare
                setInsurance(true);
                setButtonName("Medicare");
                setColor("#00de00");
            break;

            case 4: // Medicare Advantage
                setInsurance(true);
                setButtonName("Medicare Advantage, HMO, PPO");
                setColor("#00de00");
            break;

            case 5: // Medicaid
                setInsurance(true);
                setButtonName("Medicaid");
                setColor("#00de00");
            break;

            case 6: // Military Insurance
                setInsurance(true);
                setButtonName("Military Insurance");
                setColor("#00de00");
            break;

            case 7: // Medicaid Managed Care
                setInsurance(true);
                setButtonName("Medicaid Managed Care (MCO)");
                setColor("#00de00");
            break;

            case 8: // International Insurance
                setInsurance(true);
                setButtonName("International Insurance");
                setColor("#00de00");
            break;

            case 9: // Workers Comp
                setInsurance(true);
                setButtonName("Workers Comp");
                setColor("#00de00");
            break;

            case 10: // Behavioral Health Ins.
                setInsurance(true);
                setButtonName("Behavioral Health Ins.");
                setColor("#00de00");
            break;

            default:
        }
    }
    return(
        <div id="gs-centered">
            <div id="gs-header">
                <img id="welcomeIMG" src={placeholder} alt="Welcome to Monroe County"/>
                <h1 id="welcomeText">What type of primary insurance do you have? (pick one)</h1>
            </div>
            <div id="gs-buttons">
                <button id="comInsuranceBtn" onClick={() => handleClick(1)}>Commercial Insurance</button>
                <button id="noInsuranceBtn" onClick={() => handleClick(2)}>NO Insurance</button>
                <button id="medicareBtn" onClick={() => handleClick(3)}>Medicare</button>
                <br/>
                <button id="medAdvantageBtn" onClick={() => handleClick(4)}>Medicare Advantage, HMO, PPO</button>
                <button id="medicaidBtn" onClick={() => handleClick(5)}>Medicaid</button>
                <button id="milInsuranceBtn" onClick={() => handleClick(6)}>Military Insurance</button>
                <button id="medManagedBtn" onClick={() => handleClick(7)}>Medicaid Managed Care (MCO)</button>
                <br/>
                <button id="intInsuranceBtn" onClick={() => handleClick(8)}>International Insurance</button>
                <button id="workCompBtn" onClick={() => handleClick(9)}>Workers Comp</button>
                <button id="behavioralBtn" onClick={() => handleClick(10)}>Behavioral Health Ins.</button>
            </div>
            <div id="gs-line-break">
                <hr></hr>
                <button id="yourBtn" style={{backgroundColor: `${color}`}}>{buttonName}</button>
            </div>
            <div id="gs-options-box">
                <Options isInsured={insurance}/>
            </div>
            
        </div>
    );
}

export default GetStarted;