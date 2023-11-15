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
        WELLCARE: 28
    }
	const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
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
            default:
                cbData = "ERROR: default case triggered in ComInsurance.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
	}

    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="comInsuranceSelections" id="comInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">AARP</option>
                    <option value="2">Aetna</option>
                    <option value="3">AmBetter</option>
                    <option value="4">Assurant</option>
                    <option value="5">AvMed Health Plans</option>
                    <option value="6">Beech Street</option>
                    <option value="7">Blue Cross Blue Shield Federal Employee Program</option>
                    <option value="8">Cigna HealthCare</option>
                    <option value="9">Community Care Network</option>
                    <option value="10">Corvel Group Health</option>
                    <option value="11">Dimension Health</option>
                    <option value="12">Evolutions Healthcare</option>
                    <option value="13">First Health Coventry Healthcare</option>
                    <option value="14">Florida Blue</option>
                    <option value="15">GEHA Health Plans</option>
                    <option value="16">Great West (a Cigna HealthCare Company)</option>
                    <option value="17">Health First Health Plans</option>
                    <option value="18">Humana</option>
                    <option value="19">Mail Handlers Benefit Plan (MBHP)</option>
                    <option value="20">Mega Life and Health Insurance</option>
                    <option value="21">MetLife</option>
                    <option value="22">Multiplan</option>
                    <option value="23">Neighborhood Health Plan</option>
                    <option value="24">Optum Healthcare</option>
                    <option value="25">Preferred Medical Plan (PMP)</option>
                    <option value="26">Private Healthcare Systems (PHS)</option>
                    <option value="27">UnitedHealthCare</option>
                    <option value="28">Wellcare</option>
                </select>
            </form>
        </div>
    );
}

export default ComInsurance;