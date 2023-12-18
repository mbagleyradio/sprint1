import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Behavioral.css';

export default function Behavioral() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        AMERIGROUP: 1,
        BEACON: 2,
        BEHAVIORAL_HEALTH_SERVICES: 3,
        CONCORDIA: 4,
        EVERNORTH: 5,
        MAGELLAN_BEHAVIORAL_HEALTH: 6,
        MENTAL_HEALTH_ASSOCIATES: 7,
        OPTUM: 8,
        SUNSHINE: 9,
        VALUE_OPTIONS: 10,
        WELLCARE_BH: 11,
        NOT_LISTED: 12
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Behavioral Insurance: Insurance was not listed"
            navigate("../contact-ins", {state: cbData});
        } else {
            switch (Number(selection)) {
                case selectionNames.AMERIGROUP:
                    cbData = "Behavioral Insurance: Amerigroup";
                break;
                case selectionNames.BEACON:
                    cbData = "Behavioral Insurance: Beacon";
                break;
                case selectionNames.BEHAVIORAL_HEALTH_SERVICES:
                    cbData = "Behavioral Insurance: Behavioral Health Services";
                break;
                case selectionNames.CONCORDIA:
                    cbData = "Behavioral Insurance: Concordia";
                break;
                case selectionNames.EVERNORTH:
                    cbData = "Behavioral Insurance: Evernorth";
                break;
                case selectionNames.MAGELLAN_BEHAVIORAL_HEALTH:
                    cbData = "Behavioral Insurance: Magellan Behavioral Health";
                break;
                case selectionNames.MENTAL_HEALTH_ASSOCIATES:
                    cbData = "Behavioral Insurance: Mental Health Associates";
                break;
                case selectionNames.OPTUM:
                    cbData = "Behavioral Insurance: Optum";
                break;
                case selectionNames.SUNSHINE:
                    cbData = "Behavioral Insurance: Sunshine";
                break;
                case selectionNames.VALUE_OPTIONS:
                    cbData = "Behavioral Insurance: Value Options";
                break;
                case selectionNames.WELLCARE_BH:
                    cbData = "Behavioral Insurance: Wellcare BH";
                break;
                case selectionNames.NOT_LISTED:
                    cbData = "Behavioral Insurance: Not Listed";
                break;
                default:
                    cbData = "ERROR: default case triggered in Behavioral.js";
                break;
            }
            navigate("../sprint2", {state: cbData});
        }
        
    }
    return (
    <div id="behavioralInsuranceSelections">
        <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="amerigroup" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="amerigroup">Amerigroup</label><br/>
                <input value="2" type="radio" id="beacon" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="beacon"></label>Beacon<br/>
                <input value="3" type="radio" id="behavioral_health_services" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="behavioral_health_services">Behavioral Health Services</label><br/>
                <input value="4" type="radio" id="concordia" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="concordia">Concordia</label><br/>
                <input value="5" type="radio" id="evernorth" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="evernorth">Evernorth</label><br/>
                <input value="6" type="radio" id="magellan_behavioral_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="magellan_behavioral_health">Magellan Behavioral Health</label><br/>
                <input value="7" type="radio" id="mental_health_associates" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="mental_health_associates">Mental Health Associates</label><br/>
                <input value="8" type="radio" id="optum" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optum">Optum</label><br/>
                <input value="9" type="radio" id="sunshine" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="sunshine">Sunshine</label><br/>
                <input value="10" type="radio" id="value_options" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="value_options">Value Options</label><br/>
                <input value="11" type="radio" id="wellcare_bh" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="wellcare_bh">Wellcare BH</label><br/>
                <input value="12" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
        </form>
    </div>
    );
}