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
        <div id="internationalInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="algemene" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="algemene">Algemene Ziektekosten Verzekering:A.Z.V. (Aruba)</label><br/>
                <input value="2" type="radio" id="apollo" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="apollo">Apollo Ship Chandlers</label><br/>
                <input value="3" type="radio" id="axa" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="axa">AXA Assistance USA</label><br/>
                <input value="4" type="radio" id="banco" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="banco">Banco Centroamericano De Integracion Economica</label><br/>
                <input value="5" type="radio" id="bmi" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="bmi">BMI Financial Group</label><br/>
                <input value="6" type="radio" id="cardea" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="cardea">Cardea Health Solutions</label><br/>
                <input value="7" type="radio" id="family" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="family">Family Guardian Insurance</label><br/>
                <input value="8" type="radio" id="generali" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="generali">Generali Global Health Service (GGHS)</label><br/>
                <input value="9" type="radio" id="global" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="global">Global Benefits Group</label><br/>
                <input value="10" type="radio" id="interamericana" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="interamericana">Interamericana de Seguros, S.A. (Fichos Seguros)</label><br/>
                <input value="11" type="radio" id="intrepid" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="intrepid">Intrepid (Ingle International)</label><br/>
                <input value="12" type="radio" id="new_frontier" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="new_frontier">New Frontier Group</label><br/>
                <input value="13" type="radio" id="pan_american" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="pan_american">Pan American Life Insurance</label><br/>
                <input value="14" type="radio" id="seguros_azul_vida" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="seguros_azul_vida">Seguros Azul Vida, S.A. (Seguros de Personas)</label><br/>
                <input value="15" type="radio" id="segurso_reserva" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="segurso_reserva">Segurso Reserva, S.A.</label><br/>
                <input value="16" type="radio" id="seguros_sura" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="seguros_sura">Seguros Sura, S.A. (Sura Dominicana)</label><br/>
                <input value="17" type="radio" id="social_security_board" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="social_security_board">Social Security Board, British Virgin Islands</label><br/>
                <input value="18" type="radio" id="vumi" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="vumi">VUMI (VIP Universal Medical Insurance)</label><br/>
                <input value="19" type="radio" id="ww_concierge" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="ww_concierge">WW Concierge Healthcare Services</label><br/>
                <input value="20" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>

            </form>
        </div>
    );
}