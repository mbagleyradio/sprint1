/*
* TO DO:
*   GET THE LISTING COMPONENTS IN DISPLAY-LIST JS TO NOT BREAK WHEN THE VIEWPORT IS NARROWED
*   FIX THE VIEWPORT ISSUE SCOTT SHARED ... I THINK I HAVEN'T STYLED HOW TO HANDLE VIEWPORT EXPANSION?
*/

// Import the CSS styling
import './HealthcareCategories.css';
import './ReviewSelection.css';

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

export default function HealthcareCategories() {
    // usestate hooks for selection, styling, opening/closing the "not sure" modal, and data sent to the next page when "next" btn is clicked
    const [btnOpacity, setBtnOpacity] = useState(0); // this is a state hook for the "next" button opacity
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
        if (figureClicked !== selectionNames.NOT_SURE) {
            setBtnOpacity(1);
            switch(figureClicked) {
                case selectionNames.ADDICTION_MEDICINE:
                    setSubmission("Addiction Medicine");
                break;

                case selectionNames.ALLERGY_IMMUNE_MEDICINE:
                    setSubmission("Allergy & Immune System Medicine");
                break;

                case selectionNames.ANESTHESIOLOGY:
                    setSubmission("Anesthesiology");
                break;

                case selectionNames.BEHAVIORAL_HEALTH:
                    setSubmission("Behavioral Health");
                break;

                case selectionNames.CARDIOLOGY:
                    setSubmission("Cardiology");
                break;

                case selectionNames.DERMATOLOGY:
                    setSubmission("Dermatology");
                break;

                case selectionNames.EAR_NOSE_THROAT:
                    setSubmission("Ear, Nose, & Throat (Otolaryngology");
                break;

                case selectionNames.EMERGENCY_MEDICINE:
                    setSubmission("Emergency Medicine");
                break;

                case selectionNames.ENDOCRINOLOGY:
                    setSubmission("Endocrinology");
                break;

                case selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE:
                    setSubmission("Family Practice / Internal Medicine");
                break;

                case selectionNames.GASTROENTEROLOGY:
                    setSubmission("Gastroenterology");
                break;

                case selectionNames.HEMATOLOGY:
                    setSubmission("Hematology");
                break;

                case selectionNames.NEUROLOGY:
                    setSubmission("Neurology");
                break;

                case selectionNames.ONCOLOGY:
                    setSubmission("Oncology");
                break;

                case selectionNames.OPTHAMOLOGY_EYE_CARE:
                    setSubmission("Opthamology / Eye Care Medicine");
                break;

                case selectionNames.ORTHOPEDICS:
                    setSubmission("Orthopedics");
                break;

                case selectionNames.PATHOLOGY:
                    setSubmission("Pathology");
                break;

                case selectionNames.PEDIATRICS:
                    setSubmission("Pediatrics");
                break;

                case selectionNames.PODIATRY:
                    setSubmission("Podiatry");
                break;

                case selectionNames.PULMONOLOGY:
                    setSubmission("Pulmonology");
                break;

                case selectionNames.RADIOLOGY_NUC_MED:
                    setSubmission("Radiology & Nuclear Medicine");
                break;

                case selectionNames.RHEUMATOLOGY:
                    setSubmission("Rheumatology");
                break;

                case selectionNames.SURGERY:
                    setSubmission("Surgery");
                break;

                case selectionNames.UROLOGY:
                    setSubmission("Urology");
                break;

                case selectionNames.WOMENS_HEALTH_OB_GYN:
                    setSubmission("Women's Health / OB GYN");
                break;

                default:
                break;
            }
        }
    }

    // this function handles "next" button click events
    const handleNextBtnClick = () => {
        if (submission !== undefined) {   
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
        <div className="reviewSelectionBanner">
            <img className="reviewSelectionLogo" src={A2CLogo} alt="Welcome to Monroe County"/>
            <div className="reviewSelectionWhiteBanner">
                <p className="reviewSelectionText">TYPE: {insuranceContext[0]}</p>
                <p className="reviewSelectionText">NAME: {insuranceContext[1]}</p>
            </div>
        </div>
        <h3 id="welcomeMSG">What category of healthcare services are you looking for? (pick one)</h3>
        <div id="landingPage">
            <div className="buttonColumn" id="firstCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={AddictionMedicine} alt="Addiction Medicine" onClick={() => handleFigureClick(selectionNames.ADDICTION_MEDICINE)}/></button>
                    <p className="figText">Addiction Medicine</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={AllergyAndImmune} alt="Allergy and Immune System Medicine" onClick={() => handleFigureClick(selectionNames.ALLERGY_IMMUNE_MEDICINE)}/></button>
                    <p className="figText">Allergy & Immune System Medicine</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Anesthesiology} alt="Anesthesiology" onClick={() => handleFigureClick(selectionNames.ANESTHESIOLOGY)}/></button>
                    <p className="figText">Anesthesiology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={BehavioralHealth} alt="Behavioral Health" onClick={() => handleFigureClick(selectionNames.BEHAVIORAL_HEALTH)}/></button>
                    <p className="figText">Behavioral Health</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Cardiology} alt="Cardiology" onClick={() => handleFigureClick(selectionNames.CARDIOLOGY)}/></button>
                    <p className="figText">Cardiology</p>
                </div>
            </div>
            <div className="buttonColumn" id="secondCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Dermatology} alt="Dermatology" onClick={() => handleFigureClick(selectionNames.DERMATOLOGY)}/></button>
                    <p className="figText">Dermatology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={EarNoseThroat} alt="Ear, Nose, and Throat" onClick={() => handleFigureClick(selectionNames.EAR_NOSE_THROAT)}/></button>
                    <p className="figText">Ear, Nose, & Throat (Otolaryngology)</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={EmergencyMedicine} alt="Emergency Medicine" onClick={() => handleFigureClick(selectionNames.EMERGENCY_MEDICINE)}/></button>
                    <p className="figText">Emergency Medicine</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Endocrinology} alt="Endocrinology" onClick={() => handleFigureClick(selectionNames.ENDOCRINOLOGY)}/></button>
                    <p className="figText">Endocrinology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={FamilyPracticeInternalMedicine} alt="Family Practice and Internal Medicine" onClick={() => handleFigureClick(selectionNames.FAMILY_PRACTICE_INTERNAL_MEDICINE)}/></button>
                    <p className="figText">Family Practice / Internal Medicine</p>
                </div>
            </div>
            <div className="buttonColumn" id="thirdCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Gastroenterology} alt="Gastroenterology" onClick={() => handleFigureClick(selectionNames.GASTROENTEROLOGY)}/></button>
                    <p className="figText">Gastroenterology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Hematology} alt="Hematology" onClick={() => handleFigureClick(selectionNames.HEMATOLOGY)}/></button>
                    <p className="figText">Hematology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Neurology} alt="Neurology" onClick={() => handleFigureClick(selectionNames.NEUROLOGY)}/></button>
                    <p className="figText">Neurology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Oncology} alt="Oncology" onClick={() => handleFigureClick(selectionNames.ONCOLOGY)}/></button>
                    <p className="figText">Oncology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Opthamology} alt="Opthamology" onClick={() => handleFigureClick(selectionNames.OPTHAMOLOGY)}/></button>
                    <p className="figText">Opthamology</p>
                </div>
            </div>
            <div className="buttonColumn" id="fourthCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Orthopedics} alt="Orthopedics" onClick={() => handleFigureClick(selectionNames.ORTHOPEDICS)}/></button>
                    <p className="figText">Orthopedics</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Pathology} alt="Pathology" onClick={() => handleFigureClick(selectionNames.PATHOLOGY)}/></button>
                    <p className="figText">Pathology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Pediatrics} alt="Pediatrics" onClick={() => handleFigureClick(selectionNames.PEDIATRICS)}/></button>
                    <p className="figText">Pediatrics</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Podiatry} alt="Podiatry" onClick={() => handleFigureClick(selectionNames.PODIATRY)}/></button>
                    <p className="figText">Podiatry</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Pulmonology} alt="Pulmonology" onClick={() => handleFigureClick(selectionNames.PULMONOLOGY)}/></button>
                    <p className="figText">Pulmonology</p>
                </div>
            </div>
            <div className="buttonColumn" id="fifthCol">   
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Radiology} alt="Radiology" onClick={() => handleFigureClick(selectionNames.RADIOLOGY_NUC_MED)}/></button>
                    <p className="figText">Radiology & Nuclear Medicine</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Rheumatology} alt="Rheumatology" onClick={() => handleFigureClick(selectionNames.RHEUMATOLOGY)}/></button>
                    <p className="figText">Rheumatology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Surgery} alt="Surgery" onClick={() => handleFigureClick(selectionNames.SURGERY)}/></button>
                    <p className="figText">Surgery</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Urology} alt="Urology" onClick={() => handleFigureClick(selectionNames.UROLOGY)}/></button>
                    <p className="figText">Urology</p>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={WomensHealth} alt="Women's Health, OB/GN" onClick={() => handleFigureClick(selectionNames.WOMENS_HEALTH_OB_GYN)}/></button>
                    <p className="figText">Women's Health / OB/GYN</p>
                </div>               
            </div>
            <div className="buttonElement" id="notSure">
                <button className="figButton"><img className="figImg" id="notSureIMG" src={NotSure} alt="I'm Not Sure" onClick={() => setModalOpen(true)}/> </button>
                <p className="figText">I'm Not Sure</p>
            </div>
            {
                modalOpen && (<NotSureModal modalOpen={modalOpen} onAsk={handleModalAsk} onClose={handleModalClose} onRecord={handleModalRecord} onStopRecord={handleModalStopRecord}/>)
            }
            <button type="button" id="nextButton" style={nextBtnStyle} onClick={handleNextBtnClick}>NEXT</button>
        </div>
    </div>
    );
}