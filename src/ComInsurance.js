import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComInsurance.css';
function ComInsurance() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        AARP: 1,
		AETNA: 2,
		AMBETTER: 3,
        ASSURANT: 4,
        AVMED_HEALTH_PLANS: 5,
        BEECH_STREET: 6,
        BLUE_CROSS_BLUE_SHIELD: 7,
        CIGNA_HEALTHCARE: 8,
        COMMUNITY_CARE_NETWORK: 9,
        CORVEL_GROUP_HEALTH: 10,
        DIMENSION_HEALTH: 11,
        EVOLUTIONS_HEALTHCARE: 12,
        FIRST_HEALTH_COVENTRY_HEALTHCARE: 13,
        FLORIDA_BLUE: 14,
        GEHA_HEALTH_PLANS: 15,
        GREAT_WEST: 16,
        HEALTH_FIRST_HEALTH_PLANS: 17,
        HUMANA: 18,
        MAIL_HANDLERS_BENEFIT_PLAN: 19,
        MEGA_LIFE: 20,
        METLIFE: 21,
        MULTIPLAN: 22,
        NEIGHBORHOOD_HEALTH_PLAN: 23,
        OPTUM_HEALTHCARE: 24,
        PREFERRED_MEDICAL_PLAN: 25,
        PRIVATE_HEALTHCARE_SYSTEMS: 26,
        UNITEDHEALTHCARE: 27,
        WELLCARE: 28,
        NOT_LISTED: 29
    }
	const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        
        if (Number(selection) !== selectionNames.NOT_LISTED) {
            switch(Number(selection)) {
                case selectionNames.AARP:
                    cbData = "Commercial Insurance: AARP";
                break;
                case selectionNames.AETNA:
                    cbData = "Commercial Insurance: AETNA";
                break;
                case selectionNames.AMBETTER:
                    cbData = "Commercial Insurance: AmBetter";
                break;
                case selectionNames.ASSURANT:
                    cbData = "Commercial Insurance: Assurant";
                break;
                case selectionNames.AVMED_HEALTH_PLANS:
                    cbData = "Commercial Insurance: AvMed Health Plans";
                break;
                case selectionNames.BEECH_STREET:
                    cbData = "Commercial Insurance: Beech Street";
                break;
                case selectionNames.BLUE_CROSS_BLUE_SHIELD:
                    cbData = "Commercial Insurance: Blue Cross Blue Shield Federal Employee Program";
                break;
                case selectionNames.CIGNA_HEALTHCARE:
                    cbData = "Commercial Insurance: Cigna Healthcare";
                break;
                case selectionNames.COMMUNITY_CARE_NETWORK:
                    cbData = "Commercial Insurance: Community Care Network";
                break;
                case selectionNames.CORVEL_GROUP_HEALTH:
                    cbData = "Commercial Insurance: CorVel Group Health";
                break;
                case selectionNames.DIMENSION_HEALTH:
                    cbData = "Commercial Insurance: Dimension Health";
                break;
                case selectionNames.EVOLUTIONS_HEALTHCARE:
                    cbData = "Commercial Insurance: Evolutions Healthcare";
                break;
                case selectionNames.FIRST_HEALTH_COVENTRY_HEALTHCARE:
                    cbData = "Commercial Insurance: First Health Coventry Healthcare";
                break;
                case selectionNames.FLORIDA_BLUE:
                    cbData = "Commercial Insurance: Florida Blue";
                break;
                case selectionNames.GEHA_HEALTH_PLANS:
                    cbData = "Commercial Insurance: GEHA Health Plans";
                break;
                case selectionNames.HEALTH_FIRST_HEALTH_PLANS:
                    cbData = "Commercial Insurance: Health First Health Plans";
                break;
                case selectionNames.HUMANA:
                    cbData = "Commercial Insurance: Humana";
                break;
                case selectionNames.MAIL_HANDLERS_BENEFIT_PLAN:
                    cbData = "Commercial Insurance: Mail Handler's Benefit Plan (MBHP)";
                break;
                case selectionNames.MEGA_LIFE:
                    cbData = "Commercial Insurance: Mega Life and Health Insurance";
                break;
                case selectionNames.MULTIPLAN:
                    cbData = "Commercial Insurance: Multiplan";
                break;
                case selectionNames.NEIGHBORHOOD_HEALTH_PLAN:
                    cbData = "Commercial Insurance: Neighborhood Health Plan";
                break;
                case selectionNames.OPTUM_HEALTHCARE:
                    cbData = "Commercial Insurance: Optum Healthcare";
                break;
                case selectionNames.PREFERRED_MEDICAL_PLAN:
                    cbData = "Commercial Insurance: Preferred Medical Plan (PMP)";
                break;
                case selectionNames.PRIVATE_HEALTHCARE_SYSTEMS:
                    cbData = "Commercial Insurance: Private Healthcare Systems (PHS)";
                break;
                case selectionNames.UNITEDHEALTHCARE:
                    cbData = "Commercial Insurance: UnitedHealthCare";
                break;
                case selectionNames.WELLCARE:
                    cbData = "Commercial Insurance: Wellcare";
                break;
                case selectionNames.NOT_LISTED:
                    cbData = "Commercial Insurance: Not Listed!";
                break;
                default:
                    cbData = "ERROR: default case triggered in ComInsurance.js";
                break;
            }
            navigate("../sprint2", {state: cbData});
        } else {
            cbData = "Commercial Insurance: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        }
        
	}

    return (
        <div id="comInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="aarp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aarp">AARP</label><br/>
                <input value="2" type="radio" id="aetna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aetna">Aetna</label><br/>
                <input value="3" type="radio" id="ambetter" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="ambetter">AmBetter</label><br/>
                <input value="4" type="radio" id="assurant" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="assurant">Assurant</label><br/>
                <input value="5" type="radio" id="avmed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="avmed">AvMed Health Plans</label><br/>
                <input value="6" type="radio" id="beech" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="beech">Beech Street</label><br/>
                <input value="7" type="radio" id="bcbs_fed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="bcbs_fed">Blue Cross Blue Shield Fed. Emp. Program</label><br/>
                <input value="8" type="radio" id="cigna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="cigna">Cigna Healthcare</label><br/>
                <input value="9" type="radio" id="ccn" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="ccn">Community Care Network</label><br/>
                <input value="10" type="radio" id="corvel" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="corvel">Corvel Group Health</label><br/>
                <input value="11" type="radio" id="dimension" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="dimension">Dimension Health</label><br/>
                <input value="12" type="radio" id="evolutions" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="evolutions">Evolutions Healthcare</label><br/>
                <input value="13" type="radio" id="firsthealth" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="firsthealth">First Health Coventry Healthcare</label><br/>
                <input value="14" type="radio" id="floridablue" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="floridablue">Florida Blue</label><br/>
                <input value="15" type="radio" id="geha" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="geha">GEHA Health Plans</label><br/>
                <input value="16" type="radio" id="greatwest" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="greatwest">Great West (a Cigna HealthCare Company)</label><br/>
                <input value="17" type="radio" id="healthfirst" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="healthfirst">Health First Health Plans</label><br/>
                <input value="18" type="radio" id="humana" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="humana">Humana</label><br/>
                <input value="19" type="radio" id="mbhp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="mbhp">Mail Handlers Benefit Plan (MBHP)</label><br/>
                <input value="20" type="radio" id="megalife" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="megalife">Mega Life and Health Insurance</label><br/>
                <input value="21" type="radio" id="metlife" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="metlife">MetLife</label><br/>
                <input value="22" type="radio" id="multiplan" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="multiplan">Multiplan</label><br/>
                <input value="23" type="radio" id="neighborhood" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="neighborhood">Neighborhood Health Plan</label><br/>
                <input value="24" type="radio" id="optum" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optum">Optum Healthcare</label><br/>
                <input value="25" type="radio" id="preferred" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="preferred">Preferred Medical Plan (PMP)</label><br/>
                <input value="26" type="radio" id="private" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="private">Private Healthcare Systems</label><br/>
                <input value="27" type="radio" id="united" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="united">UnitedHealthCare</label><br/>
                <input value="28" type="radio" id="wellcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="wellcare">Wellcare</label><br/>
                <input value="29" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}

export default ComInsurance;