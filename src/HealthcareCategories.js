// Import the CSS styling
import './HealthcareCategories.css';

// Import React & React Router tools
import { useLocation, useNavigate } from 'react-router-dom';
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

// Import child components
import NotSureModal from './NotSureModal.js';

// global objects for styling - default border color (transp. with background color)
const DEFAULT_BORDER = {
    border: "2px solid #D9F0F1"
};

// global objects for styling - red border color
const RED_BORDER = {
    border: "2px solid red"
}

export default function HealthcareCategories() {
    // useState hooks for each button's border colors
    const [addictionMedicineBorder, setAddictionMedicineBorder] = useState(DEFAULT_BORDER);
    const [allergyImmuneBorder, setAllergyImmuneBorder] = useState(DEFAULT_BORDER);
    const [anesthesiologyBorder, setAnesthesiologyBorder] = useState(DEFAULT_BORDER);
    const [behavioralHealthBorder, setBehavioralHealthBorder] = useState(DEFAULT_BORDER);
    const [cardiologyBorder, setCardiologyBorder] = useState(DEFAULT_BORDER);
    const [dermatologyBorder, setDermatologyBorder] = useState(DEFAULT_BORDER);
    const [earNoseThroatBorder, setEarNoseThroatBorder] = useState(DEFAULT_BORDER);
    const [emergencyBorder, setEmergencyBorder] = useState(DEFAULT_BORDER);
    const [endocrinologyBorder, setEndocrinologyBorder] = useState(DEFAULT_BORDER);
    const [familyPracticeBorder, setFamilyPracticeBorder] = useState(DEFAULT_BORDER);
    const [gastroenterologyBorder, setGastroenterologyBorder] = useState(DEFAULT_BORDER);
    const [hematologyBorder, setHematologyBorder] = useState(DEFAULT_BORDER);
    const [neurologyBorder, setNeurologyBorder] = useState(DEFAULT_BORDER);
    const [oncologyBorder, setOncologyBorder] = useState(DEFAULT_BORDER);
    const [opthamologyBorder, setOpthamologyBorder] = useState(DEFAULT_BORDER);
    const [orthopedicsBorder, setOrthopedicsBorder] = useState(DEFAULT_BORDER);
    const [pathologyBorder, setPathologyBorder] = useState(DEFAULT_BORDER);
    const [pediatricsBorder, setPediatricsBorder] = useState(DEFAULT_BORDER);
    const [podiatryBorder, setPodiatryBorder] = useState(DEFAULT_BORDER);
    const [pulmonologyBorder, setPulmonologyBorder] = useState(DEFAULT_BORDER);
    const [radiologyBorder, setRadioBorder] = useState(DEFAULT_BORDER);
    const [rheumatologyBorder, setRheumatologyBorder] = useState(DEFAULT_BORDER);
    const [surgeryBorder, setSurgeryBorder] = useState(DEFAULT_BORDER);
    const [urologyBorder, setUrologyBorder] = useState(DEFAULT_BORDER);
    const [womensHealthBorder, setWomensHealthBorder] = useState(DEFAULT_BORDER);
    
    // usestate hooks for selection, styling, opening/closing the "not sure" modal, and data sent to the next page when "next" btn is clicked
    const [selection, setSelection] = useState(undefined); // this is a state hook for whether a menu option has been selected
    const [btnOpacity, setBtnOpacity] = useState(0); // this is a state hook for the "next" button opacity
    const [priorSelection, setPriorSelection] = useState(undefined); // this is a state hook for tracking the previous selection, for resetting borders
    const [modalOpen, setModalOpen] = useState(false); // this is a state hook for tracking whether the modal is open or closed
    const [submission, setSubmission] = useState(""); // this is a state hook for the user's final submission of healthcare category, sent to the next page when the "next" btn is clicked

    // useNavigate hook for navigating to "Review/Narrow List Menu" once healthcare category is selected and 'next BTN' is clicked
    const navigate = useNavigate();

    // simple object for styling the opacity of the "next" button
    const nextBtnStyle = {
        opacity: btnOpacity
    };

    // enum for the handleFigureClick case
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

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const sprint1Data = location.state;
    const insuranceContext = sprint1Data.split(": ");

    // This function will handle click events on figures (the images with captions on the menu)
    const handleFigureClick = (figureClicked) => {
        setSelection(figureClicked);
        if (selection !== selectionNames.NOT_SURE) {
            setBtnOpacity(1);
            switch(selection) {
                case selectionNames.ADDICTION_MEDICINE:
                    resetPriorFigureStyle(); // this will clear away the red border from the previously selected figure (if any)
                    setAddictionMedicineBorder(RED_BORDER); // this will style a red border on this currently selected figure
                    setPriorSelection(selectionNames.ADDICTION_MEDICINE); // this will keep track of which figure's border to clear when another figure is clicked
                    setSubmission("Addiction Medicine");
                break;

                case selectionNames.ALLERGY_IMMUNE_MEDICINE:
                    resetPriorFigureStyle();
                    setAllergyImmuneBorder(RED_BORDER);
                    setPriorSelection(selectionNames.ALLERGY_IMMUNE_MEDICINE);
                    setSubmission("Allergy & Immune System Medicine");
                break;

                case selectionNames.ANESTHESIOLOGY:
                    resetPriorFigureStyle();
                    setAnesthesiologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.ANESTHESIOLOGY);
                    setSubmission("Anesthesiology");
                break;

                case selectionNames.BEHAVIORAL_HEALTH:
                    resetPriorFigureStyle();
                    setBehavioralHealthBorder(RED_BORDER);
                    setPriorSelection(selectionNames.BEHAVIORAL_HEALTH);
                    setSubmission("Behavioral Health");
                break;

                case selectionNames.CARDIOLOGY:
                    resetPriorFigureStyle();
                    setCardiologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.CARDIOLOGY);
                    setSubmission("Cardiology");
                break;

                case selectionNames.DERMATOLOGY:
                    resetPriorFigureStyle();
                    setDermatologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.DERMATOLOGY);
                    setSubmission("Dermatology");
                break;

                case selectionNames.EAR_NOSE_THROAT:
                    resetPriorFigureStyle();
                    setEarNoseThroatBorder(RED_BORDER);
                    setPriorSelection(selectionNames.EAR_NOSE_THROAT);
                    setSubmission("Ear, Nose, & Throat (Otolaryngology");

                break;

                case selectionNames.EMERGENCY_MEDICINE:
                    resetPriorFigureStyle();
                    setEmergencyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.EMERGENCY_MEDICINE);
                    setSubmission("Emergency Medicine");
                break;

                case selectionNames.ENDOCRINOLOGY:
                    resetPriorFigureStyle();
                    setEndocrinologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.ENDOCRINOLOGY);
                    setSubmission("Endocrinology");
                break;

                case selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE:
                    resetPriorFigureStyle();
                    setFamilyPracticeBorder(RED_BORDER);
                    setPriorSelection(selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE);
                    setSubmission("Family Practice / Internal Medicine");
                break;

                case selectionNames.GASTROENTEROLOGY:
                    resetPriorFigureStyle();
                    setGastroenterologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.GASTROENTEROLOGY);
                    setSubmission("Gastroenterology");
                break;

                case selectionNames.HEMATOLOGY:
                    resetPriorFigureStyle();
                    setHematologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.HEMATOLOGY);
                    setSubmission("Hematology");
                break;

                case selectionNames.NEUROLOGY:
                    resetPriorFigureStyle();
                    setNeurologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.NEUROLOGY);
                    setSubmission("Neurology");
                break;

                case selectionNames.ONCOLOGY:
                    resetPriorFigureStyle();
                    setOncologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.ONCOLOGY);
                    setSubmission("Oncology");
                break;

                case selectionNames.OPTHAMOLOGY_EYE_CARE:
                    resetPriorFigureStyle();
                    setOpthamologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.OPTHAMOLOGY_EYE_CARE);
                    setSubmission("Opthamology / Eye Care Medicine");
                break;

                case selectionNames.ORTHOPEDICS:
                    resetPriorFigureStyle();
                    setOrthopedicsBorder(RED_BORDER);
                    setPriorSelection(selectionNames.ORTHOPEDICS);
                    setSubmission("Orthopedics");
                break;

                case selectionNames.PATHOLOGY:
                    resetPriorFigureStyle();
                    setPathologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.PATHOLOGY);
                    setSubmission("Pathology");
                break;

                case selectionNames.PEDIATRICS:
                    resetPriorFigureStyle();
                    setPediatricsBorder(RED_BORDER);
                    setPriorSelection(selectionNames.PEDIATRICS);
                    setSubmission("Pediatrics");
                break;

                case selectionNames.PODIATRY:
                    resetPriorFigureStyle();
                    setPodiatryBorder(RED_BORDER);
                    setPriorSelection(selectionNames.PODIATRY);
                    setSubmission("Podiatry");
                break;

                case selectionNames.PULMONOLOGY:
                    resetPriorFigureStyle();
                    setPulmonologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.PULMONOLOGY);
                    setSubmission("Pulmonology");
                break;

                case selectionNames.RADIOLOGY_NUC_MED:
                    resetPriorFigureStyle();
                    setRadioBorder(RED_BORDER);
                    setPriorSelection(selectionNames.RADIOLOGY_NUC_MED);
                    setSubmission("Radiology & Nuclear Medicine");
                break;

                case selectionNames.RHEUMATOLOGY:
                    resetPriorFigureStyle();
                    setRheumatologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.RHEUMATOLOGY);
                    setSubmission("Rheumatology");
                break;

                case selectionNames.SURGERY:
                    resetPriorFigureStyle();
                    setSurgeryBorder(RED_BORDER);
                    setPriorSelection(selectionNames.SURGERY);
                    setSubmission("Surgery");
                break;

                case selectionNames.UROLOGY:
                    resetPriorFigureStyle();
                    setUrologyBorder(RED_BORDER);
                    setPriorSelection(selectionNames.UROLOGY);
                    setSubmission("Urology");
                break;

                case selectionNames.WOMENS_HEALTH_OB_GYN:
                    resetPriorFigureStyle();
                    setWomensHealthBorder(RED_BORDER);
                    setPriorSelection(selectionNames.WOMENS_HEALTH_OB_GYN);
                    setSubmission("Women's Health / OB GYN");
                break;

                default:
                break;
            }
        } else { // if the NOT_SURE figure was selected
            resetPriorFigureStyle();
            setBtnOpacity(0);
            setModalOpen(true);
        }
    }

    // this function resets the border of the previously selected figure
    const resetPriorFigureStyle = () => {
        switch (priorSelection) {
            case selectionNames.ADDICTION_MEDICINE:
                setAddictionMedicineBorder(DEFAULT_BORDER);
            break;

            case selectionNames.ALLERGY_IMMUNE_MEDICINE:
                setAllergyImmuneBorder(DEFAULT_BORDER);
            break;

            case selectionNames.ANESTHESIOLOGY:
                setAnesthesiologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.BEHAVIORAL_HEALTH:
                setBehavioralHealthBorder(DEFAULT_BORDER);
            break;

            case selectionNames.CARDIOLOGY:
                setCardiologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.DERMATOLOGY:
                setDermatologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.EAR_NOSE_THROAT:
                setEarNoseThroatBorder(DEFAULT_BORDER);
            break;

            case selectionNames.EMERGENCY_MEDICINE:
                setEmergencyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.ENDOCRINOLOGY:
                setEndocrinologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE:
                setFamilyPracticeBorder(DEFAULT_BORDER);
            break;

            case selectionNames.GASTROENTEROLOGY:
                setGastroenterologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.HEMATOLOGY:
                setHematologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.NEUROLOGY:
                setNeurologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.ONCOLOGY:
                setOncologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.OPTHAMOLOGY_EYE_CARE:
                setOpthamologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.ORTHOPEDICS:
                setOrthopedicsBorder(DEFAULT_BORDER);
            break;

            case selectionNames.PATHOLOGY:
                setPathologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.PEDIATRICS:
                setPediatricsBorder(DEFAULT_BORDER);
            break;

            case selectionNames.PODIATRY:
                setPodiatryBorder(DEFAULT_BORDER);
            break;

            case selectionNames.PULMONOLOGY:
                setPulmonologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.RADIOLOGY_NUC_MED:
                setRadioBorder(DEFAULT_BORDER);
            break;

            case selectionNames.RHEUMATOLOGY:
                setRheumatologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.SURGERY:
                setSurgeryBorder(DEFAULT_BORDER);
            break;

            case selectionNames.UROLOGY:
                setUrologyBorder(DEFAULT_BORDER);
            break;

            case selectionNames.WOMENS_HEALTH_OB_GYN:
                setWomensHealthBorder(DEFAULT_BORDER);
            break;

            default:
            break;
        }
    }

    // this function handles "next" button click events
    const handleNextBtnClick = () => {
        if ((selection !== undefined) && (selection !== selectionNames.NOT_SURE)) {   
            navigate("../review-listing", { 
                state: {
                    insuranceType: insuranceContext[0],
                    insuranceName: insuranceContext[1],
                    healthCareCategory: submission
            }});
        }
    }

    // this function handles closure from the modal
    const handleModalClose = (submissionFromModal) => {
        setModalOpen(false);
        console.log(submissionFromModal);
    }

    // this function handles text submissions from the modal
    const handleModalAsk = (submissionFromModal) => {
        console.log(submissionFromModal);
    }

    // this function handles user audio submissions from the modal
    const handleModalRecord = (submissionFromModal) => {
        console.log(submissionFromModal);
    }

    // this function handles clicking the stop button to stop audio recordings in the modal
    const handleModalStopRecord = (submissionFromModal) => {
        console.log(submissionFromModal);
    }
    
    // this is the function component's HTML code
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
                <figure class="figButton" style={addictionMedicineBorder} onClick={() => handleFigureClick(selectionNames.ADDICTION_MEDICINE)}>
                    <img class="figImg" src={AddictionMedicine} alt="Addiction Medicine"/>
                    <figcaption>Addiction Medicine</figcaption>
                </figure>
                <figure class="figButton" style={allergyImmuneBorder} onClick={() => handleFigureClick(selectionNames.ALLERGY_IMMUNE_MEDICINE)}>
                    <img class="figImg" src={AllergyAndImmune} alt="Allergy and Immune System Medicine" />
                    <figcaption>Allergy & Immune System Medicine</figcaption>
                </figure>
                <figure class="figButton" style={anesthesiologyBorder} onClick={() => handleFigureClick(selectionNames.ANESTHESIOLOGY)}>
                    <img class="figImg" src={Anesthesiology} alt="Anesthesiology" />
                    <figcaption>Anesthesiology</figcaption>
                </figure>
                <figure class="figButton" style={behavioralHealthBorder} onClick={() => handleFigureClick(selectionNames.BEHAVIORAL_HEALTH)}>
                    <img class="figImg" src={BehavioralHealth} alt="Behavioral Health" />
                    <figcaption>Behavioral Health</figcaption>
                </figure>
                <figure class="figButton" style={cardiologyBorder} onClick={() => handleFigureClick(selectionNames.CARDIOLOGY)}>
                    <img class="figImg" src={Cardiology} alt="Cardiology" />
                    <figcaption>Cardiology</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="secondCol">
                <figure class="figButton" style={dermatologyBorder} onClick={() => handleFigureClick(selectionNames.DERMATOLOGY)}>                
                    <img class="figImg" src={Dermatology} alt="Dermatology"/>
                    <figcaption>Dermatology</figcaption>
                </figure>
                <figure class="figButton" style={earNoseThroatBorder} onClick={() => handleFigureClick(selectionNames.EAR_NOSE_THROAT)}>
                    <img class="figImg" src={EarNoseThroat} alt="Ear, Nose, and Throat"/>
                    <figcaption>Ear, Nose, & Throat (Otolaryngology)</figcaption>
                </figure>
                <figure class="figButton" style={emergencyBorder} onClick={() => handleFigureClick(selectionNames.EMERGENCY_MEDICINE)}>
                    <img class="figImg" src={EmergencyMedicine} alt="Emergency Medicine"/>
                    <figcaption>Emergency Medicine</figcaption>
                </figure>
                <figure class="figButton" style={endocrinologyBorder} onClick={() => handleFigureClick(selectionNames.ENDOCRINOLOGY)}>
                    <img class="figImg" src={Endocrinology} alt="Endocrinology"/>
                    <figcaption>Endocrinology</figcaption>
                </figure>
                <figure class="figButton" style={familyPracticeBorder} onClick={() => handleFigureClick(selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE)}>
                    <img class="figImg" src={FamilyPracticeInternalMedicine} alt="Family Practice and Internal Medicine"/>
                    <figcaption>Family Practice / Internal Medicine</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="thirdCol">
                <figure class="figButton" style={gastroenterologyBorder} onClick={() => handleFigureClick(selectionNames.GASTROENTEROLOGY)}>
                    <img class="figImg" src={Gastroenterology} alt="Gastroenterology"/>
                    <figcaption>Gastroenterology</figcaption>
                </figure>
                <figure class="figButton" style={hematologyBorder} onClick={() => handleFigureClick(selectionNames.HEMATOLOGY)}>
                    <img class="figImg" src={Hematology} alt="Hematology"/>
                    <figcaption>Hematology</figcaption>
                </figure>
                <figure class="figButton" style={neurologyBorder} onClick={() => handleFigureClick(selectionNames.NEUROLOGY)}>
                    <img class="figImg" src={Neurology} alt="Neurology"/>
                    <figcaption>Neurology</figcaption>
                </figure>
                <figure class="figButton" style={oncologyBorder} onClick={() => handleFigureClick(selectionNames.ONCOLOGY)}>
                    <img class="figImg" src={Oncology} alt="Oncology"/>
                    <figcaption>Oncology</figcaption>
                </figure>
                <figure class="figButton" style={opthamologyBorder} onClick={() => handleFigureClick(selectionNames.OPTHAMOLOGY_EYE_CARE)}>
                    <img class="figImg" src={Opthamology} alt="Opthamology"/>
                    <figcaption>Opthamology / Eye Care Medicine</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="fourthCol">
                <figure class="figButton" style={orthopedicsBorder} onClick={() => handleFigureClick(selectionNames.ORTHOPEDICS)}>
                    <img class="figImg" src={Orthopedics} alt="Orthopedics"/>
                    <figcaption>Orthopedics</figcaption>
                </figure>
                <figure class="figButton" style={pathologyBorder} onClick={() => handleFigureClick(selectionNames.PATHOLOGY)}>
                    <img class="figImg" src={Pathology} alt="Pathology"/>
                    <figcaption>Pathology</figcaption>
                </figure>
                <figure class="figButton" style={pediatricsBorder} onClick={() => handleFigureClick(selectionNames.PEDIATRICS)}>
                    <img class="figImg" src={Pediatrics} alt="Pediatrics"/>
                    <figcaption>Pediatrics</figcaption>
                </figure>
                <figure class="figButton" style={podiatryBorder} onClick={() => handleFigureClick(selectionNames.PODIATRY)}>
                    <img class="figImg" src={Podiatry} alt="Podiatry"/>
                    <figcaption>Podiatry</figcaption>
                </figure>
                <figure class="figButton" style={pulmonologyBorder} onClick={() => handleFigureClick(selectionNames.PULMONOLOGY)}>
                    <img class="figImg" src={Pulmonology} alt="Pulmonology"/>
                    <figcaption>Pulmonology</figcaption>
                </figure>
            </div>
            <div class="buttonColumn" id="fifthCol">   
                <figure class="figButton" style={radiologyBorder} onClick={() => handleFigureClick(selectionNames.RADIOLOGY_NUC_MED)}>
                    <img class="figImg" src={Radiology} alt="Radiology"/>
                    <figcaption>Radiology & Nuclear Medicine</figcaption>
                </figure>
                <figure class="figButton" style={rheumatologyBorder} onClick={() => handleFigureClick(selectionNames.RHEUMATOLOGY)}>
                    <img class="figImg" src={Rheumatology} alt="Rheumatology"/>
                    <figcaption>Rheumatology</figcaption>
                </figure>
                <figure class="figButton" style={surgeryBorder} onClick={() => handleFigureClick(selectionNames.SURGERY)}>
                    <img class="figImg" src={Surgery} alt="Surgery"/>
                    <figcaption>Surgery</figcaption>
                </figure>
                <figure class="figButton" style={urologyBorder} onClick={() => handleFigureClick(selectionNames.UROLOGY)}>
                    <img class="figImg" src={Urology} alt="Urology"/>
                    <figcaption>Urology</figcaption>
                </figure>
                <figure class="figButton" style={womensHealthBorder} onClick={() => handleFigureClick(selectionNames.WOMENS_HEALTH_OB_GYN)}>
                    <img class="figImg" src={WomensHealth} alt="Women's Health, OB/GN"/>
                    <figcaption>Women's Health / OB/GYN</figcaption>
                </figure>                
            </div>
            <figure id="notSure" onClick={() => handleFigureClick(selectionNames.NOT_SURE)}>
                <img id="notSureIMG" src={NotSure} alt="I'm Not Sure"/>
                <figcaption>I'm Not Sure</figcaption>
            </figure>
            {
                modalOpen && (
                <NotSureModal onAsk={handleModalAsk} onClose={handleModalClose} onRecord={handleModalRecord} onStopRecord={handleModalStopRecord}/>
            )}
            <button type="button" id="nextButton" style={nextBtnStyle} onClick={handleNextBtnClick}>NEXT</button>
        </div>
    </div>
    );
}