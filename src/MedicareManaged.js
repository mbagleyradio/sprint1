import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicareManaged.css';

export default function MedicareManaged() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        AARP: 1,
		AETNA: 2,
		ALIGN_SENIOR_CARE: 3,
        ALLWELL_FROM_SUNSHINE_HEALTH: 4,
        AVMED_HEALTH_PLANS: 5,
        BETTER_HEALTH: 6,
        BLUE_CROSS_BLUE_SHIELD: 7,
        CARE_PLUS: 8,
        CIGNA_HEALTHCARE: 9,
        DEVOTED_HEALTH: 10,
        DOCTORS_HEALTHCARE_PLANS: 11,
        FLORIDA_BLUE: 12,
        FREEDOM_HEALTH: 13,
        FREEDOM_MEDICARE: 14,
        HEALTH_FIRST_HEALTH_PLANS: 15,
        HEALTHSUN_HEALTH_PLANS: 16,
        HUMANA: 17,
        KAISER_PERMANENTE: 18,
        LEON_HEALTH_PLANS: 19,
        LONGEVITY: 20,
        MAGELLAN_COMPLETE_CARE: 21,
        MEDICA_HEALTHCARE_PLANS: 22,
        MOLINA_HEALTHCARE: 23,
        OPTIMUM_CHOICE_MEDICARE_ADVANTAGE: 24,
        OPTIMUM_HEALTHCARE: 25,
        OPTIMUM_MEDICARE_ADVANTAGE: 26,
        PACE: 27,
        PHYSICIANS_UNITED_PLAN: 28,
        POSITIVE_HEALTHCARE: 29,
        PREFERRED_CARE_PARTNERS: 30,
        PRESTIGE_MEDICARE_ADVANTAGE: 31,
        RAILROAD_MEDICARE: 32,
        SIMPLY_HEALTHCARE_PLANS: 33,
        SOLIS_HEALTH_PLANS: 34,
        SUNSHINE_HEALTH: 35,
        SUNSHINE_MEDICARE: 36,
        UNITEDHEALTHCARE: 37,
        WELLCARE: 38,
        WELLMED_MEDICAL_MANAGEMENT: 39,
        NOT_LISTED: 40
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        switch(Number(selection)) {
            case selectionNames.AARP:
                cbData = "Medicare Managed Care: AARP";
            break;
            case selectionNames.AETNA:
                cbData = "Medicare Managed Care: Aetna";
            break;
            case selectionNames.ALIGN_SENIOR_CARE:
                cbData = "Medicare Managed Care: Align Senior Care";
            break;
            case selectionNames.ALLWELL_FROM_SUNSHINE_HEALTH:
                cbData = "Medicare Managed Care: Allwell from Sunshine Health";
            break;
            case selectionNames.AVMED_HEALTH_PLANS:
                cbData = "Medicare Managed Care: AvMed Health Plans";
            break;
            case selectionNames.BETTER_HEALTH:
                cbData = "Medicare Managed Care: Better Health";
            break;
            case selectionNames.BLUE_CROSS_BLUE_SHIELD:
                cbData = "Medicare Managed Care: Blue Cross Blue Shield";
            break;
            case selectionNames.CARE_PLUS:
                cbData = "Medicare Managed Care: Care Plus";
            break;
            case selectionNames.CIGNA_HEALTHCARE:
                cbData = "Medicare Managed Care: Cigna Healthcare";
            break;
            case selectionNames.DEVOTED_HEALTH:
                cbData = "Medicare Managed Care: Devoted Health";
            break;
            case selectionNames.DOCTORS_HEALTHCARE_PLANS:
                cbData = "Medicare Managed Care: Doctors Healthcare Plans";
            break;
            case selectionNames.FLORIDA_BLUE:
                cbData = "Medicare Managed Care: Florida Blue";
            break;
            case selectionNames.FREEDOM_HEALTH:
                cbData = "Medicare Managed Care: Freedom Health";
            break;
            case selectionNames.FREEDOM_MEDICARE:
                cbData = "Medicare Managed Care: Freedom Medicare";
            break;
            case selectionNames.HEALTH_FIRST_HEALTH_PLANS:
                cbData = "Medicare Managed Care: Health First Health Plans";
            break;
            case selectionNames.HEALTHSUN_HEALTH_PLANS:
                cbData = "Medicare Managed Care: HealthSun Health Plans";
            break;
            case selectionNames.HUMANA:
                cbData = "Medicare Managed Care: Humana";
            break;
            case selectionNames.KAISER_PERMANENTE:
                cbData = "Medicare Managed Care: Kaiser Permanente";
            break;
            case selectionNames.LEON_HEALTH_PLANS:
                cbData = "Medicare Managed Care: Leon Health Plans";
            break;
            case selectionNames.LONGEVITY:
                cbData = "Medicare Managed Care: Longevity";
            break;
            case selectionNames.MAGELLAN_COMPLETE_CARE:
                cbData = "Medicare Managed Care: Magellan Complete Care";
            break;
            case selectionNames.MEDICA_HEALTHCARE_PLANS:
                cbData = "Medicare Managed Care: Medica HealthCare Plans";
            break;
            case selectionNames.MOLINA_HEALTHCARE:
                cbData = "Medicare Managed Care: Molina Healthcare";
            break;
            case selectionNames.OPTIMUM_CHOICE_MEDICARE_ADVANTAGE:
                cbData = "Medicare Managed Care: Optimum Choice Medicare Advantage";
            break;
            case selectionNames.OPTIMUM_HEALTHCARE:
                cbData = "Medicare Managed Care: Optimum HealthCare";
            break;
            case selectionNames.OPTIMUM_MEDICARE_ADVANTAGE:
                cbData = "Medicare Managed Care: Optimum Medicare Advantage";
            break;
            case selectionNames.PACE:
                cbData = "Medicare Managed Care: Pace";
            break;
            case selectionNames.PHYSICIANS_UNITED_PLAN:
                cbData = "Medicare Managed Care: Physicians United Plan";
            break;
            case selectionNames.POSITIVE_HEALTHCARE:
                cbData = "Medicare Managed Care: Positive Healthcare";
            break;
            case selectionNames.PREFERRED_CARE_PARTNERS:
                cbData = "Medicare Managed Care: Preferred Care Partners";
            break;
            case selectionNames.PRESTIGE_MEDICARE_ADVANTAGE:
                cbData = "Medicare Managed Care: Prestige Medicare Advantage";
            break;
            case selectionNames.RAILROAD_MEDICARE:
                cbData = "Medicare Managed Care: Railroad Medicare";
            break;
            case selectionNames.SIMPLY_HEALTHCARE_PLANS:
                cbData = "Medicare Managed Care: Simply Healthcare Plans";
            break;
            case selectionNames.SOLIS_HEALTH_PLANS:
                cbData = "Medicare Managed Care: Solis Health Plans";
            break;
            case selectionNames.SUNSHINE_HEALTH:
                cbData = "Medicare Managed Care: Sunshine Health";
            break;
            case selectionNames.SUNSHINE_MEDICARE:
                cbData = "Medicare Managed Care: Sunshine Medicare";
            break;
            case selectionNames.UNITEDHEALTHCARE:
                cbData = "Medicare Managed Care: UnitedHealthCare";
            break;
            case selectionNames.WELLCARE:
                cbData = "Medicare Managed Care: WellCare";
            break;
            case selectionNames.WELLMED_MEDICAL_MANAGEMENT:
                cbData = "Medicare Managed Care: WellMed Medical Management";
            break;
            case selectionNames.NOT_LISTED:
                cbData = "Medicare Managed Care: My insurance is not listed!";
            break;
            default:
                cbData = "ERROR: Default case triggered in MedicareManaged.js";
            break;
        }

        navigate("../contact-ins", {state: cbData});
    }

    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="medicareManagedInsuranceSelections" id="medicareManagedInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">AARP</option>
                    <option value="2">Aetna</option>
                    <option value="3">Align Senior Care</option>
                    <option value="4">Allwell from Sunshine Health</option>
                    <option value="5">AvMed Health Plans</option>
                    <option value="6">Better Health</option>
                    <option value="7">Blue Cross Blue Shield</option>
                    <option value="8">CarePlus</option>
                    <option value="9">Cigna HealthCare</option>
                    <option value="10">Devoted Health</option>
                    <option value="11">Doctors Healthcare Plans</option>
                    <option value="12">Florida Blue</option>
                    <option value="13">Freedom Health</option>
                    <option value="14">Freedom Medicare</option>
                    <option value="15">Health First Health Plans</option>
                    <option value="16">HealthSun Health Plans</option>
                    <option value="17">Humana</option>
                    <option value="18">Kaiser Permanente</option>
                    <option value="19">Leon Health Plans</option>
                    <option value="20">Longevity</option>
                    <option value="21">Magellan Complete Care</option>
                    <option value="22">Medica HealthCare Plans</option>
                    <option value="23">Molina Healthcare</option>
                    <option value="24">Optimum Choice Medicare Advantage</option>
                    <option value="25">Optimum HealthCare</option>
                    <option value="26">Optimum Medicare Advantage</option>
                    <option value="27">Pace</option>
                    <option value="28">Physicians United Plan</option>
                    <option value="29">Positive Healthcare</option>
                    <option value="30">Preferred Care Partners</option>
                    <option value="31">Prestige Medicare Advantage</option>
                    <option value="32">Railroad Medicare</option>
                    <option value="33">Simply Healthcare Plans</option>
                    <option value="34">Solis Health Plans</option>
                    <option value="35">Sunshine Health</option>
                    <option value="36">Sunshine Medicare</option>
                    <option value="37">UnitedHealthCare</option>
                    <option value="38">WellCare</option>
                    <option value="39">WellMed Medical Management</option>
                    <option value="40">My insurance is not listed</option>
                </select>
            </form>
        </div>
    );
}