import { useLocation } from 'react-router-dom';

import ReviewSelection from './ReviewSelection.js';
import FilterMenu from './FilterMenu.js';
import './FilterHealthCareSelection.css';

// pass onClick functions as props to FilterMenu

function FilterHealthCareSelection() {
    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;

    const handleSpecialty = () => {

    }

    const handleAppointment = () => {

    }

    const handleTime = () => {

    }

    const handleArea = () => {

    }

    const handleKeyword = () => {

    }

    return(
        <>
            <ReviewSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} />
            <FilterMenu onAppointmentClick={handleAppointment} onAreaClick={handleArea} onTimeClick={handleTime} onKeywordClick={handleKeyword} onSpecialtyClick={handleSpecialty} />
        </>
        
    );
}

export default FilterHealthCareSelection;