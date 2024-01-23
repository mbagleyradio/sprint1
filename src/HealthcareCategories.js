// Import the CSS styling
import './HealthcareCategories.css';

// Import React & React Router tools
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

// Import images for the menu
import A2CLogo from './A2CLogo_150x150.png';
import AddictionMedicine from './sprint2/img/Addiction Medicine.png';
import AllergyAndImmune from './sprint2/img/Allergy & Immune System Medicine.png';
import Anesthesiology from './sprint2/img/Anesthesiology.png';
import BehavioralHealth from './sprint2/img/Behavioral Health.png';
import Cardiology from './sprint2/img/Cardiology.png';
import Dermatology from './sprint2/img/Dermatology.png';
import EarNoseThroat from './sprint2/img/Ear, Nose & Throat.png';
import EmergencyMedicine from './sprint2/img/Emergency Medicine.png';
import Endocrinology from './sprint2/img/Endocinology.png';
import FamilyPracticeInternalMedicine from './sprint2/img/Family Practice.png';
import Gastroenterology from './sprint2/img/Gastroenterology.png';
import Hematology from './sprint2/img/Hematology.png';
import Neurology from './sprint2/img/Neurology.png';
import Oncology from './sprint2/img/Oncology.png';
import Opthamology from './sprint2/img/Ophthalmology.png';
import Orthopedics from './sprint2/img/Orthopedics.png';
import Pathology from './sprint2/img/Pathology.png';
import Pediatrics from './sprint2/img/Pediatrics.png';
import Podiatry from './sprint2/img/Podiatry.png';
import Pulmonology from './sprint2/img/Pulmonology.png';
import Radiology from './sprint2/img/Radiology.png';
import Rheumatology from './sprint2/img/Rheumatology.png';
import Surgery from './sprint2/img/Surgery.png';
import Urology from './sprint2/img/Urology.png';
import WomensHealth from './sprint2/img/Womens Health.png';
import NotSure from './sprint2/img/Not Sure.png';

