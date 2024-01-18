import './HealthcareCategories.css';
import { useLocation } from 'react-router-dom';
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

export default function HealthcareCategories(props) {
    const location = useLocation();
    const sprint1Data = location.state;
    console.log(sprint1Data);
    return (
        <div id="landingPage">
            <div id="buttonTable">
                <div class="buttonColumn" id="firstCol">
                    <img src={AddictionMedicine} alt="Addiction Medicine"/>
                    <img src={AllergyAndImmune} alt="Allergy and Immune System Medicine"/>
                    <img src={Anesthesiology} alt="Anesthesiology"/>
                    <img src={BehavioralHealth} alt="Behavioral Health"/>
                    <img src={Cardiology} alt="Cardiology"/>
                </div>
                <div class="buttonColumn" id="secondCol">
                    <img src={Dermatology} alt="Dermatology"/>
                    <img src={EarNoseThroat} alt="Ear, Nose, and Throat"/>
                    <img src={EmergencyMedicine} alt="Emergency Medicine"/>
                    <img src={Endocrinology} alt="Endocrinology"/>
                    <img src={FamilyPracticeInternalMedicine} alt="Family Practice and Internal Medicine"/>
                </div>
                <div class="buttonColumn" id="thirdCol">
                    <img src={Gastroenterology} alt="Gastroenterology"/>
                    <img src={Hematology} alt="Hematology"/>
                    <img src={Neurology} alt="Neurology"/>
                    <img src={Oncology} alt="Oncology"/>
                    <img src={Opthamology} alt="Opthamology"/>
                </div>
                <div class="buttonColumn" id="fourthCol">
                    <img src={Orthopedics} alt="Orthopedics"/>
                    <img src={Pathology} alt="Pathology"/>
                    <img src={Pediatrics} alt="Pediatrics"/>
                    <img src={Podiatry} alt="Podiatry"/>
                    <img src={Pulmonology} alt="Pulmonology"/>
                </div>
                <div class="buttonColumn" id="fifthCol">   
                    <img src={Radiology} alt="Radiology"/>
                    <img src={Rheumatology} alt="Rheumatology"/>
                    <img src={Surgery} alt="Surgery"/>
                    <img src={Urology} alt="Urology"/>
                    <img src={WomensHealth} alt="Women's Health, OB/GN"/>
                </div>
            </div>
        </div>
    );
}