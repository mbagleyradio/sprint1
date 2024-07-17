import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

function ReviewSelection() {
    const submittedFilters = useRef([]); 
    let uniqueFilterID = useRef(0);

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;
    const navigate = useNavigate();

    const handleFilterSubmission = (submission) => {
        submittedFilters.current.push({
            id: uniqueFilterID,
            filterName: submission.filterName
        });

        uniqueFilterID.current = uniqueFilterID.current + 1;
    }

    const handleFilterRemoval = (selection) => {        
        
        if (selection === submittedFilters.current[0].filterName) {
            // if the first menu selection gets undone, wipe the whole query
            submittedFilters.current = submittedFilters.current.filter(elementOfFiltersArray => elementOfFiltersArray.filterName === "");
            uniqueFilterID.current = 0;
        } else {
            // if any subsequent menu selections get undone, wipe that query and THE REST OF THE QUERY AFTER IT
            let sliceIndex = submittedFilters.current.findIndex(elementOfFiltersArray => elementOfFiltersArray.filterName === selection);
            submittedFilters.current = submittedFilters.current.slice(0, sliceIndex);
            uniqueFilterID.current = sliceIndex;
        }
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
                <FilterHealthCareSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} addFilters={handleFilterSubmission} collectedFilters={submittedFilters.current} removeFilters={handleFilterRemoval}/>
            </div>
            <div id="reviewListBtn">
                <button type="button" id="reviewSelectionBtn" onClick={handleReviewListClick}>REVIEW LIST</button>
            </div>
        </div>
        
    );
}

export default ReviewSelection;