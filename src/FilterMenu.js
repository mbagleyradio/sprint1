import ApplyFilterToProviders from './ApplyFilterToProviders.js';
import filter_appointment from './sprint3/img/filter_appointment.png';
import filter_area from './sprint3/img/filter_area.png';
import filter_keyword from './sprint3/img/filter_keyword.png';
import filter_specialty from './sprint3/img/filter_specialty.png';
import filter_time from './sprint3/img/filter_time.png';
import { useState } from 'react';

function FilterMenu( { handleAppointment, handleArea, handleKeyword, handleSpecialty, handleTime } ) {
    const [ isFiltered, setIsFiltered ] = useState(false);
    
    return (
        <div>
            <ApplyFilterToProviders isFiltered={isFiltered}/>
            <div id="filterMenuRow">
                <figure className="filterMenuButton" onClick={handleSpecialty}>
                    <img className="filterMenuButtonImg" src={filter_specialty} alt="Filter providers by their specialty" />
                    <figcaption className="filterMenuButtonCaption">Specialty</figcaption>
                </figure>
                <figure className="filterMenuButton" onClick={handleAppointment}>
                    <img className="filterMenuButtonImg" src={filter_appointment} alt="Filter providers by their appointment type" />
                    <figcaption className="filterMenuButtonCaption">Appointment</figcaption>
                </figure>
                <figure className="filterMenuButton" onClick={handleTime}>
                    <img className="filterMenuButtonImg" src={filter_time} alt="Filter providers by their appointment time" />
                    <figcaption className="filterMenuButtonCaption">Time</figcaption>
                </figure>
                <figure className="filterMenuButton" onClick={handleArea}>
                    <img className="filterMenuButtonImg" src={filter_area} alt="Filter providers by their local area" />
                    <figcaption className="filterMenuButtonCaption">Area</figcaption>
                </figure>
                <figure className="filterMenuButton" onClick={handleKeyword}>
                    <img className="filterMenuButtonImg" src={filter_keyword} alt="Filter providers by a keyword" />
                    <figcaption className="filterMenuButtonCaption">Keyword</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default FilterMenu;