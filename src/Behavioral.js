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
        WELLCARE_BH: 11
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
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
            default:
                cbData = "ERROR: default case triggered in Behavioral.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
    }
    return (
    <div id="hasInsurance">
        <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
            <select value={selection} name="behavioralInsuranceSelections" id="behavioralInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                <option value="1">Amerigroup</option>
                <option value="2">Beacon</option>
                <option value="3">Behavioral Health Services</option>
                <option value="4">Concordia</option>
                <option value="5">Evernorth</option>
                <option value="6">Magellan Behavioral Health</option>
                <option value="7">Mental Health Associates</option>
                <option value="8">Optum</option>
                <option value="9">Sunshine</option>
                <option value="10">Value Options</option>
                <option value="11">Wellcare BH</option>
            </select>
        </form>
    </div>
    );
}