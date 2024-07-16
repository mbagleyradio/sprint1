import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

function ReviewSelection() {
    const [ submittedFilters, setSubmittedFilters ] = useState([]);
    let uniqueFilterID = useRef(0);

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;
    const navigate = useNavigate();

    // setter is not working right ... could you count ID with the .length function? ID would equal .length - 1. For removal, you would just need to splice based on 3 conditional lengths (first, middle, end)
    const handleFilterSubmission = (submission) => {
        setSubmittedFilters([...submittedFilters, {
            id: uniqueFilterID,
            filterName: submission.filterName 
        }]);

        uniqueFilterID.current = uniqueFilterID.current + 1;
    }

    const handleFilterRemoval = (selection) => {        
        uniqueFilterID.current = uniqueFilterID.current - 1;
        setSubmittedFilters(submittedFilters.filter(elementOfFiltersArray => elementOfFiltersArray.filterName !== selection));
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