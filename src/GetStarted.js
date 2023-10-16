import placeholder from './placeholder_for_monroe-county-logo.png';
import './GetStarted.css';

function GetStarted() {
    return(
        <div id="gs-centered">
            <div id="gs-header">
                <img id="welcomeIMG" src={placeholder} alt="Welcome to Monroe County"/>
                <h1 id="welcomeText">What type of primary insurance do you have? (pick one)</h1>
            </div>
            <div id="gs-buttons">
                <button id="comInsuranceBtn">Commercial Insurance</button>
                <button id="noInsuranceBtn">NO Insurance</button>
                <button id="medicareBtn">Medicare</button>
                <button id="medAdvantageBtn">Medicare Advantage, HMO, PPO</button>
                <button id="medicaidBtn">Medicaid</button>
                <button id="milInsuranceBtn">Military Insurance</button>
                <button id="medManagedBtn">Medicaid Managed Care (MCO)</button>
                <button id="intInsuranceBtn">International Insurance</button>
                <button id="workCompBtn">Workers Comp</button>
                <button id="behavioralBtn">Behavioral Health Ins.</button>
            </div>
            <div id="gs-options-box">
                
            </div>
        </div>
    );
}

export default GetStarted;