
// Import the CSS styling
import './HealthcareCategories.css';
import './ReviewSelection.css';

// Import React & React Router tools
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Import images for the menu
import A2CLogo from './A2CLogo_150x150.png';
import AllergyAndImmune from './sprint2/img/revised_healthcare_icons_05-06-2025/Allergy & Immune Systed.png';
import Anesthesiology from './sprint2/img/revised_healthcare_icons_05-06-2025/Anesthesiology.png';
import Audiology from './sprint2/img/revised_healthcare_icons_05-06-2025/Audiology.png';
import BehavioralHealth from './sprint2/img/revised_healthcare_icons_05-06-2025/Behavioral Health.png';
import Cardiology from './sprint2/img/revised_healthcare_icons_05-06-2025/Cardiology.png';
import Chiropractic from './sprint2/img/revised_healthcare_icons_05-06-2025/Chiropractic.png';
import Dentistry from './sprint2/img/revised_healthcare_icons_05-06-2025/Dentistry.png';
import Dermatology from './sprint2/img/revised_healthcare_icons_05-06-2025/Dermatology.png';
import EarNoseThroat from './sprint2/img/revised_healthcare_icons_05-06-2025/ENT.png';
import Endocrinology from './sprint2/img/revised_healthcare_icons_05-06-2025/Endocrynology.png';
import FamilyPracticeInternalMedicine from './sprint2/img/revised_healthcare_icons_05-06-2025/Primary Care.png';
import Gastroenterology from './sprint2/img/revised_healthcare_icons_05-06-2025/Gastroenterology.png';
import Hematology from './sprint2/img/revised_healthcare_icons_05-06-2025/Hematology.png';
import Neurology from './sprint2/img/revised_healthcare_icons_05-06-2025/Neurology.png';
import Oncology from './sprint2/img/revised_healthcare_icons_05-06-2025/Oncology.png';
import Opthamology from './sprint2/img/revised_healthcare_icons_05-06-2025/Eye Care.png';
import Orthopedics from './sprint2/img/revised_healthcare_icons_05-06-2025/Orthopedics.png';
import PhysicalTherapy from './sprint2/img/revised_healthcare_icons_05-06-2025/Physical Therapy.png';
import Pathology from './sprint2/img/revised_healthcare_icons_05-06-2025/Pathology.png';
import Pediatrics from './sprint2/img/revised_healthcare_icons_05-06-2025/Pediatrics.png';
import PlasticSurgery from './sprint2/img/revised_healthcare_icons_05-06-2025/plastic surgery.png';
import Podiatry from './sprint2/img/revised_healthcare_icons_05-06-2025/Podiatry.png';
import Pulmonology from './sprint2/img/revised_healthcare_icons_05-06-2025/Pulmonology.png';
import Radiology from './sprint2/img/revised_healthcare_icons_05-06-2025/Medical Imaging.png';
import Rheumatology from './sprint2/img/revised_healthcare_icons_05-06-2025/Rheumatology.png';
import Surgery from './sprint2/img/revised_healthcare_icons_05-06-2025/Surgery.png';
import Urology from './sprint2/img/revised_healthcare_icons_05-06-2025/Urology.png';
import WomensHealth from './sprint2/img/revised_healthcare_icons_05-06-2025/OB-GYN.png';
import UrgentCare from './sprint2/img/revised_healthcare_icons_05-06-2025/Urgent Care.png';
import NotSure from './sprint2/img/revised_healthcare_icons_05-06-2025/Help.png';

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

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const sprint1Data = location.state;
    
    const insuranceContext = sprint1Data.split(": ");

    // This function will handle click events on figures (the images with captions on the menu)
    const handleFigureClick = (e) => {
        if (e.target.alt !== "I'm Not Sure") {
            setBtnOpacity(1);
            setSubmission(e.target.alt);
        }
    }

    // this function handles "next" button click events
    const handleNextBtnClick = () => {
        if (submission !== undefined && submission !== "I'm Not Sure") {   
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
        <h3 id="welcomeMSG">What kind of healthcare services are you looking for? (pick one)</h3>
        <div id="landingPage">
            <div className="buttonColumn" id="firstCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={FamilyPracticeInternalMedicine} alt="Primary Care - Family / Internal Medicine" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={UrgentCare} alt="Urgent Care" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Pediatrics} alt="Pediatrics" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={WomensHealth} alt="OB/GYN - Women's Health" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                 <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={BehavioralHealth} alt="Behavioral Health & Psychiatry" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
            </div>
            <div className="buttonColumn" id="secondCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={AllergyAndImmune} alt="Allergy & Immune System Medicine" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Audiology} alt="Audiology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Cardiology} alt="Cardiology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Chiropractic} alt="Chiropractic Medicine" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Dentistry} alt="Dentistry" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
            </div>
            <div className="buttonColumn" id="thirdCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Dermatology} alt="Dermatology" onClick={(e) => handleFigureClick(e)} tabindex="0" /></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={EarNoseThroat} alt="Ear, Nose & Throat (ENT) / Otolaryngology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Endocrinology} alt="Endocrinology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Gastroenterology} alt="Gastroenterology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Neurology} alt="Neurology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
            </div>
            <div className="buttonColumn" id="fourthCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Oncology} alt="Oncology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Opthamology} alt="Opthamology Eye Care" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Orthopedics} alt="Orthopedics" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={PhysicalTherapy} alt="Physical Therapy and Rehabilitation" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Podiatry} alt="Podiatry / Foot & Ankle Care" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
            </div>
            <div className="buttonColumn" id="fifthCol">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Pulmonology} alt="Pulmonology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>                
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={PlasticSurgery} alt="Reconstructive / Plastic Surgery" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Rheumatology} alt="Rheumatology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Surgery} alt="Surgery" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={Urology} alt="Urology"onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                </div>
            </div>
            <div className="buttonColumn" id="notSureBtn">
                <div className="buttonElement">
                    <button className="figButton"><img className="figImg" src={NotSure} alt="I'm Not Sure" onClick={() => setModalOpen(true)} tabindex="0"/></button>
                </div>
            </div>
            <div id="sixthCol">
                <div id="sixthColText">
                    <p>A referral from a Primary Care Healthcare Provider is required before you can see the healthcare providers shown below. Primary Care Healthcare Providers are the first selection option at the top of the page.</p>
                </div>
                <div className="buttonColumn" id="sixthColButtons">   
                    <div className="buttonElement">
                        <button className="figButton"><img className="figImg" src={Anesthesiology} alt="Anesthesiology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                    </div>
                    <div className="buttonElement">
                        <button className="figButton"><img className="figImg" src={Hematology} alt="Hematology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                    </div>
                    <div className="buttonElement">
                        <button className="figButton"><img className="figImg" src={Radiology} alt="Radiology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                    </div>
                    <div className="buttonElement">
                        <button className="figButton"><img className="figImg" src={Pathology} alt="Pathology" onClick={(e) => handleFigureClick(e)} tabindex="0"/></button>
                    </div>               
                </div>
            </div>
            
            <div id="notSureAndNext">
                <button type="button" id="nextButton" style={nextBtnStyle} onClick={handleNextBtnClick}>NEXT</button>
            </div>
            <div>
            { modalOpen && (<NotSureModal modalOpen={modalOpen} onAsk={handleModalAsk} onClose={handleModalClose} onRecord={handleModalRecord} onStopRecord={handleModalStopRecord}/>) }
            </div>
        </div>
    </div>
    );
}