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
        HUMANA_WORKERS_COMP: 8,
        NOT_LISTED: 9
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Worker's Compensation Plans: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        } else {
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
                case selectionNames.NOT_LISTED:
                    cbData = "Worker's Compensation Plans: My insurance is not listed";
                break;
                default:
                    cbData = "ERROR: default case triggered in WorkersComp.js";
                break;
            }
            navigate("../sprint2", {state: cbData});
        }
    }
    
    return (
        <div id="workersCompInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="advanet_workers_comp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="advanet_workers_comp">Advanet Workers Comp</label><br/>
                <input value="2" type="radio" id="beech_street" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="beech_street">Beech Street</label><br/>
                <input value="3" type="radio" id="careworks" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="careworks"></label>Careworks<br/>
                <input value="4" type="radio" id="choice_managed_networks" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="choice_managed_networks">Choice Managed Networks</label><br/>
                <input value="5" type="radio" id="corvel_workers_comp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="corvel_workers_comp">Corvel - Worker's Comp</label><br/>
                <input value="6" type="radio" id="dimension_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="dimension_health">Dimension Health</label><br/>
                <input value="7" type="radio" id="first_health_network" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="first_health_network">First Health Network</label><br/>
                <input value="8" type="radio" id="humana_workers_comp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="humana_workers_comp">Humana Workers Comp</label><br/>
                <input value="9" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}