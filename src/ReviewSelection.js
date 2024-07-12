import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import A2CLogo from './A2CLogo_150x150.png';
function ReviewSelection() {
    const [ submittedFilters, setSubmittedFilters ] = useState([]);
    
    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;
    const navigate = useNavigate();

    const handleFilterSubmission = (submission) => {
        setSubmittedFilters([...submittedFilters, {
            id: submission.id,
            filterName: submission.filterName 
        }]);
    }

    const handleFilterRemoval = (id) => {
        setSubmittedFilters(submittedFilters.filter(remainingFiltersAfterUndo => remainingFiltersAfterUndo.id !== id));
    }

    const handleReviewListClick = () => {
        const paramsForList = {
            insuranceType: listingToReview.insuranceType,
            insuranceName: listingToReview.insuranceName,
            healthCareCategory: listingToReview.healthCareCategory,
            submittedFilters: submittedFilters
        }

        navigate("../display-list", {
            state: paramsForList
        })
    }

    return (
        <div id="reviewSelectionScreen">
            <img id="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
            <div id="reviewSelectionWhiteBanner">
                <p className="reviewSelectionText">TYPE: {listingToReview.insuranceType}</p>
                <p className="reviewSelectionText">NAME: {listingToReview.insuranceName}</p>
                <p className="reviewSelectionText">CATEGORY: {listingToReview.healthCareCategory}</p>
            </div>
            <div id="filterHealthCareScreen">
                <FilterHealthCareSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} addFilters={handleFilterSubmission} collectedFilters={submittedFilters} removeFilters={handleFilterRemoval}/>
            </div>
            <div id="reviewListBtn">
                <button type="button" id="reviewSelectionBtn" onClick={handleReviewListClick}>REVIEW LIST</button>
            </div>
        </div>
        
    );
}

export default ReviewSelection;