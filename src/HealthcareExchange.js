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
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Healthcare Exchange: Insurance was not listed!";
            navigate("../contact-ins", { state: cbData });
        } else {
            switch (Number(selection)) {
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

            navigate("../sprint2", { state: cbData });
        }

    }

    return (
        <div id="healthcareExchangeInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="aetna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aetna">Aetna QHP</label><br/>
                <input value="2" type="radio" id="ambetter" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="ambetter">AmBetter</label><br/>
                <input value="3" type="radio" id="amerihealth" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="amerihealth">AmeriHealth Caritas Next</label><br/>
                <input value="4" type="radio" id="avmed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="avmed">AvMed Entrust</label><br/>
                <input value="5" type="radio" id="cigna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="cigna">Cigna Connect</label><br/>
                <input value="6" type="radio" id="flblue" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="flblue">Florida Blue Options</label><br/>
                <input value="7" type="radio" id="flblue_select" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="flblue_select">Florida Blue Select</label><br/>
                <input value="8" type="radio" id="molina" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="molina">Molina</label><br/>
                <input value="9" type="radio" id="myblue" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="myblue">My Blue</label><br/>
                <input value="10" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}