export default function HealthcareCategories() {
    const [selection, setSelection] = useState(undefined); // this is a hook for whether a menu option has been selected
    const [borderColor, setBorderColor] = useState("#D9F0F1"); // transparent border color
    const [btnOpacity, setBtnOpacity] = useState(0);
    const figureStyle = {
        border: `2px solid ${borderColor}` 
    };
    const nextBtnStyle = {
        opacity: btnOpacity
    };

    // enum for the handleclick case
    const selectionNames = {
        ADDICTION_MEDICINE: 1,
        ALLERGY_IMMUNE_MEDICINE: 2,
        ANESTHESIOLOGY: 3,
        BEHAVIORAL_HEALTH: 4,
        CARDIOLOGY: 5,
        DERMATOLOGY: 6,
        EAR_NOSE_THROAT: 7,
        EMERGENCY_MEDICINE: 8,
        ENDOCRINOLOGY: 9,
        FAMILY_PRACTICE_INTERNAL_MEDICINE: 10,
        GASTROENTEROLOGY: 11,
        HEMATOLOGY: 12,
        NEUROLOGY: 13,
        ONCOLOGY: 14,
        OPTHAMOLOGY_EYE_CARE: 15,
        ORTHOPEDICS: 16,
        PATHOLOGY: 17,
        PEDIATRICS: 18,
        PODIATRY: 19,
        PULMONOLOGY: 20,
        RADIOLOGY_NUC_MED: 21,
        RHEUMATOLOGY: 22,
        SURGERY: 23,
        UROLOGY: 24,
        WOMENS_HEALTH_OB_GYN: 25,
        NOT_SURE: 26
    }

    const location = useLocation();
    const sprint1Data = location.state;
    const insuranceContext = sprint1Data.split(": ");

    const handleClick = (figureClicked) => {
        setSelection(figureClicked);
        if (selection !== selectionNames.NOT_SURE) {
            setBorderColor("red");
            setBtnOpacity(1);
        }
    }

    const handleNextBtn = () => {
        if (selection !== undefined) {

        }
    }
    
    return (
    <div id="wholePage">
        <div id="topOfPage">
            <img id="welcomeIMG" src={A2CLogo} alt="Welcome to Monroe County"/>
            <div id="banner">
                <h1>TYPE: {insuranceContext[0]}</h1>
                <h1>NAME: {insuranceContext[1]}</h1>
            </div>
        </div>
        <h2 id="welcomeMSG">What category of healthcare services are you looking for? (pick one)</h2>
        <div id="landingPage">
            <div class="buttonColumn" id="firstCol">
                <figure class="figButton" style={figureStyle} onClick={() => handleClick(selectionNames.ADDICTION_MEDICINE)}>
                    <img src={AddictionMedicine} alt="Addiction Medicine"/>
                    <figcaption>Addiction Medicine</figcaption>
                </figure>
                <figure class="figButton" style={figureStyle} onClick={() => handleClick(selectionNames.ALLERGY_IMMUNE_MEDICINE)}>
                    <img src={AllergyAndImmune} alt="Allergy and Immune System Medicine" />
                    <figcaption>Allergy & Immune System Medicine</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.ANESTHESIOLOGY)}>
                    <img src={Anesthesiology} alt="Anesthesiology" />
                    <figcaption>Anesthesiology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.BEHAVIORAL_HEALTH)}>
                    <img src={BehavioralHealth} alt="Behavioral Health" />
                    <figcaption>Behavioral Health</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.CARDIOLOGY)}>
                    <img src={Cardiology} alt="Cardiology" />
                    <figcaption>Cardiology</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="secondCol">
                <figure class="figButton" onClick={() => handleClick(selectionNames.DERMATOLOGY)}>                
                    <img src={Dermatology} alt="Dermatology"/>
                    <figcaption>Dermatology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.EAR_NOSE_THROAT)}>
                    <img src={EarNoseThroat} alt="Ear, Nose, and Throat"/>
                    <figcaption>Ear, Nose, & Throat (Otolaryngology)</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.EMERGENCY_MEDICINE)}>
                    <img src={EmergencyMedicine} alt="Emergency Medicine"/>
                    <figcaption>Emergency Medicine</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.ENDOCRINOLOGY)}>
                    <img src={Endocrinology} alt="Endocrinology"/>
                    <figcaption>Endocrinology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE)}>
                    <img src={FamilyPracticeInternalMedicine} alt="Family Practice and Internal Medicine"/>
                    <figcaption>Family Practice / Internal Medicine</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="thirdCol">
                <figure class="figButton" onClick={() => handleClick(selectionNames.GASTROENTEROLOGY)}>
                    <img src={Gastroenterology} alt="Gastroenterology"/>
                    <figcaption>Gastroenterology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.HEMATOLOGY)}>
                    <img src={Hematology} alt="Hematology"/>
                    <figcaption>Hematology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.NEUROLOGY)}>
                    <img src={Neurology} alt="Neurology"/>
                    <figcaption>Neurology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.ONCOLOGY)}>
                    <img src={Oncology} alt="Oncology"/>
                    <figcaption>Oncology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.OPTHAMOLOGY_EYE_CARE)}>
                    <img src={Opthamology} alt="Opthamology"/>
                    <figcaption>Opthamology / Eye Care Medicine</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="fourthCol">
                <figure class="figButton" onClick={() => handleClick(selectionNames.ORTHOPEDICS)}>
                    <img src={Orthopedics} alt="Orthopedics"/>
                    <figcaption>Orthopedics</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.PATHOLOGY)}>
                    <img src={Pathology} alt="Pathology"/>
                    <figcaption>Pathology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.PEDIATRICS)}>
                    <img src={Pediatrics} alt="Pediatrics"/>
                    <figcaption>Pediatrics</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.PODIATRY)}>
                    <img src={Podiatry} alt="Podiatry"/>
                    <figcaption>Podiatry</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.PULMONOLOGY)}>
                    <img src={Pulmonology} alt="Pulmonology"/>
                    <figcaption>Pulmonology</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="fifthCol">   
                <figure class="figButton" onClick={() => handleClick(selectionNames.RADIOLOGY_NUC_MED)}>
                    <img src={Radiology} alt="Radiology"/>
                    <figcaption>Radiology & Nuclear Medicine</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.RHEUMATOLOGY)}>
                    <img src={Rheumatology} alt="Rheumatology"/>
                    <figcaption>Rheumatology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.SURGERY)}>
                    <img src={Surgery} alt="Surgery"/>
                    <figcaption>Surgery</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.UROLOGY)}>
                    <img src={Urology} alt="Urology"/>
                    <figcaption>Urology</figcaption>
                </figure>
                <figure class="figButton" onClick={() => handleClick(selectionNames.WOMENS_HEALTH_OB_GYN)}>
                    <img src={WomensHealth} alt="Women's Health, OB/GN"/>
                    <figcaption>Women's Health / OB/GYN</figcaption>
                </figure>                
            </div>
            <figure class="figButton" id="notSure" onClick={() => handleClick(selectionNames.NOT_SURE)}>
                <img src={NotSure} alt="I'm Not Sure"/>
                <figcaption>I'm Not Sure</figcaption>
            </figure>
            <button type="button" id="nextButton" style={nextBtnStyle} onClick={handleNextBtn}>NEXT</button>
        </div>
    </div>
    );
}