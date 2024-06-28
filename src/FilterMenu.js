import "./FilterSpecialty.css";
import { useState } from 'react';

function FilterMenu( { filterType, onFilterSubmit } ) {
    const [ userSelection, setUserSelection ] = useState("default - no filters selected");
    const sendSelectionToMainMenu = () => {
        onFilterSubmit(userSelection);
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
                        <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterSpecialtyInput" value="Specialty: None (exit)"/>
                        <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
                    </div>
                    <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>Select</button>
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
                    <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>Select</button>
                </div>
            );
        break;
        
        case "Area":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <p className="filterSpecialtyText">** TO DO ** INSERT AREA MAP</p>
                    <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>Select</button>
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
                    <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>Select</button>
                </div>
            );
        break;

        case "Keyword":
            return (
                <div id="filterSpecialtyWindow">
                    <p className="filterSpecialtyText">Select One</p>
                    <p className="filterSpecialtyText">** TO DO ** GET LIST OF KEYWORDS</p>
                    <button className="filterSelectBtn" onClick={sendSelectionToMainMenu}>Select</button>
                </div>
            );
        break;

        default:
            return (<>Default</>);
        break;
    }
}

export default FilterMenu;