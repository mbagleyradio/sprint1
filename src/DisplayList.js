import Alvarez from './sprint4/img/Alvarez.jpg';
import CaseMartin from './sprint4/img/Case-Martin.jpg';
import ConchRepublic from './sprint4/img/Conch Republic Sports Medicine.jpg';
import Franklin from './sprint4/img/Franklin.jpg';
import James from './sprint4/img/James.jpg';
import Lee from './sprint4/img/Lee.jpg';
import OrthoPartnersKeyWest from './sprint4/img/Orthopedic Partners Key West.jpg';
import OrthoPartnersMarathon from './sprint4/img/Orthopedic Partners Marathon.jpg';
import SawgrassBPK from './sprint4/img/Saw Grass Medical Center in Big Pine Key.jpg';
import SawgrassKeyLargo from './sprint4/img/Saw Grass Medical Center in Key Largo.jpg';
import SawgrassMarathon from './sprint4/img/Saw Grass Medical Center in Marathon.jpg';
import A2CLogo from './A2CLogo_150x150.png';

import { useLocation } from 'react-router-dom';

import './DisplayList.css';

function DisplayList() {
    const location = useLocation();
    const providers = location.state.providers;
    const insuranceType = location.state.insuranceType;
    const insuranceName = location.state.insuranceName;
    const healthCareCategory = location.state.healthCareCategory;
    const filters = location.state.filters;
    const numFilters = location.state.numFilters;

    // determine what filters are in the filters array, to display in the component
    let displayAppointment = false;
    let displayArea = false;
    let displayKeyword = false;
    let displaySpecialty = false;
    let displayTime = false;
    let appointmentString = "";
    let areaString = "";
    let keywordString = "";
    let specialtyString = "";
    let timeString = "";
    
    console.log(numFilters);
    console.log(filters);
    
    for (let count = 0; count < numFilters; count++) {
        if (filters[count].filterName.startsWith("Appointment: ")) {
            displayAppointment = true;
            appointmentString = filters[count].filterName.slice(12, filters[count].filterName.length);
        }
        else if (filters[count].filterName.startsWith("Area: ")) {
            displayArea = true;
            areaString = filters[count].filterName.slice(5, filters[count].filterName.length);
        } 
        else if (filters[count].filterName.startsWith("Time: ")) {
            displayTime = true;
            timeString = filters[count].filterName.slice(5, filters[count].filterName.length);
        }
        else if (filters[count].filterName.startsWith("Keyword: ")) {
            displayKeyword = true;
            keywordString = filters[count].filterName.slice(8, filters[count].filterName.length);
        }
        else if (filters[count].filterName.startsWith("Specialty: ")) {
            displaySpecialty = true;
            specialtyString = filters[count].filterName.slice(10, filters[count].filterName.length);
        }
    } 


    // determine what providers are in the providers array, to display in the component
    let displayAlvarez = false;
    let displayCaseMartin = false;
    let displayConchRepublic = false;
    let displayFranklin = false;
    let displayJames = false;
    let displayOrthoPartnersKeyWest = false;
    let displayOrthoPartnersMarathon = false;
    let displaySawgrassBPK = false;
    let displaySawgrassKeyLargo = false;
    let displaySawgrassMarathon = false;
    let displayLee = false;   
    for (let count = 0; count < providers.length; count++) {
        // 1 - Grace Brown
        if (providers[count]["Florida_Medical_License_Number"] === "CH45678") {
            displayOrthoPartnersKeyWest = true;
        }

        // 2 - Brad Franklin
        else if (providers[count]["Florida_Medical_License_Number"] === "DO99553") {
            displayFranklin= true;
        }

        // 3 - Magnus Jefferson
        else if (providers[count]["Florida_Medical_License_Number"] === "ME10024") {
            displaySawgrassMarathon = true;
        }

        // 4 - Frank Blythe
        else if (providers[count]["Florida_Medical_License_Number"] === "ME12345") {
            displayConchRepublic = true;
        }

        // 5 - Andrew Lee
        else if (providers[count]["Florida_Medical_License_Number"] === "ME13672") {
            displayLee = true;
        }


        // 6 - William Smith
        else if (providers[count]["Florida_Medical_License_Number"] === "ME21237") {
            displayConchRepublic = true;
        }

        // 7 - Antonio Alvarez
        else if (providers[count]["Florida_Medical_License_Number"] === "ME23456") {
            displayAlvarez = true;
        }

        // 8 - Benjamin Case Martin
        else if (providers[count]["Florida_Medical_License_Number"] === "ME65432") {
            displayCaseMartin = true;
        }

        // 9 - Morris Green
        else if (providers[count]["Florida_Medical_License_Number"] === "ME75321") {
            displaySawgrassBPK = true;
        }

        // 10 - Odette James
        else if (providers[count]["Florida_Medical_License_Number"] === "OS16284") {
            displayJames = true;
        }

        // 11 - Elaine Christensen
        else if (providers[count]["Florida_Medical_License_Number"] === "OS25476") {
            displaySawgrassKeyLargo = true;
        }

        // 12 - Angela Cerna
        else if (providers[count]["Florida_Medical_License_Number"] === "OS79856") {
            displaySawgrassKeyLargo = true;
        }

        // 13 - Conch Republic Sports Medicine
        else if (providers[count]["Clinic_Identifiers"] === "CRSM") {
            displayConchRepublic = true;
        }

        // 14 - Orthopedic Partners Key West
        else if (providers[count]["Clinic_Identifiers" === "OP-KW"]) {
            displayOrthoPartnersKeyWest = true;
        }

        // 15 - Orthopedic Partners Marathon
        else if (providers[count]["Clinic_Identifiers" === "OP-M"]) {
            displayOrthoPartnersMarathon = true;
        }

        // 16 - Sawgrass Big Pine Key
        else if (providers[count]["Clinic_Identifiers" === "SMC/BPK"]) {
            displaySawgrassBPK = true;
        }

        // 17 - Sawgrass Key Largo
        else if (providers[count]["Clinic_Identifiers" === "SMC/KL"]) {
            displaySawgrassKeyLargo = true;
        }

        // 18 - Sawgrass Marathon
        else if (providers[count]["Clinic_Identifiers" === "SMC/M"]) {
            displaySawgrassMarathon = true;
        }
    }

    return (
        <div id="displayListingScreen">
            <div id="topOfListing">
                <img id="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div id="reviewSelectionWhiteBanner">
                    <p className="reviewSelectionText">TYPE: {insuranceType}</p>
                    <p className="reviewSelectionText">NAME: {insuranceName}</p>
                    <p className="reviewSelectionText">CATEGORY: {healthCareCategory}</p>
                    {displayAppointment ? <p className="reviewSelectionText">APPOINTMENT TYPE: {appointmentString}</p> : <></>}
                    {displayArea ? <p className="reviewSelectionText">AREA: {areaString}</p> : <></>}
                    {displayTime ? <p className="reviewSelectionText">TIME: {timeString}</p> : <></>}
                    {displaySpecialty ? <p className="reviewSelectionText">SPECIALTY: {specialtyString}</p> : <></>}
                    {displayKeyword ? <p className="reviewSelectionText">KEYWORD: {keywordString}</p> : <></>}
                </div>
            </div>
            <div id="listings">
           
                {displayAlvarez ? <img className="listingDisplay" src={Alvarez} alt="Antonio Alvarez"/> : <></>}
                {displayCaseMartin ? <img className="listingDisplay" src={CaseMartin} alt="Benjamin Case-Martin"/> : <></>}
                {displayFranklin ? <img className="listingDisplay" src={Franklin} alt="Brad Franklin"/> : <></>}
                {displayJames ? <img className="listingDisplay" src={James} alt="Odette James"/> : <></>}
                {displayLee ? <img className="listingDisplay" src={Lee} alt="Andrew Lee"/> : <></>}
                {displayConchRepublic ? <img className="listingDisplay" src={ConchRepublic} alt="Conch Republic Sports Medicine"/> : <></>}
                {displayOrthoPartnersKeyWest ? <img className="listingDisplay" src={OrthoPartnersKeyWest} alt="Ortho Partners Key West"/> : <></>}
                {displayOrthoPartnersMarathon ? <img className="listingDisplay" src={OrthoPartnersMarathon} alt="Ortho Partners Marathon"/> : <></>}
                {displaySawgrassBPK ? <img className="listingDisplay" src={SawgrassBPK} alt="Sawgrass Medical Center in Big Pine Key"/> : <></>}
                {displaySawgrassKeyLargo ? <img className="listingDisplay" src={SawgrassKeyLargo} alt="Sawgrass Medical Center in Key Largo"/> : <></>}
                {displaySawgrassMarathon ? <img className="listingDisplay" src={SawgrassMarathon} alt="Sawgrass Medical Center in Marathon"/> : <></>}
            </div>
        </div>
        
    );
}

export default DisplayList;