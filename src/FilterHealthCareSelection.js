import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import ReviewSelection from './ReviewSelection.js';
import ApplyFilterToProviders from './ApplyFilterToProviders.js';
import FilterMenu from './FilterMenu.js';

import filter_appointment from './sprint3/img/filter_appointment.png';
import filter_area from './sprint3/img/filter_area.png';
import filter_keyword from './sprint3/img/filter_keyword.png';
import filter_specialty from './sprint3/img/filter_specialty.png';
import filter_time from './sprint3/img/filter_time.png';

import './FilterHealthCareSelection.css';

// global objects for styling - default border color (transp. with background color)
const DEFAULT_BORDER = {
    border: "2px solid #D9F0F1"
};

// global objects for styling - red border color
const RED_BORDER = {
    border: "2px solid red"
}

// pass onClick functions as props to FilterMenu

function FilterHealthCareSelection() {
    const [ isFiltered, setIsFiltered ] = useState(false);
    const [ filterType, setFilterType ] = useState(undefined);
    const [ isFilterClicked, setIsFilterClicked ] = useState(false);
    const [ childStatus, setChildStatus ] = useState(false);
    const [ specialtyBorder, setSpecialtyBorder ] = useState(DEFAULT_BORDER);
    const [ appointmentBorder, setAppointmentBorder ] = useState(DEFAULT_BORDER);
    const [ timeBorder, setTimeBorder ] = useState(DEFAULT_BORDER);
    const [ areaBorder, setAreaBorder ] = useState(DEFAULT_BORDER);
    const [ keywordBorder, setKeywordBorder ] = useState(DEFAULT_BORDER);

    // acquiring data from previous page (insurance type & insurance name), and sanitizing that data for display on this page
    const location = useLocation(); 
    const listingToReview = location.state;

    const handleSpecialty = () => {
        setSpecialtyBorder(RED_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setIsFilterClicked(true);
        setFilterType("Specialty");
    }

    const handleAppointment = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(RED_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setIsFilterClicked(true);
        setFilterType("Appointment");
    }

    const handleTime = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setTimeBorder(RED_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setIsFilterClicked(true);
        setFilterType("Time");
    }

    const handleArea = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        setAreaBorder(RED_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setIsFilterClicked(true);
        setFilterType("Area");
    }

    const handleKeyword = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setKeywordBorder(RED_BORDER);
        setIsFilterClicked(true);
        setFilterType("Keyword");
    }

    return(
        <>
            <ReviewSelection insuranceType={listingToReview.insuranceType} insuranceName={listingToReview.insuranceName} healthCareCategory={listingToReview.healthCareCategory} />
            <div>
                <ApplyFilterToProviders isFiltered={isFiltered}/>
                <div id="filterMenuRow">
                    <figure className="filterMenuButton" onClick={handleSpecialty} style={specialtyBorder}>
                        <img className="filterMenuButtonImg" src={filter_specialty} alt="Filter providers by their specialty" />
                        <figcaption className="filterMenuButtonCaption">Specialty</figcaption>
                    </figure>
                    <figure className="filterMenuButton" onClick={handleAppointment} style={appointmentBorder}>
                        <img className="filterMenuButtonImg" src={filter_appointment} alt="Filter providers by their appointment type" />
                        <figcaption className="filterMenuButtonCaption">Appointment</figcaption>
                    </figure>
                    <figure className="filterMenuButton" onClick={handleTime} style={timeBorder}>
                        <img className="filterMenuButtonImg" src={filter_time} alt="Filter providers by their appointment time" />
                        <figcaption className="filterMenuButtonCaption">Time</figcaption>
                    </figure>
                    <figure className="filterMenuButton" onClick={handleArea} style={areaBorder}>
                        <img className="filterMenuButtonImg" src={filter_area} alt="Filter providers by their local area" />
                        <figcaption className="filterMenuButtonCaption">Area</figcaption>
                    </figure>
                    <figure className="filterMenuButton" onClick={handleKeyword} style={keywordBorder}>
                        <img className="filterMenuButtonImg" src={filter_keyword} alt="Filter providers by a keyword" />
                        <figcaption className="filterMenuButtonCaption">Keyword</figcaption>
                    </figure>
                </div>
                <div>
                    {isFilterClicked ? <FilterMenu filterType={filterType}/> : <></>}
                </div>
            </div>
        </>
        
    );
}

export default FilterHealthCareSelection;