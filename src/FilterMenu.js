import "./FilterSpecialty.css";
import "./FilterMenu_Area.css";
import { useState } from 'react';
import buttonLowerKeys from './sprint3/img/button_lower-keys.png';
import buttonMiddleKeys from './sprint3/img/button_middle-keys.png';
import buttonUpperKeys from './sprint3/img/button_upper-keys.png';

const areaButtonTrimOnClick = {
    border: "3px solid red"
}

const areaButtonTrimKeyWest = {
    border: "1px solid #c10606"
}

const areaButtonTrimMarathon = {
    border: "1px solid #004600"
}

const areaButtonTrimTavernier = {
    border: "1px solid #283e68"
}

const areaButtonTrimNone = {
    border: "1px solid #000"
}

const mapButtonsTrim = {
    border: "none"
}

function FilterMenu( { filterType, onFilterSubmit } ) {
    const [ userSelection, setUserSelection ] = useState("default - no filters selected");
    const [ areaBtnNoneStyle, setAreaBtnNoneStyle ] = useState(areaButtonTrimNone);
    const [ areaBtnKeyWestStyle, setAreaBtnKeyWestStyle ] = useState(areaButtonTrimKeyWest);
    const [ areaBtnMarathonStyle, setAreaBtnMarathonStyle ] = useState(areaButtonTrimMarathon);
    const [ areaBtnTavernierStyle, setAreaBtnTavernierStyle ] = useState(areaButtonTrimTavernier);
    const [ areaBtnKeyLargoStyle, setAreaBtnKeyLargoStyle ] = useState(areaButtonTrimTavernier);
    const [ mapBtnLowerKeysStyle, setMapBtnLowerKeysStyle ] = useState(mapButtonsTrim);
    const [ mapBtnMiddleKeysStyle, setMapBtnMiddleKeysStyle ] = useState(mapButtonsTrim);
    const [ mapBtnUpperKeysStyle, setMapBtnUpperKeysStyle ] = useState(mapButtonsTrim);
    
    const sendSelectionToMainMenu = () => {
        onFilterSubmit(userSelection);
    }

    const handleAreaButtons = (areaBtnSelection) => {
        switch (areaBtnSelection) {
            case "Area: None":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimOnClick);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Key West":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimOnClick);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Marathon":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimOnClick);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Tavernier":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimOnClick);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Key Largo":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimOnClick);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Lower Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(areaButtonTrimOnClick);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Middle Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(areaButtonTrimOnClick);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
            break;

            case "Area: Upper Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(areaButtonTrimOnClick);
            break;

            default:
                setUserSelection("Default");
            break;
        }
    }

    switch (filterType) {
        case "Specialty":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="pediatricsBtn" name="filterSpecialtyInput" value="Specialty: Pediatrics" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="pediatricsBtn">Pediatrics</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="geriatricsBtn" name="filterSpecialtyInput" value="Specialty: Geriatrics" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="geriatricsBtn">Geriatrics</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="internalBtn" name="filterSpecialtyInput" value="Specialty: Internal Medicine" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="internalBtn">Internal Medicine</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="fracturesBtn" name="filterSpecialtyInput" value="Specialty: Fractures" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="fracturesBtn">Fractures</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterSpecialtyInput" value="Specialty: None (exit)" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
                    </div>
                    <div className="filterSelectButtonContainer">
                        <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                    </div>
                </div>
            );
        break;

        case "Appointment":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="scheduledBtn" name="filterAppointmentInput" value="Appointment: Scheduled Appt." onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="scheduledBtn">Scheduled Appt.</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="walkBtn" name="filterAppointmentInput" value="Appointment: Walk-in" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="walkBtn">Walk-in</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="telemedicineBtn" name="filterAppointmentInput" value="Appointment: Telemedicine" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="telemedicineBtn">Telemedicine</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="houseBtn" name="filterAppointmentInput" value="Appointment: House Calls" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="houseBtn">House Calls</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterAppointmentInput" value="Appointment: None (exit)" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
                    </div>
                    <div className="filterSelectButtonContainer">
                        <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                    </div>
                </div>
            );
        break;
        
        case "Area":
            return (
                <div id="filterAreaWindow">
                    <p id="filterAreaText" className="filterSpecialtyText">Select One</p>
                    <button className="areaBtn" id="areaBtnNone" style={areaBtnNoneStyle} value="Area: None" onClick={(e) => handleAreaButtons(e.target.value)}>None (exit)</button>
                    <button className="areaBtn" id="areaBtnKeyWest" style={areaBtnKeyWestStyle} value="Area: Key West" onClick={(e) => handleAreaButtons(e.target.value)}>Key West</button>
                    <button className="areaBtn" id="areaBtnMarathon" style={areaBtnMarathonStyle} value="Area: Marathon" onClick={(e) => handleAreaButtons(e.target.value)}>Marathon</button>
                    <button className="areaBtn" id="areaBtnTavernier" style={areaBtnTavernierStyle} value="Area: Tavernier" onClick={(e) => handleAreaButtons(e.target.value)}>Tavernier</button>
                    <button className="areaBtn" id="areaBtnKeyLargo" style={areaBtnKeyLargoStyle} value="Area: Key Largo" onClick={(e) => handleAreaButtons(e.target.value)}>Key Largo</button>
                    <img id="areaBtnLowerKeys" className="areaBtnImg" src={buttonLowerKeys} alt="lower keys" style={mapBtnLowerKeysStyle} value="Area: Lower Keys" onClick={(e) => handleAreaButtons(e.target.value)}/>
                    <img id="areaBtnMiddleKeys" className="areaBtnImg" src={buttonMiddleKeys} alt="middle keys" style={mapBtnMiddleKeysStyle} value="Area: Middle Keys" onClick={(e) => handleAreaButtons(e.target.value)}/>
                    <img id="areaBtnUpperKeys" className="areaBtnImg" src={buttonUpperKeys} alt="upper keys" style={mapBtnUpperKeysStyle} value="Area: Upper Keys" onClick={(e) => handleAreaButtons(e.target.value)}/>
                    <button id="areaSelect" className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                </div>
            );
        break;

        case "Time":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="earlyMorningBtn" name="filterTimeInput" value="Time: Early Morning" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="earlyMorningBtn">Early Morning, 5 AM - 8 AM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="morningBtn" name="filterTimeInput" value="Time: Morning" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="morningBtn">Morning, 8 AM - 11 AM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="midDayBtn" name="filterTimeInput" value="Time: Mid Day" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="midDayBtn">Mid Day, 11 AM - 2 PM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="afternoonBtn" name="filterTimeInput" value="Time: Afternoon" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="afternoonBtn">Afternoon, 2 PM - 5 PM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="earlyEveBtn" name="filterTimeInput" value="Time: Early Evening" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="earlyEveBtn">Early Evening, 5 PM - 8 PM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="eveBtn" name="filterTimeInput" value="Time: Evening" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="eveBtn">Evening, 8 PM - 11 PM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="lateBtn" name="filterTimeInput" value="Time: Late Nite" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="lateBtn">Late Nite, 11 PM - 2 AM</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterTimeInput" value="Time: None (exit)" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
                    </div>
                    <div className="filterSelectButtonContainer">
                        <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                    </div>
                </div>
            );
        break;

        case "Keyword":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordBtn1" name="filterKeywordInput" value="Keyword: #1" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordBtn1">Keyword #1</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordBtn2" name="filterKeywordInput" value="Keyword: #2" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordBtn2">Keyword #2</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordBtn3" name="filterKeywordInput" value="Keyword: #3" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordBtn3">Keyword #3</label>
                    </div>
                    <div className="filterSelectButtonContainer">
                        <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                    </div>
                </div>
            );
        break;

        default:
            return (<>Default</>);
        break;
    }
}

export default FilterMenu;