/*
* NEED TO REWRITE VALUES IN UI ... FIGURE OUT HOW TO FILTER PROVIDERS WHERE IT'S ONLY THE ONES WHO EQUAL THE FILTER CONDITIONS.
* MAYBE PASS THE FILTER CONDITIONS UP TO FILTERHEALTHCARESELECTION/REVIEWLISTING?
*/

import "./FilterSpecialty.css";
import "./FilterMenu_Area.css";
import { useState } from 'react';
import buttonLowerKeys from './sprint3/img/button_lower-keys.png';
import buttonMiddleKeys from './sprint3/img/button_middle-keys.png';
import buttonUpperKeys from './sprint3/img/button_upper-keys.png';

function FilterMenu( { filterType, onFilterSubmit, specialtyAreas, keywords } ) {
    const [ userSelection, setUserSelection ] = useState("default - no filters selected");
    const [ mapBtnSelectMsg, setMapBtnSelectMsg ] = useState(null);
    const sendSelectionToMainMenu = () => {
        onFilterSubmit(userSelection);
    }

    const handleAreaButtons = (areaBtnSelection) => {
        switch (areaBtnSelection) {
            case "Area: None":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Key West":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Marathon":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Tavernier":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Key Largo":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg(null);
            break;

            case "Area: Lower Keys":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg("Lower keys selected");
                console.log("Lower keys clicked and style changed")
            break;

            case "Area: Middle Keys":
                setUserSelection(areaBtnSelection);
                setMapBtnSelectMsg("Middle keys selected");
            break;

            case "Area: Upper Keys":
                setUserSelection(areaBtnSelection);
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
                    {
                        (specialtyAreas.length > 0) &&
                        specialtyAreas.map((element, key) => {
                            return <div>
                                <input className="filterSpecialtyBtn" type="radio" id={`specialtyBtn${key}`} value={`Specialty: ${element}`} onClick={(e) => setUserSelection(e.target.value)}/>
                                <label className="filterSpecialtyText" for={`specialtyBtn${key}`}>{element}</label>
                            </div>
                        })
                    }
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
                    <button className="areaBtn" id="areaBtnNone" value="Area: None" onClick={(e) => handleAreaButtons(e.target.value)}>None (exit)</button>
                    <button className="areaBtn" id="areaBtnKeyWest" value="Area: Key West" onClick={(e) => handleAreaButtons(e.target.value)}>Key West</button>
                    <button className="areaBtn" id="areaBtnMarathon" value="Area: Marathon" onClick={(e) => handleAreaButtons(e.target.value)}>Marathon</button>
                    <button className="areaBtn" id="areaBtnTavernier" value="Area: Tavernier" onClick={(e) => handleAreaButtons(e.target.value)}>Tavernier</button>
                    <button className="areaBtn" id="areaBtnKeyLargo" value="Area: Key Largo" onClick={(e) => handleAreaButtons(e.target.value)}>Key Largo</button>
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
            if (keywords.length > 0) {
                return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <div>
                    {
                        keywords.map((element, key) => {
                            return <div>
                                <input className="filterSpecialtyBtn" type="radio" id={`keyword${key}`} name="filterKeywordInput" value={`Keyword: ${element}`} onClick={(e) => setUserSelection(e.target.value)}/>
                                <label className="filterSpecialtyText" for={`keyword${key}`}>{element}</label>
                            </div>
                        })
                    }
                    </div>
                    <div className="filterSelectButtonContainer">
                        <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>SELECT</button>
                    </div>
                </div>
            ); 
        } else {
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Loading...</p>
                </div>
            )
        }
        break;

        default:
            return (<>Default</>);
        break;
    }
}

export default FilterMenu;