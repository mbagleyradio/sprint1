import { useLocation } from 'react-router-dom';
import ReviewSelection from './ReviewSelection.js';
import './FilterHealthCareSelection.css';
function FilterHealthCareSelection() {
    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;
    
    return(
        <>
            <ReviewSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} />
            <div id="numberOfProviders">
                <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber"> 2 </span> possible health providers</p>
                <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
            </div>
        </>
        
    );
}

export default FilterHealthCareSelection;