import { useState } from 'react';
import './MenuFigure.css';
import filter_appointment from './sprint3/img/filter_appointment.png';
import filter_area from './sprint3/img/filter_area.png';
import filter_keyword from './sprint3/img/filter_keyword.png';
import filter_specialty from './sprint3/img/filter_specialty.png';
import filter_time from './sprint3/img/filter_time.png';

// global objects for styling - default border color (transp. with background color)
const DEFAULT_BORDER = {
    border: "2px solid #D9F0F1"
};

// global objects for styling - red border color
const RED_BORDER = {
    border: "2px solid red"
}

function MenuFigure( { handleOnClick, filterSelection, handleOnUndo } ) {
    const [ specialtyBorder, setSpecialtyBorder ] = useState(DEFAULT_BORDER);
    const [ appointmentBorder, setAppointmentBorder ] = useState(DEFAULT_BORDER);
    const [ timeBorder, setTimeBorder ] = useState(DEFAULT_BORDER);
    const [ areaBorder, setAreaBorder ] = useState(DEFAULT_BORDER);
    const [ keywordBorder, setKeywordBorder ] = useState(DEFAULT_BORDER);

    const handleSpecialty = () => {
        setSpecialtyBorder(RED_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        handleOnClick("Specialty");
    }

    const handleAppointment = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(RED_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        handleOnClick("Appointment");
    }

    const handleArea = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setAreaBorder(RED_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        handleOnClick("Area");
    }

    const handleTime = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setKeywordBorder(DEFAULT_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setTimeBorder(RED_BORDER);
        handleOnClick("Time");
    }

    const handleKeyword = () => {
        setSpecialtyBorder(DEFAULT_BORDER);
        setAppointmentBorder(DEFAULT_BORDER);
        setKeywordBorder(RED_BORDER);
        setAreaBorder(DEFAULT_BORDER);
        setTimeBorder(DEFAULT_BORDER);
        handleOnClick("Keyword");
    }

    const handleUndoButtonOnClick = () => {
        console.log("\nUndo button clicked\n");
        filterSelection = "";
        handleOnUndo();
    }

    // now build the UNDO, right now it undos the overlay but it 
    return (
        <div id="filterMenuRow">
            <div className="filterMenuColumn">
                <figure className="filterMenuButton" onClick={handleSpecialty} style={specialtyBorder}>
                    <img className="filterMenuButtonImg" src={filter_specialty} alt="Filter providers by their specialty" />
                    {filterSelection.startsWith("Specialty") ? <div className="filterMenuOverlay" onClick={handleUndoButtonOnClick}><p className="filterMenuOverlayText">Undo</p></div> : <></>}
                    <figcaption className="filterMenuButtonCaption">Specialty</figcaption>
                </figure>
                {filterSelection.startsWith("Specialty") ? <div className="filterMenuInfomatic"><p className="filterMenuInfomaticText">{filterSelection}</p></div> : <></>}
            </div>
            <div className="filterMenuColumn">
                <figure className="filterMenuButton" onClick={handleAppointment} style={appointmentBorder}>
                    <img className="filterMenuButtonImg" src={filter_appointment} alt="Filter providers by their appointment type" />
                    {filterSelection.startsWith("Appointment")? <div className="filterMenuOverlay" onClick={handleUndoButtonOnClick}><p className="filterMenuOverlayText">Undo</p></div> : <></>}
                    <figcaption className="filterMenuButtonCaption">Appointment</figcaption>
                </figure>
                {filterSelection.startsWith("Appointment") ? <div className="filterMenuInfomatic"><p className="filterMenuInfomaticText">{filterSelection}</p></div> : <></>}
            </div>
            <div className="filterMenuColumn">
                <figure className="filterMenuButton" onClick={handleTime} style={timeBorder}>
                    <img className="filterMenuButtonImg" src={filter_time} alt="Filter providers by their appointment time" />
                    {filterSelection.startsWith("Time") ? <div className="filterMenuOverlay" onClick={handleUndoButtonOnClick}><p className="filterMenuOverlayText">Undo</p></div> : <></>}
                    <figcaption className="filterMenuButtonCaption">Time</figcaption>
                </figure>
                {filterSelection.startsWith("Time") ? <div className="filterMenuInfomatic"><p className="filterMenuInfomaticText">{filterSelection}</p></div> : <></>}
            </div>
            <div className="filterMenuColumn">
                <figure className="filterMenuButton" onClick={handleArea} style={areaBorder}>
                    <img className="filterMenuButtonImg" src={filter_area} alt="Filter providers by their local area" />
                    {filterSelection.startsWith("Area") ? <div className="filterMenuOverlay" onClick={handleUndoButtonOnClick}><p className="filterMenuOverlayText">Undo</p></div> : <></>}
                    <figcaption className="filterMenuButtonCaption">Area</figcaption>
                </figure>
                {filterSelection.startsWith("Area") ? <div className="filterMenuInfomatic"><p className="filterMenuInfomaticText">{filterSelection}</p></div> : <></>}
            </div>
            <div className="filterMenuColumn">
                <figure className="filterMenuButton" onClick={handleKeyword} style={keywordBorder}>
                    <img className="filterMenuButtonImg" src={filter_keyword} alt="Filter providers by a keyword" />
                    {filterSelection.startsWith("Keyword") ? <div className="filterMenuOverlay" onClick={handleUndoButtonOnClick}><p className="filterMenuOverlayText">Undo</p></div> : <></>}
                    <figcaption className="filterMenuButtonCaption">Keyword</figcaption>
                </figure>
                {filterSelection.startsWith("Keyword") ? <div className="filterMenuInfomatic"><p className="filterMenuInfomaticText">{filterSelection}</p></div> : <></>}
            </div>
            
        </div>
    )
}

export default MenuFigure;