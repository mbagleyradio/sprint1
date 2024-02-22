import { useLocation } from 'react-router-dom';

function ReviewListing() {
    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;

    return(
        <div>
            <h1>Review Listing</h1>
            <p>{listingToReview.insuranceType}</p>
            <p>{listingToReview.insuranceName}</p>
            <p>{listingToReview.healthCareCategory}</p>
        </div>
    );
}

export default ReviewListing;