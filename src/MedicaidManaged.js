import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicaidManaged.css';

export default function MedicaidManaged() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        AETNA_BETTER_HEALTH_MEDICAID: 1,
        AETNA_HEALTHYKIDS: 2,
        AMERIGROUP: 3,
        CHILDRENS_MEDICAL_SERVICES_TITLE_XIX_XX: 4,
        CLEAR_HEALTH_ALLIANCE: 5,
        COMMUNITY_CARE_PLAN: 6,
        FLORIDA_COMMUNITY_CARE: 7,
        FREEDOM_HEALTH: 8,
        HUMANA: 9,
        HUMANA_HEALTHY_HORIZONS: 10,
        INTEGRAL_QUALITY_CARE: 11,
        MAGELLAN_COMPLETE_CARE: 12,
        MOLINA_HEALTHCARE_OF_FLORIDA: 13,
        NEIGHBORHOOD_HEALTH_PARTNERSHIP: 14,
        OPTIMUM_HEALTHCARE: 15,
        POSITIVE_HEALTH: 16,
        POSITIVE_HEALTHCARE: 17,
        PRESTIGE_HEALTH_CHOICE: 18,
        PRESTIGE_HEALTH_PLANS: 19,
        SIMPLY_HEALTH_CARE: 20,
        SIMPLY_MEDICAID_BY_CLEAR_HEALTH_ALLIANCE: 21,
        STAYWELL: 22,
        SUNSHINE_HEALTH_CHILD_WELFARE: 23,
        UNITED_HEALTHCARE_OF_FLORIDA_MEDICAID: 24,
        WELLCARE_OF_FLORIDA: 25,
        NOT_LISTED: 26
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Medicaid Managed Care: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        } else {
            switch(Number(selection)) {
                case selectionNames.AETNA_BETTER_HEALTH_MEDICAID:
                    cbData = "Medicaid Managed Care: Aetna Better Health Medicaid";
                break;
                case selectionNames.AETNA_HEALTHYKIDS:
                    cbData = "Medicaid Managed Care: Aetna HealthyKids";
                break;
                case selectionNames.AMERIGROUP:
                    cbData = "Medicaid Managed Care: Amerigroup"
                break;
                case selectionNames.CHILDRENS_MEDICAL_SERVICES_TITLE_XIX_XX:
                    cbData = "Medicaid Managed Care: Children's Medical Services (title XIX, XX)";
                break;
                case selectionNames.CLEAR_HEALTH_ALLIANCE:
                    cbData = "Medicaid Managed Care: Clear Health Alliance";
                break;
                case selectionNames.COMMUNITY_CARE_PLAN:
                    cbData = "Medicaid Managed Care: Community Care Plan";
                break;
                case selectionNames.FLORIDA_COMMUNITY_CARE:
                    cbData = "Medicaid Managed Care: Florida Community Care";
                break;
                case selectionNames.FREEDOM_HEALTH:
                    cbData = "Medicaid Managed Care: Freedom Health";
                break;
                case selectionNames.HUMANA:
                    cbData = "Medicaid Managed Care: Humana";
                break;
                case selectionNames.HUMANA_HEALTHY_HORIZONS:
                    cbData = "Medicaid Managed Care: Humana Healthy Horizons";
                break;
                case selectionNames.INTEGRAL_QUALITY_CARE:
                    cbData = "Medicaid Managed Care: Integral Quality Care";
                break;
                case selectionNames.MAGELLAN_COMPLETE_CARE:
                    cbData = "Medicaid Managed Care: Magellan Complete Care";
                break;
                case selectionNames.MOLINA_HEALTHCARE_OF_FLORIDA:
                    cbData = "Medicaid Managed Care: Molina Healthcare of Florida";
                break;
                case selectionNames.NEIGHBORHOOD_HEALTH_PARTNERSHIP:
                    cbData = "Medicaid Managed Care: Neighborhood Health Partnership";
                break;
                case selectionNames.OPTIMUM_HEALTHCARE:
                    cbData = "Medicaid Managed Care: Optimum Healthcare";
                break;
                case selectionNames.POSITIVE_HEALTH:
                    cbData = "Medicaid Managed Care: Positive Health";
                break;
                case selectionNames.POSITIVE_HEALTHCARE:
                    cbData = "Medicaid Managed Care: Positive Healthcare";
                break;
                case selectionNames.PRESTIGE_HEALTH_CHOICE:
                    cbData = "Medicaid Managed Care: Prestige Health Choice";
                break;
                case selectionNames.PRESTIGE_HEALTH_PLANS:
                    cbData = "Medicaid Managed Care: Prestige Health Plans";
                break;
                case selectionNames.SIMPLY_HEALTH_CARE:
                    cbData = "Medicaid Managed Care: Simply Health Care";
                break;
                case selectionNames.SIMPLY_MEDICAID_BY_CLEAR_HEALTH_ALLIANCE:
                    cbData = "Medicaid Managed Care: Simply Medicaid by Clear Health Alliance";
                break;
                case selectionNames.STAYWELL:
                    cbData = "Medicaid Managed Care: Staywell";
                break;
                case selectionNames.SUNSHINE_HEALTH_CHILD_WELFARE:
                    cbData = "Medicaid Managed Care: Sunshine Health (Child Welfare)";
                break;
                case selectionNames.UNITED_HEALTHCARE_OF_FLORIDA_MEDICAID:
                    cbData = "Medicaid Managed Care: United Healthcare of Florida Medicaid";
                break;
                case selectionNames.WELLCARE_OF_FLORIDA:
                    cbData = "Medicaid Managed Care: Wellcare of Florida";
                break;
                case selectionNames.NOT_LISTED:
                    cbData = "Medicaid Managed Care: My insurance is not listed";
                break;
                default:
                    cbData = "ERROR: default case triggered in MedicaidManaged.js";
                break;
            }
    
            navigate("../sprint2", {state: cbData});
        }
    }

    return (
        <div id="medicaidManagedInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="aetna_bhm" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aetna_bhm">Aetna Better Health Medicaid</label><br/>
                <input value="2" type="radio" id="aetna_healthykids" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aetna_healthykids">Aetna HealthyKids</label><br/>
                <input value="3" type="radio" id="amerigroup" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="amerigroup">Amerigroup</label><br/>
                <input value="4" type="radio" id="chi_med_ser" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="chi_med_ser">Children's Medical Services (title XIX, XX)</label><br/>
                <input value="5" type="radio" id="clearhealth" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="clearhealth">Clear Health Alliance</label><br/>
                <input value="6" type="radio" id="com_care_plan" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="com_care_plan">Community Care Plan</label><br/>
                <input value="7" type="radio" id="florida_com_care" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="florida_com_care">Florida Community Care</label><br/>
                <input value="8" type="radio" id="freedom" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="freedom">Freedom Health</label><br/>
                <input value="9" type="radio" id="humana" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="humana">Humana</label><br/>
                <input value="10" type="radio" id="humana_hh" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="humana_hh">Humana Healthy Horizons</label><br/>
                <input value="11" type="radio" id="integral" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="integral">Integral Quality Care</label><br/>
                <input value="12" type="radio" id="magellan" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="magellan">Magellan Complete Care</label><br/>
                <input value="13" type="radio" id="molina" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="molina">Molina</label><br/>
                <input value="14" type="radio" id="neighborhood" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="neighborhood">Neighborhood Health Partnership</label><br/>
                <input value="15" type="radio" id="optimum" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optimum">Optimum Healthcare</label><br/>
                <input value="16" type="radio" id="positive_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="positive_health">Positive Health</label><br/>
                <input value="17" type="radio" id="positive_healthcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="positive_healthcare">Positive Healthcare</label><br/>
                <input value="18" type="radio" id="prestige_health_choice" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="prestige_health_choice">Prestige Health Choice</label><br/>
                <input value="19" type="radio" id="prestige_health_plans" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="prestige_health_plans">Prestige Health Plans</label><br/>
                <input value="20" type="radio" id="simply_health_care" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="simply_health_care">Simply Health Care</label><br/>
                <input value="21" type="radio" id="simply_medicaid" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="simply_medicaid">Simply Medicaid by Clear Health Alliance</label><br/>
                <input value="22" type="radio" id="staywell" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="staywell">Staywell</label><br/>
                <input value="23" type="radio" id="sunshine_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="sunshine_health">Sunshine Health (Child Welfare)</label><br/>
                <input value="24" type="radio" id="united_healthcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="united_healthcare">United Healthcare of Florida Medicaid</label><br/>
                <input value="25" type="radio" id="wellcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="wellcare"></label>Wellcare of Florida<br/>
                <input value="26" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}