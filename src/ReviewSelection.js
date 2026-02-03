// THIS WILL NEED RE-FACTORING

import './ReviewSelection.css';
import FilterHealthCareSelection from './FilterHealthCareSelection.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import A2CLogo from './A2CLogo_150x150.png';

function ReviewSelection() {
    // rewrite this with state hooks
    const submittedFilters = useRef([]);
    const uniqueFilterID = useRef(0);
    // persist providers across renders so UI toggles don't clear the fetched list
    const providersRef = useRef([]);

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;
    const navigate = useNavigate();

    const handleFilterSubmission = (submission) => {
        // rewrite this with state hooks
        submittedFilters.current.push({
            id: uniqueFilterID,
            filterName: submission.filterName
        });

        uniqueFilterID.current = uniqueFilterID.current + 1;
    }

    const handleFilterRemoval = (selection) => {        
        // rewrite this with setState
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
        // rewrite this with state hooks
        const paramsForList = {
            insuranceType: listingToReview.insuranceType,
            insuranceName: listingToReview.insuranceName,
            healthCareCategory: listingToReview.healthCareCategory,
            filters: submittedFilters.current,
            numFilters: uniqueFilterID.current,
            providers: [...providersRef.current]
            
        }

        navigate("../display-list-all", {
            state: paramsForList
        })
    }

    // info popups state
    const [showReviewInfo, setShowReviewInfo] = useState(false);
    const [showShowAllInfo, setShowShowAllInfo] = useState(false);

    const toggleReviewInfo = () => setShowReviewInfo(prev => !prev);
    const toggleShowAllInfo = () => setShowShowAllInfo(prev => !prev);

    // refs for the popup/button wrappers so clicks outside can close the popups
    const reviewWrapRef = useRef(null);
    const showAllWrapRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showReviewInfo && reviewWrapRef.current && !reviewWrapRef.current.contains(e.target)) {
                setShowReviewInfo(false);
            }
            if (showShowAllInfo && showAllWrapRef.current && !showAllWrapRef.current.contains(e.target)) {
                setShowShowAllInfo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showReviewInfo, showShowAllInfo]);

    const handleShowAllProviders = () => {
        const paramsForList = {
            insuranceType: listingToReview.insuranceType,
            insuranceName: listingToReview.insuranceName,
            healthCareCategory: listingToReview.healthCareCategory,
            filters: [],
            numFilters: 0,
            providers: [...providersRef.current]
        }

        navigate("../display-list", {
            state: paramsForList
        })
    }

    const onProvidersArrayRetrieved = (data) => {
        const sorted = [...data].sort((a, b) => {
            let nameA = a["name"];
            let nameB = b["name"];
            
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
        providersRef.current = sorted;
    }

    // there is a .current in the props of FilterHealthCareSelection here
    return (
        <div id="reviewSelectionScreen">
            <div className="reviewSelectionBanner">
                <img className="reviewSelectionLogo" src={A2CLogo} alt="Access 2 Care"/>
                <div className="reviewSelectionWhiteBanner">
                    <p className="reviewSelectionText">TYPE: {listingToReview.insuranceType}</p>
                    <p className="reviewSelectionText">NAME: {listingToReview.insuranceName}</p>
                    <p className="reviewSelectionText">CATEGORY: {listingToReview.healthCareCategory}</p>
                </div>
            </div>
            <div id="filterHealthCareScreen">
                <FilterHealthCareSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} addFilters={handleFilterSubmission} collectedFilters={submittedFilters.current} removeFilters={handleFilterRemoval} onProvidersArrayRetrieved={onProvidersArrayRetrieved}/>
            </div>
            <div id="reviewListBtn">
                <div className="btnWrap" ref={reviewWrapRef}>
                    <div className="btnRow">
                        <button type="button" id="reviewSelectionInfoBtn" className="infoBtn" onClick={toggleReviewInfo}>?</button>
                        <button type="button" id="reviewSelectionBtn" onClick={handleReviewListClick}>REVIEW LIST</button>
                    </div>
                    {showReviewInfo && <div id="reviewSelectionInfoPopup" className="infoPopup">Shows a detailed list of providers based on your selection.</div>}
                </div>

                <div className="btnWrap" ref={showAllWrapRef}>
                    <div className="btnRow">
                        <button type="button" id="showAllProvidersInfoBtn" className="infoBtn" onClick={toggleShowAllInfo}>?</button>
                        <button type="button" id="showAllProvidersBtn" onClick={handleShowAllProviders}>Show All Providers</button>
                    </div>
                    {showShowAllInfo && <div id="showAllProvidersInfoPopup" className="infoPopup">Shows all providers regardless of insurance.</div>}
                </div>
            </div>
        </div>
        
    );
}

export default ReviewSelection;
