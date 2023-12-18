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
        NOT_LISTED: 5
    }
	const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Medicaid: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        } else {
            switch(Number(selection)) {
                case selectionNames.MEDICAID:
                    cbData = "Medicaid";
                break;
                case selectionNames.CHILDRENS_HEALTH_INSURANCE:
                    cbData = "Medicaid: Children's Health Insurance";
                break;
                case selectionNames.MEDICAID_FOR_PREGNANT_WOMEN:
                    cbData = "Medicaid: Medicaid for Pregnant Women";
                break;
                case selectionNames.PACE:
                    cbData = "Medicaid: PACE (Program for All-Inclusive Care for the Elderly)";
                break;
                case selectionNames.NOT_LISTED:
                    cbData = "Medicaid: My insurance is not listed!";
                break;
                default:
                    cbData = "ERROR: default case triggered in Medicaid.js";
                break;
            }
            console.log(cbData);
            navigate("../sprint2", {state: cbData});
        }
	}
    
    return (
        <div id="medicaidInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="medicaid" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="medicaid">Medicaid</label><br/>
                <input value="2" type="radio" id="chip" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="chip">Children's Health Insurance Program (CHIP)</label><br/>
                <input value="3" type="radio" id="medicaid_pregnant" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="medicaid_pregnant">Medicaid for Pregnant Women</label><br/>
                <input value="4" type="radio" id="pace" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="pace">PACE (Program for All-Inclusive Care for the Elderly)</label><br/>
                <input value="5" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label>
            </form>
        </div>
    );
}