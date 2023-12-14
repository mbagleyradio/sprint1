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

        navigate("../contact-ins", {state: cbData});
    }

    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="medicaidManagedInsuranceSelections" id="medicaidManagedInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">Aetna Better Health Medicaid</option>
                    <option value="2">Aetna HealthyKids</option>
                    <option value="3">Amerigroup</option>
                    <option value="4">Children's Medical Services (title XIX,XX)</option>
                    <option value="5">Clear Health Alliance</option>
                    <option value="6">Community Care Plan</option>
                    <option value="7">Florida Community Care</option>
                    <option value="8">Freedom Health</option>
                    <option value="9">Humana</option>
                    <option value="10">Humana Healthy Horizons</option>
                    <option value="11">Integral Quality Care</option>
                    <option value="12">Magellan Complete Care</option>
                    <option value="13">Molina Healthcare of Florida</option>
                    <option value="14">Neighborhood Health Partnership</option>
                    <option value="15">Optimum Healthcare</option>
                    <option value="16">Positive Health</option>
                    <option value="17">Positive Healthcare</option>
                    <option value="18">Prestige Health Choice</option>
                    <option value="19">Prestige Health Plans</option>
                    <option value="20">Simply Health Care</option>
                    <option value="21">Simply Medicaid by Clear Health Alliance</option>
                    <option value="22">Staywell</option>
                    <option value="23">Sunshine Health (Child Welfare)</option>
                    <option value="24">United Healthcare of Florida Medicaid</option>
                    <option value="25">Wellcare of Florida</option>
                    <option value="26">My insurance is not listed</option>
                </select>
            </form>
        </div>
    );
}