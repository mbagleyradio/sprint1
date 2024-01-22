import A2CLogo from './A2CLogo_150x150.png';
import './GetStarted.css';
import Options from './Options.js';
import { useState } from 'react';

function GetStarted() {
    const [insurance, setInsurance] = useState(undefined);
    const [buttonName, setButtonName] = useState("Your Selection");
    const [buttonColor, setButtonColor] = useState("#B0E0E6");
    const [buttonBorderColor, setButtonBorderColor] = useState("#000");
    const [userSelection, setUserSelection] = useState(0);
    
    const style = {
        backgroundColor: buttonColor,
        border: `1px solid ${buttonBorderColor}` 
    };

    const handleClick = (buttonNum) => {
        switch(buttonNum) {
            case 1: // Commercial Insurance - Lime Standard
                setInsurance(true);
                setButtonName("Commercial Insurance");
                setButtonColor("#ABD037");
                setButtonBorderColor("#475715");
                setUserSelection(2);
            break;

            case 2: // No Insurance - Slate Lite
                setInsurance(false);
                setButtonName("No Insurance");
                setButtonColor("#EAEAEA");
                setButtonBorderColor("#000000");
                setUserSelection(1);
                
            break;

            case 3: // Medicare - Orange Standard
                setInsurance(true);
                setButtonName("Medicare");
                setButtonColor("#F36D21");
                setButtonBorderColor("#6E2B06");
                setUserSelection(3);
            break;

            case 4: // Medicare Advantage - Orange Mid
                setInsurance(true);
                setButtonName("Medicare Advantage, HMO, PPO");
                setButtonColor("#FBC8AB");
                setButtonBorderColor("#6E2B06");
                setUserSelection(4);
            break;

            case 5: // Medicaid - Teal Standard
                setInsurance(true);
                setButtonName("Medicaid");
                setButtonColor("#00AEEF");
                setButtonBorderColor("#004D68");
                setUserSelection(5);
            break;

            case 6: // Military Insurance - Lime Mid
                setInsurance(true);
                setButtonName("Military Insurance");
                setButtonColor("#D4E79D");
                setButtonBorderColor("#475715");
                setUserSelection(7);
            break;

            case 7: // Medicaid Managed Care - Teal Mid
                setInsurance(true);
                setButtonName("Medicaid Managed Care (MCO)");
                setButtonColor("#85DFFF");
                setButtonBorderColor("#004D68");
                setUserSelection(6);
            break;

            case 8: // International Insurance - Plum Mid
                setInsurance(true);
                setButtonName("International Insurance");
                setButtonColor("#D2A2D2");
                setButtonBorderColor("#562C56");
                setUserSelection(9);
            break;

            case 9: // Workers Comp - Lime Lite
                setInsurance(true);
                setButtonName("Workers Comp");
                setButtonColor("#E8F2CA");
                setButtonBorderColor("#475715");
                setUserSelection(10);
            break;

            case 10: // Behavioral Health Ins. - Plum Lite
                setInsurance(true);
                setButtonName("Behavioral Health Ins.");
                setButtonColor("#F0E0F0");
                setButtonBorderColor("#562C56");
                setUserSelection(11);
            break;

            case 11: // Healthcare Exchange Plans - B/W
                setInsurance(true);
                setButtonName("Healthcare Exchange Plans");
                setButtonColor("#FFFFFF");
                setButtonBorderColor("#000000");
                setUserSelection(8);
            break;
            default:
            break;
        }
    }
    return(
        <div id="gs-centered">
            <div id="gs-header">
                <img id="welcomeIMG" src={A2CLogo} alt="Welcome to Monroe County"/>
                <h1 id="welcomeText">What type of primary insurance do you have? (pick one)</h1>
            </div>
            <div id="gs-buttons">
                <button id="noInsuranceBtn" onClick={() => handleClick(2)}>NO Insurance</button>
                <button class="getStartedButtons" id="comInsuranceBtn" onClick={() => handleClick(1)}>Commercial Insurance</button>
                <button class="getStartedButtons" id="medicareBtn" onClick={() => handleClick(3)}>Medicare</button>
                <button class="getStartedButtons" id="medAdvantageBtn" onClick={() => handleClick(4)}>Medicare Advantage, HMO, PPO</button>
                <button class="getStartedButtons" id="medicaidBtn" onClick={() => handleClick(5)}>Medicaid</button>
                <button class="getStartedButtons" id="medManagedBtn" onClick={() => handleClick(7)}>Medicaid Managed Care (MCO)</button>
                <button class="getStartedButtons" id="workCompBtn" onClick={() => handleClick(9)}>Workers Comp</button>
                <button class="getStartedButtons" id="milInsuranceBtn" onClick={() => handleClick(6)}>Military Insurance</button>
                <button class="getStartedButtons" id="intInsuranceBtn" onClick={() => handleClick(8)}>International Insurance</button>
            </div>
            <div id="lastRow">
                    <button class="getStartedButtons" id="behavioralBtn" onClick={() => handleClick(10)}>Behavioral Health Ins.</button>
                    <button class="getStartedButtons" id="healthcareBtn" onClick={() => handleClick(11)}>Healthcare Exchange Plans</button>
            </div>
            <div id="gs-line-break">
                <hr></hr>
                <button class="getStartedButtons" id="yourBtn" style={style}>{buttonName}</button>
            </div>
            <div id="gs-options-box">
                <Options isInsured={insurance} insuranceType={userSelection}/>
            </div>
        </div>
    );
}

export default GetStarted;