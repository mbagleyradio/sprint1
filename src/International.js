import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './International.css';

export default function International() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = { 
        ALGEMENE_ZIEKTEKOSTEN_VERZEKERING_AZV_ARUBA: 1,
        APOLLO_SHIP_CHANDLERS: 2,
        AXA_ASSISTANCE_USA: 3,
        BANCO_CENTROAMERICANO_DE_INTEGRACION_ECONOMICA: 4,
        BMI_FINANCIAL_GROUP: 5,
        CARDEA_HEALTH_SOLUTIONS: 6,
        FAMILY_GUARDIAN_INSURANCE: 7,
        GENERALI_GLOBAL_HEALTH_SERVICE_GGHS: 8,
        GLOBAL_BENEFITS_GROUP: 9,
        INTERAMERICANA_DE_SEGUROS_SA_FICHOS_SEGUROS: 10,
        INTREPID_INGLE_INTERNATIONAL: 11,
        NEW_FRONTIER_GROUP: 12,
        PAN_AMERICAN_LIFE_INSURANCE: 13,
        SEGUROS_AZUL_VIDA_SA_SEGUROS_DE_PERSONAS: 14,
        SEGUROS_RESERVA_SA: 15,
        SEGUROS_SURA_SA: 16,
        SOCIAL_SECURITY_BOARD_BRITISH_VIRGIN_ISLANDS: 17,
        VUMI_VIP_UNIVERSAL_MEDICAL_INSURANCE: 18,
        WW_CONCIERGE_HEALTHCARE_SERVICES: 19,
        NOT_LISTED: 20        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        if (Number(selection) === selectionNames.NOT_LISTED) {
            cbData = "International: Insurance was not listed!";
            navigate("../contact-ins", {state: cbData});
        } else {
            switch(Number(selection)) {
                case selectionNames.ALGEMENE_ZIEKTEKOSTEN_VERZEKERING_AZV_ARUBA:
                    cbData = "International: Algemene Ziektekosten Verzekering:A.Z.V. (Aruba)";
                break;
                case selectionNames.APOLLO_SHIP_CHANDLERS:
                    cbData = "International: Apollo Ship Chandlers";
                break;
                case selectionNames.AXA_ASSISTANCE_USA:
                    cbData = "International: AXA Assistance USA";
                break;
                case selectionNames.BANCO_CENTROAMERICANO_DE_INTEGRACION_ECONOMICA:
                    cbData = "International: Banco Centroamericano De Integracion Economica";
                break;
                case selectionNames.BMI_FINANCIAL_GROUP:
                    cbData = "International: BMI Financial Group";
                break;
                case selectionNames.CARDEA_HEALTH_SOLUTIONS:
                    cbData = "International: Cardea Health Solutions";
                break;
                case selectionNames.FAMILY_GUARDIAN_INSURANCE:
                    cbData = "International: Family Guardian Insurance";
                break;
                case selectionNames.GENERALI_GLOBAL_HEALTH_SERVICE_GGHS:
                    cbData = "International: Generali Global Health Service (GGHS)";
                break;
                case selectionNames.GLOBAL_BENEFITS_GROUP:
                    cbData = "International: Global Benefits Group";
                break;
                case selectionNames.INTERAMERICANA_DE_SEGUROS_SA_FICHOS_SEGUROS:
                    cbData = "International: Interamericana de Seguros, S.A. (Fichos Seguros)";
                break;
                case selectionNames.INTREPID_INGLE_INTERNATIONAL:
                    cbData = "International: Intrepid (Ingle International)";
                break;
                case selectionNames.NEW_FRONTIER_GROUP:
                    cbData = "International: New Frontier Group";
                break;
                case selectionNames.PAN_AMERICAN_LIFE_INSURANCE:
                    cbData = "International: Pan American Life Insurance";
                break;
                case selectionNames.SEGUROS_AZUL_VIDA_SA_SEGUROS_DE_PERSONAS:
                    cbData = "International: Seguros Azul Vida, S.A. (Seguros de Personas)";
                break;
                case selectionNames.SEGUROS_RESERVA_SA:
                    cbData = "International: Seguros Reserva, S.A.";
                break;
                case selectionNames.SEGUROS_SURA_SA:
                    cbData = "International: Seguros Sura, S.A. (Sura Dominicana)";
                break;
                case selectionNames.SOCIAL_SECURITY_BOARD_BRITISH_VIRGIN_ISLANDS:
                    cbData = "International: Social Security Board, British Virgin Islands";
                break;
                case selectionNames.VUMI_VIP_UNIVERSAL_MEDICAL_INSURANCE:
                    cbData = "International: VUMI (VIP Universal Medical Insurance)";
                break;
                case selectionNames.WW_CONCIERGE_HEALTHCARE_SERVICES:
                    cbData = "International: WW Concierge Healthcare Services";
                break;
                case selectionNames.NOT_LISTED:
                    cbData = "International: My insurance is not listed!";
                break;
                default:
                    cbData = "ERROR: default case triggered in International.js";
                break;
            }
    
            navigate("../sprint2", {state: cbData});
        }
    }
    
    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="internationalInsuranceSelections" id="internationalInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">Algemene Ziektekosten Verzekering: A.Z.V. (Aruba)</option>
                    <option value="2">Apollo Ship Chandlers</option>
                    <option value="3">AXA Assistance USA</option>
                    <option value="4">Banco Centroamericano De Integracion Economica</option>
                    <option value="5">BMI Financial Group</option>
                    <option value="6">Cardea Health Solutions</option>
                    <option value="7">Family Guardian Insurance</option>
                    <option value="8">Generali Global Health Service (GGHS)</option>
                    <option value="9">Global Benefits Group</option>
                    <option value="10">Interamericana de Seguros, S.A. (Fichos Seguros)</option>
                    <option value="11">Intrepid (Ingle International)</option>
                    <option value="12">New Frontier Group</option>
                    <option value="13">Pan American Life Insurance</option>
                    <option value="14">Seguros Azul Vida, S.A. (Seguros de Personas)</option>
                    <option value="15">Seguros Reserva, S.A.</option>
                    <option value="16">Seguros Sura, S.A. (Sura Dominicana)</option>
                    <option value="17">Social Security Board, British Virgin Islands</option>
                    <option value="18">VUMI (VIP Universal Medical Insurance)</option>
                    <option value="19">WW Concierge Healthcare Services</option>
                    <option value="20">My insurance is not listed</option>
                </select>
            </form>
        </div>
    );
}