import './DemoNewGS.css';
import { useState } from 'react';

export default function GetStarted() {
    const [ insuranceSelection, setInsuranceSelection ] = useState(undefined);

    const handleMenuSelection = (e) => {
        setInsuranceSelection(prev => {
            return e.target.value;
        });
    }
    return (
    <div id="screen">
        <div id="menu">
            <div className="menuRow">
                <button className="menuRowButton" value="noInsurance" onClick={handleMenuSelection}>No Insurance</button>
                <button className="menuRowButton" value="medicare" onClick={handleMenuSelection}>Medicare</button>
                <button className="menuRowButton" value="medicareAdvantage" onClick={handleMenuSelection}>Medicare Advantage, HMO, PPO</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" value="medicaid" onClick={handleMenuSelection}>Medicaid</button>
                <button className="menuRowButton" value="medicaidManaged" onClick={handleMenuSelection}>Medicaid Managed Plans</button>
                <button className="menuRowButton" value="healthcareExchange" onClick={handleMenuSelection}>Healthcare Exchange Plans (ACA)</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" value="commercial" onClick={handleMenuSelection}>Commercial Insurance</button>
                <button className="menuRowButton" value="military" onClick={handleMenuSelection}>Military Insurance</button>
                <button className="menuRowButton" value="workersComp" onClick={handleMenuSelection}>Workers Comp</button>
            </div>
            <div className="menuRow">
                <button className="menuRowButton" value="international" onClick={handleMenuSelection}>International Insurance</button>
                <button className="menuRowButton" value="behavioral" onClick={handleMenuSelection}>Behavioral Health Ins.</button>
            </div>
        </div>
        {insuranceSelection !== undefined ? 
        <div id="selectionDisplay">
            <p>You Selected</p>
            <button className="menuRowButton">{insuranceSelection}</button>
            {insuranceSelection !== "noInsurance" ? 
            <div id="healthcareExchangePrompt">
                <p>Would you like to learn more about Healthcare Exchange Plan (ACA) Insurance? It may be more affordable than you might think.</p>
                <div id="healthcareExchangeMenuButtons">
                    <button className="healthcareMenuBTN">Yes</button>
                    <button className="healthcareMenuBtn">No</button>
                </div>
            </div> : <></>}
        </div> : <></>}
        <div id="insuranceList">

        </div>
    </div>
    );
}