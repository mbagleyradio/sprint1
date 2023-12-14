import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthcareExchange.css';

export default function HealthcareExchange() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        AETNA_QHP: 1,
		AMBETTER: 2,
		AMERIHEALTH_CARITAS_NEXT: 3,
        AVMED_ENTRUST: 4,
        CIGNA_CONNECT: 5,
        FLORIDA_BLUE_OPTIONS: 6,
        FLORIDA_BLUE_SELECT: 7,
        MOLINA: 8,
        MY_BLUE: 9,
        NOT_LISTED: 10
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        switch(Number(selection)) {
            case selectionNames.AETNA_QHP:
                cbData = "Healthcare Exchange: Aetna QHP";
            break;
            case selectionNames.AMBETTER:
                cbData = "Healthcare Exchange: AmBetter";
            break;
            case selectionNames.AMERIHEALTH_CARITAS_NEXT:
                cbData = "Healthcare Exchange: Amerihealth Caritas Next";
            break;
            case selectionNames.AVMED_ENTRUST:
                cbData = "Healthcare Exchange: AvMed Entrust";
            break;
            case selectionNames.CIGNA_CONNECT:
                cbData = "Healthcare Exchange: Cigna Connect";
            break;
            case selectionNames.FLORIDA_BLUE_OPTIONS:
                cbData = "Healthcare Exchange: Florida Blue Options";
            break;
            case selectionNames.FLORIDA_BLUE_SELECT:
                cbData = "Healthcare Exchange: Florida Blue Select";
            break;
            case selectionNames.MOLINA:
                cbData = "Healthcare Exchange: Molina";
            break;
            case selectionNames.MY_BLUE:
                cbData = "Healthcare Exchange: My Blue";
            break;
            case selectionNames.NOT_LISTED:
                cbData = "Healthcare Exchange: My insurance is not listed!";
            break;
            default:
                cbData = "ERROR: default case triggered in HealthcareExchange.js";
            break;
        }
        
        navigate("../contact-ins", {state: cbData});
    }

    return ( 
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="healthcareExchangeInsuranceSelections" id="healthcareExchangeInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">Aetna QHP</option>
                    <option value="2">AmBetter</option>
                    <option value="3">Amerihealth Caritas Next</option>
                    <option value="4">AvMed Entrust</option>
                    <option value="5">Cigna Connect</option>
                    <option value="6">Florida Blue Options</option>
                    <option value="7">Florida Blue Select</option>
                    <option value="8">Molina</option>
                    <option value="9">My Blue</option>
                    <option value="10">My insurance is not listed</option>
                </select>
            </form>
        </div>
    );
}