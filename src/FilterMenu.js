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

const mapButtonsTrimNone = {
    border: "none"
}

const mapButtonsTrim = {
    backgroundColor: "red"
}

function FilterMenu( { filterType, onFilterSubmit } ) {
    const [ userSelection, setUserSelection ] = useState("default - no filters selected");
    const [ areaBtnNoneStyle, setAreaBtnNoneStyle ] = useState(areaButtonTrimNone);
    const [ areaBtnKeyWestStyle, setAreaBtnKeyWestStyle ] = useState(areaButtonTrimKeyWest);
    const [ areaBtnMarathonStyle, setAreaBtnMarathonStyle ] = useState(areaButtonTrimMarathon);
    const [ areaBtnTavernierStyle, setAreaBtnTavernierStyle ] = useState(areaButtonTrimTavernier);
    const [ areaBtnKeyLargoStyle, setAreaBtnKeyLargoStyle ] = useState(areaButtonTrimTavernier);
    const [ mapBtnLowerKeysStyle, setMapBtnLowerKeysStyle ] = useState(mapButtonsTrimNone);
    const [ mapBtnMiddleKeysStyle, setMapBtnMiddleKeysStyle ] = useState(mapButtonsTrimNone);
    const [ mapBtnUpperKeysStyle, setMapBtnUpperKeysStyle ] = useState(mapButtonsTrimNone);
    const [ mapBtnSelectMsg, setMapBtnSelectMsg ] = useState(null);
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
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Key West":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimOnClick);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Marathon":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimOnClick);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Tavernier":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimOnClick);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Key Largo":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimOnClick);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Lower Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrim);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg("Lower keys selected");
                console.log("Lower keys clicked and style changed")
            break;

            case "Area: Middle Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrim);
                setMapBtnUpperKeysStyle(mapButtonsTrimNone);
                setMapBtnSelectMsg("Middle keys selected");
            break;

            case "Area: Upper Keys":
                setUserSelection(areaBtnSelection);
                setAreaBtnNoneStyle(areaButtonTrimNone);
                setAreaBtnKeyWestStyle(areaButtonTrimKeyWest);
                setAreaBtnMarathonStyle(areaButtonTrimMarathon);
                setAreaBtnTavernierStyle(areaButtonTrimTavernier);
                setAreaBtnKeyLargoStyle(areaButtonTrimTavernier);
                setMapBtnLowerKeysStyle(mapButtonsTrimNone);
                setMapBtnMiddleKeysStyle(mapButtonsTrimNone);
                setMapBtnUpperKeysStyle(mapButtonsTrim);
                setMapBtnSelectMsg("Upper keys selected");
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
                    <img id="areaBtnLowerKeys" className="areaBtnImg" src={buttonLowerKeys} alt="lower keys" onClick={(e) => handleAreaButtons("Area: Lower Keys")}/>
                    <img id="areaBtnMiddleKeys" className="areaBtnImg" src={buttonMiddleKeys} alt="middle keys" onClick={(e) => handleAreaButtons("Area: Middle Keys")}/>
                    <img id="areaBtnUpperKeys" className="areaBtnImg" src={buttonUpperKeys} alt="upper keys" onClick={(e) => handleAreaButtons("Area: Upper Keys")}/>
                    <p id="mapBtnSelectedMsg">{mapBtnSelectMsg}</p>
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
                        <input className="filterSpecialtyBtn" type="radio" id="keywordSportsMed" name="filterKeywordInput" value="Keyword: Sports Medicine" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordSportsMed">Sports Medicine</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordPediatrics" name="filterKeywordInput" value="Keyword: Pediatrics" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordPediatrics">Pediatrics</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordSeniors" name="filterKeywordInput" value="Keyword: Senior Adults" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordSeniors">Senior Adults</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordKneeHip" name="filterKeywordInput" value="Keyword: Knee & Hip" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordKneeHip">Knee & Hip</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordNeckShoulder" name="filterKeywordInput" value="Keyword: Neck & Shoulder" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordNeckShoulder">Neck & Shoulder</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordHandsWristsElbows" name="filterKeywordInput" value="Keyword: Hands Wrists & Elbows" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordHandsWristsElbows">Hands, Wrists & Elbows</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordFootAnkle" name="filterKeywordInput" value="Keyword: Foot & Ankle" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordFootAnkle">Foot & Ankle</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordArthritis" name="filterKeywordInput" value="Keyword: Arthritis" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordArthritis">Arthritis</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordPhysical" name="filterKeywordInput" value="Keyword: Physical Therapy" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordPhysical">Physical Therapy</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordWomen" name="filterKeywordInput" value="Keyword: Women's Care" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordWomen">Women's Care</label>
                    </div>
                    <div>
                        <input className="filterSpecialtyBtn" type="radio" id="keywordDiagnostic" name="filterKeywordInput" value="Keyword: Diagnostic" onClick={(e) => setUserSelection(e.target.value)}/>
                        <label className="filterSpecialtyText" for="keywordDiagnostic">Diagnostic</label>
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