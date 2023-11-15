import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkersComp.css';

export default function WorkersComp() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        ADVANET_WORKERS_COMP: 1,
        BEECH_STREET: 2,
        CAREWORKS: 3,
        CHOICE_MANAGED_NETWORKS: 4,
        CORVEL_WORKERS_COMP: 5,
        DIMENSION_HEALTH: 6,
        FIRST_HEALTH_NETWORK: 7,
        HUMANA_WORKERS_COMP: 8
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        switch(Number(selection)) {
            case selectionNames.ADVANET_WORKERS_COMP:
                cbData = "Worker's Compensation Plans: Advanet Worker's Comp";
            break;
            case selectionNames.BEECH_STREET:
                cbData = "Worker's Compensation Plans: Beech Street";
            break;
            case selectionNames.CAREWORKS:
                cbData = "Worker's Compensation Plans: Careworks";
            break;
            case selectionNames.CHOICE_MANAGED_NETWORKS:
                cbData = "Worker's Compensation Plans: Choice Managed Networks";
            break;
            case selectionNames.CORVEL_WORKERS_COMP:
                cbData = "Worker's Compensation Plans: Corvel - Worker's Comp";
            break;
            case selectionNames.DIMENSION_HEALTH:
                cbData = "Worker's Compensation Plans: Dimension Health";
            break;
            case selectionNames.FIRST_HEALTH_NETWORK:
                cbData = "Worker's Compensation Plans: First Health Network";
            break;
            case selectionNames.HUMANA_WORKERS_COMP:
                cbData = "Worker's Compensation Plans: Humana Worker's Comp";
            break;
            default:
                cbData = "ERROR: default case triggered in WorkersComp.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
    }
    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="workersCompInsuranceSelections" id="workersCompInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">Advanet Worker's Comp</option>
                    <option value="2">Beech Street</option>
                    <option value="3">Careworks</option>
                    <option value="4">Choice Managed Networks</option>
                    <option value="5">Corvel - Worker's Comp</option>
                    <option value="6">Dimension Health</option>
                    <option value="7">First Health Network</option>
                    <option value="8">Humana Worker's Comp</option>
                </select>
            </form>
        </div>
    );
}