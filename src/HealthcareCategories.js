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
    const [submission, setSubmission] = useState(""); // this is a state hook for the user's final submission of healthcare category, sent to the next page when the "next" btn is clicked

    // useRef hooks for opening/closing the modal
    const [modalOpen, setModalOpen] = useState(false);

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
            /* 
            console.log(`NOT SURE was selected`);
            //resetPriorFigureStyle();
            setBtnOpacity(0);
            setModalOpen(true);
            */
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
    const handleModalClose = () => {
        setModalOpen(false);
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
        <h3 id="welcomeMSG">What category of healthcare services are you looking for? (pick one)</h3>
        <div id="landingPage">
            <div className="buttonColumn" id="firstCol">
                <figure className="figButton" id="addictionMedicineFocusTest" style={addictionMedicineBorder}>
                    <img className="figImg" src={AddictionMedicine} alt="Addiction Medicine" onClick={() => handleFigureClick(selectionNames.ADDICTION_MEDICINE)}/>
                    <figcaption className="figText">Addiction Medicine</figcaption>
                </figure>
                <figure className="figButton" id="allery" style={allergyImmuneBorder} >
                    <img className="figImg" src={AllergyAndImmune} alt="Allergy and Immune System Medicine" onClick={() => handleFigureClick(selectionNames.ALLERGY_IMMUNE_MEDICINE)}/>
                    <figcaption className="figText">Allergy & Immune System Medicine</figcaption>
                </figure>
                <figure className="figButton" style={anesthesiologyBorder} >
                    <img className="figImg" src={Anesthesiology} alt="Anesthesiology" onClick={() => handleFigureClick(selectionNames.ANESTHESIOLOGY)}/>
                    <figcaption className="figText">Anesthesiology</figcaption>
                </figure>
                <figure className="figButton" style={behavioralHealthBorder} >
                    <img className="figImg" src={BehavioralHealth} alt="Behavioral Health" onClick={() => handleFigureClick(selectionNames.BEHAVIORAL_HEALTH)}/>
                    <figcaption className="figText">Behavioral Health</figcaption>
                </figure>
                <figure className="figButton" style={cardiologyBorder} >
                    <img className="figImg" src={Cardiology} alt="Cardiology" onClick={() => handleFigureClick(selectionNames.CARDIOLOGY)}/>
                    <figcaption className="figText">Cardiology</figcaption>
                </figure>
            </div>
            <div className="buttonColumn" id="secondCol">
                <figure className="figButton" style={dermatologyBorder} >                
                    <img className="figImg" src={Dermatology} alt="Dermatology" onClick={() => handleFigureClick(selectionNames.DERMATOLOGY)}/>
                    <figcaption className="figText">Dermatology</figcaption>
                </figure>
                <figure className="figButton" style={earNoseThroatBorder} >
                    <img className="figImg" src={EarNoseThroat} alt="Ear, Nose, and Throat" onClick={() => handleFigureClick(selectionNames.EAR_NOSE_THROAT)}/>
                    <figcaption className="figText">Ear, Nose, & Throat (Otolaryngology)</figcaption>
                </figure>
                <figure className="figButton" style={emergencyBorder} >
                    <img className="figImg" src={EmergencyMedicine} alt="Emergency Medicine" onClick={() => handleFigureClick(selectionNames.EMERGENCY_MEDICINE)}/>
                    <figcaption className="figText">Emergency Medicine</figcaption>
                </figure>
                <figure className="figButton" style={endocrinologyBorder} >
                    <img className="figImg" src={Endocrinology} alt="Endocrinology" onClick={() => handleFigureClick(selectionNames.ENDOCRINOLOGY)}/>
                    <figcaption className="figText">Endocrinology</figcaption>
                </figure>
                <figure className="figButton" style={familyPracticeBorder} >
                    <img className="figImg" src={FamilyPracticeInternalMedicine} alt="Family Practice and Internal Medicine" onClick={() => handleFigureClick(selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE)}/>
                    <figcaption className="figText">Family Practice / Internal Medicine</figcaption>
                </figure>
            </div>
            <div className="buttonColumn" id="thirdCol">
                <figure className="figButton" style={gastroenterologyBorder} >
                    <img className="figImg" src={Gastroenterology} alt="Gastroenterology" onClick={() => handleFigureClick(selectionNames.GASTROENTEROLOGY)}/>
                    <figcaption className="figText">Gastroenterology</figcaption>
                </figure>
                <figure className="figButton" style={hematologyBorder} >
                    <img className="figImg" src={Hematology} alt="Hematology" onClick={() => handleFigureClick(selectionNames.HEMATOLOGY)}/>
                    <figcaption className="figText">Hematology</figcaption>
                </figure>
                <figure className="figButton" style={neurologyBorder} >
                    <img className="figImg" src={Neurology} alt="Neurology" onClick={() => handleFigureClick(selectionNames.NEUROLOGY)}/>
                    <figcaption className="figText">Neurology</figcaption>
                </figure>
                <figure className="figButton" style={oncologyBorder} >
                    <img className="figImg" src={Oncology} alt="Oncology" onClick={() => handleFigureClick(selectionNames.ONCOLOGY)}/>
                    <figcaption className="figText">Oncology</figcaption>
                </figure>
                <figure className="figButton" style={opthamologyBorder} >
                    <img className="figImg" src={Opthamology} alt="Opthamology" onClick={() => handleFigureClick(selectionNames.OPTHAMOLOGY_EYE_CARE)}/>
                    <figcaption className="figText">Opthamology / Eye Care Medicine</figcaption>
                </figure>
            </div>
            <div className="buttonColumn" id="fourthCol">
                <figure className="figButton" style={orthopedicsBorder} >
                    <img className="figImg" src={Orthopedics} alt="Orthopedics" onClick={() => handleFigureClick(selectionNames.ORTHOPEDICS)}/>
                    <figcaption className="figText">Orthopedics</figcaption>
                </figure>
                <figure className="figButton" style={pathologyBorder} >
                    <img className="figImg" src={Pathology} alt="Pathology" onClick={() => handleFigureClick(selectionNames.PATHOLOGY)}/>
                    <figcaption className="figText">Pathology</figcaption>
                </figure>
                <figure className="figButton" style={pediatricsBorder} >
                    <img className="figImg" src={Pediatrics} alt="Pediatrics" onClick={() => handleFigureClick(selectionNames.PEDIATRICS)}/>
                    <figcaption className="figText">Pediatrics</figcaption>
                </figure>
                <figure className="figButton" style={podiatryBorder} >
                    <img className="figImg" src={Podiatry} alt="Podiatry" onClick={() => handleFigureClick(selectionNames.PODIATRY)}/>
                    <figcaption className="figText">Podiatry</figcaption>
                </figure>
                <figure className="figButton" style={pulmonologyBorder} >
                    <img className="figImg" src={Pulmonology} alt="Pulmonology" onClick={() => handleFigureClick(selectionNames.PULMONOLOGY)}/>
                    <figcaption className="figText">Pulmonology</figcaption>
                </figure>
            </div>
            <div className="buttonColumn" id="fifthCol">   
                <figure className="figButton" style={radiologyBorder} >
                    <img className="figImg" src={Radiology} alt="Radiology" onClick={() => handleFigureClick(selectionNames.RADIOLOGY_NUC_MED)}/>
                    <figcaption className="figText">Radiology & Nuclear Medicine</figcaption>
                </figure>
                <figure className="figButton" style={rheumatologyBorder} >
                    <img className="figImg" src={Rheumatology} alt="Rheumatology" onClick={() => handleFigureClick(selectionNames.RHEUMATOLOGY)}/>
                    <figcaption className="figText">Rheumatology</figcaption>
                </figure>
                <figure className="figButton" style={surgeryBorder} >
                    <img className="figImg" src={Surgery} alt="Surgery" onClick={() => handleFigureClick(selectionNames.SURGERY)}/>
                    <figcaption className="figText">Surgery</figcaption>
                </figure>
                <figure className="figButton" style={urologyBorder} >
                    <img className="figImg" src={Urology} alt="Urology" onClick={() => handleFigureClick(selectionNames.UROLOGY)}/>
                    <figcaption className="figText">Urology</figcaption>
                </figure>
                <figure className="figButton" style={womensHealthBorder} >
                    <img className="figImg" src={WomensHealth} alt="Women's Health, OB/GN" onClick={() => handleFigureClick(selectionNames.WOMENS_HEALTH_OB_GYN)}/>
                    <figcaption className="figText">Women's Health / OB/GYN</figcaption>
                </figure>                
            </div>
            <figure id="notSure">
                <img id="notSureIMG" src={NotSure} alt="I'm Not Sure" onClick={() => setModalOpen(true)}/>
                <figcaption className="figText">I'm Not Sure</figcaption>
            </figure>
            {
                modalOpen && (<NotSureModal modalOpen={modalOpen} onAsk={handleModalAsk} onClose={handleModalClose} onRecord={handleModalRecord} onStopRecord={handleModalStopRecord}/>)
            }
            <button type="button" id="nextButton" style={nextBtnStyle} onClick={handleNextBtnClick}>NEXT</button>
        </div>
    </div>
    );
}