import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ComInsurance() {
    
    const navigate = useNavigate();

	const handleCheck = (checkboxNum) => {

		switch (checkboxNum) {
			
		}
	}

    // prepare data for processing, and route to entry form for contact info
	const handleClick = () => {
		const cbData = [true, true, true, true, true];
		/*const response = await fetch("http://localhost:3000/storeCheckbox", {
            method: "PUT",
            body: JSON.stringify(cbData);
        });
        
        
        */
		navigate("../contact-ins", {state: cbData});
	}

    return (
        <div id="hasInsurance">
            <select name="comInsuranceSelections" id="comInsuranceSelections" size="8">
                <option>AARP</option>
                <option>Aetna</option>
                <option>AmBetter</option>
                <option>Assurant</option>
                <option>AvMed Health Plans</option>
                <option>Beech Street</option>
                <option>Blue Cross Blue Shield Federal Employee Program</option>
                <option>Cigna HealthCare</option>
                <option>Community Care Network</option>
                <option>Corvel Group Health</option>
                <option>Dimension Health</option>
                <option>Evolutions Healthcare</option>
                <option>First Health Coventry Healthcare</option>
                <option>Florida Blue</option>
                <option>GEHA Health Plans</option>
                <option>Great West (a Cigna HealthCare Company)</option>
                <option>Health First Health Plans</option>
                <option>Humana</option>
                <option>Mail Handlers Benefit Plan (MBHP)</option>
                <option>Mega Life and Health Insurance</option>
                <option>MetLife</option>
                <option>Multiplan</option>
                <option>Neighborhood Health Plan</option>
                <option>Optum Healthcare</option>
                <option>Preferred Medical Plan (PMP)</option>
                <option>Private Healthcare Systems (PHS)</option>
                <option>UnitedHealthCare</option>
                <option>Wellcare</option>
            </select>
        </div>
    );
}

export default ComInsurance;