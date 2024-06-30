import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation } from 'react-router-dom';

import A2CLogo from './A2CLogo_150x150.png';
function ReviewSelection() {
    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;

    return (
        <div id="reviewSelectionScreen">
            <img id="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
            <div id="reviewSelectionWhiteBanner">
                <p className="reviewSelectionText">TYPE: {listingToReview.insuranceType}</p>
                <p className="reviewSelectionText">NAME: {listingToReview.insuranceName}</p>
                <p className="reviewSelectionText">CATEGORY: {listingToReview.healthCareCategory}</p>
            </div>
            <div id="filterHealthCareScreen">
                <FilterHealthCareSelection/>
            </div>
        </div>
        
    );
}

export default ReviewSelection;