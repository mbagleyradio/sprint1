import './ReviewSelection.css';
import A2CLogo from './A2CLogo_150x150.png';
function ReviewSelection( { insuranceType, insuranceName, healthCareCategory } ) {
    return (
        <div id="reviewSelectionScreen">
            <img src={A2CLogo} alt="Access 2 Care"/>
            <div id="reviewSelectionWhiteBanner">
                <p className="reviewSelectionText">TYPE: {insuranceType}</p>
                <p className="reviewSelectionText">NAME: {insuranceName}</p>
                <p className="reviewSelectionText">CATEGORY: {healthCareCategory}</p>
            </div>
        </div>
        
    );
}

export default ReviewSelection;