import './Medicaid.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Medicaid() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        MEDICAID: 1,
		CHILDRENS_HEALTH_INSURANCE: 2,
		MEDICAID_FOR_PREGNANT_WOMEN: 3,
        PACE: 4,
    }
	const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        switch(Number(selection)) {
            case selectionNames.MEDICAID:
                cbData = "Medicaid";
            break;
            case selectionNames.CHILDRENS_HEALTH_INSURANCE:
                cbData = "MEDICAID: Children's Health Insurance";
            break;
            case selectionNames.MEDICAID_FOR_PREGNANT_WOMEN:
                cbData = "Medicaid: Medicaid for Pregnant Women";
            break;
            case selectionNames.PACE:
                cbData = "Medicaid: PACE (Program for All-Inclusive Care for the Elderly)";
            break;
            default:
                cbData = "ERROR: default case triggered in Medicaid.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
	}
    
    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="medicaidInsuranceSelections" id="medicaidInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">Medicaid</option>
                    <option value="2">Children's Health Insurance Program (CHIP)</option>
                    <option value="3">Medicaid for Pregnant Women</option>
                    <option value="4">PACE (Program for All-Inclusive Care for the Elderly)</option>
                </select>
            </form>
        </div>
    );
}