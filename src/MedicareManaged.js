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
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "Medicare Managed Care: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        } else {
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
    
            navigate("../sprint2", {state: cbData});
        }
    }

    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="aarp" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aarp">AARP</label><br/>
                <input value="2" type="radio" id="aetna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="aetna">Aetna</label><br/>
                <input value="3" type="radio" id="align_senior_care" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="align_senior_care">Align Senior Care</label><br/>
                <input value="4" type="radio" id="allwell" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="allwell">Allwell from Sunshine Health</label><br/>
                <input value="5" type="radio" id="avmed_health_plans" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="avmed_health_plans">AvMed Health Plans</label><br/>
                <input value="6" type="radio" id="better_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="better_health">Better Health</label><br/>
                <input value="7" type="radio" id="blue_cross_blue_shield" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="blue_cross_blue_shield">Blue Cross Blue Shield</label><br/>
                <input value="8" type="radio" id="care_plus" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="care_plus">CarePlus</label><br/>
                <input value="9" type="radio" id="cigna" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="cigna">Cigna HealthCare</label><br/>
                <input value="10" type="radio" id="devoted" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="devoted">Devoted Health</label><br/>
                <input value="11" type="radio" id="doctors_healthcare_plans" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="doctors_healthcare_plans">Doctors Healthcare Plans</label><br/>
                <input value="12" type="radio" id="florida_blue" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="florida_blue">Florida Blue</label><br/>
                <input value="13" type="radio" id="freedom_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="freedom_health">Freedom Health</label><br/>
                <input value="14" type="radio" id="freedom_medicare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="freedom_medicare">Freedom Medicare</label><br/>
                <input value="15" type="radio" id="health_first" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="health_first">Health First Health Plans</label><br/>
                <input value="16" type="radio" id="health_sun" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="health_sun">HealthSun Health Plans</label><br/>
                <input value="17" type="radio" id="humana" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="humana">Humana</label><br/>
                <input value="18" type="radio" id="kaiser" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="kaiser">Kaiser Permanente</label><br/>
                <input value="19" type="radio" id="leon" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="leon">Leon Health Plans</label><br/>
                <input value="20" type="radio" id="longevity" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="longevity">Longevity</label><br/>
                <input value="21" type="radio" id="magellan" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="magellan">Magellan Complete Care</label><br/>
                <input value="22" type="radio" id="medica" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="medica">Medica HealthCare Plans</label><br/>
                <input value="23" type="radio" id="molina" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="molina">Molina Healthcare</label><br/>
                <input value="24" type="radio" id="optimum_choice" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optimum_choice">Optimum Choice Medicare Advantage</label><br/>
                <input value="25" type="radio" id="optimum_healthcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optimum_healthcare">Optimum HealthCare</label><br/>
                <input value="26" type="radio" id="optimum_medicare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="optimum_medicare">Optimum Medicare Advantage</label><br/>
                <input value="27" type="radio" id="pace" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="pace">Pace</label><br/>
                <input value="28" type="radio" id="physicians_united" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="physicians_united">Physicians United Plan</label><br/>
                <input value="29" type="radio" id="positive" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="positive">Positive Healthcare</label><br/>
                <input value="30" type="radio" id="preferred_care" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="preferred_care">Preferred Care Partners</label><br/>
                <input value="31" type="radio" id="prestige" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="prestige">Prestige Medicare Advantage</label><br/>
                <input value="32" type="radio" id="railroad" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="railroad">Railroad Medicare</label><br/>
                <input value="33" type="radio" id="simply" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="simply">Simply Healthcare Plans</label><br/>
                <input value="34" type="radio" id="solis" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="solis">Solis Health Plans</label><br/>
                <input value="35" type="radio" id="sunshine_health" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="sunshine_health">Sunshine Health</label><br/>
                <input value="36" type="radio" id="sunshine_medicare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="sunshine_medicare">Sunshine Medicare</label><br/>
                <input value="37" type="radio" id="united" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="united">UnitedHealthCare</label><br/>
                <input value="38" type="radio" id="wellcare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="wellcare">WellCare</label><br/>
                <input value="39" type="radio" id="wellmed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="wellmed">WellMed Medical Management</label><br/>
                <input value="40" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}