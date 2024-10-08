import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

function ReviewSelection() {
    const submittedFilters = useRef([]); 
    let uniqueFilterID = useRef(0);
    let providers = [];

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
            filters: submittedFilters.current,
            numFilters: uniqueFilterID.current,
            providers: [...providers]
            
        }

        navigate("../display-list", {
            state: paramsForList
        })
    }

    const onProvidersArrayRetrieved = (data) => {
        providers = [...data].sort((a, b) => {
            let nameA = a["Name_of_Practice_Group_Locations"];
            let nameB = b["Name_of_Practice_Group_Locations"];
            
            // condition - nameA and nameB are null
            if (nameA === null && nameB === null) {
                return 0;
            } else if (nameA === null) {
            // condition - only nameA is null, but nameB exists
                return -1;
            } else if (nameB === null) {
            // condition - only nameB is null, but nameA exists
                return 1;
            } else if (nameA > nameB) {
            // condition - nameA is later alphabetically than nameB
                return 1;
            } else if (nameA <  nameB) {
            // condition - nameA is earlier alphabetically than nameB
                return -1;
            } else {
                return 0;
            }
        }); 
    }

    return (
        <div id="reviewSelectionScreen">
            <div id="reviewSelectionBanner">
                <img id="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div id="reviewSelectionWhiteBanner">
                    <p className="reviewSelectionText">TYPE: {listingToReview.insuranceType}</p>
                    <p className="reviewSelectionText">NAME: {listingToReview.insuranceName}</p>
                    <p className="reviewSelectionText">CATEGORY: {listingToReview.healthCareCategory}</p>
                </div>
            </div>
            <div id="filterHealthCareScreen">
                <FilterHealthCareSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} addFilters={handleFilterSubmission} collectedFilters={submittedFilters.current} removeFilters={handleFilterRemoval} onProvidersArrayRetrieved={onProvidersArrayRetrieved}/>
            </div>
            <div id="reviewListBtn">
                <button type="button" id="reviewSelectionBtn" onClick={handleReviewListClick}>REVIEW LIST</button>
            </div>
        </div>
        
    );
}

export default ReviewSelection;
