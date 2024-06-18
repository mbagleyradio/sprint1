import './FilterSpecialty.css';

function FilterAppointment() {
    return (
        <div id="filterSpecialtyWindow">
            <p className="filterSpecialtyText">Select One</p>
            <div>
            <input className="filterSpecialtyBtn" type="radio" id="scheduledBtn" name="filterAppointmentInput" value="Scheduled Appt."/>
            <label className="filterSpecialtyText" for="scheduledBtn">Scheduled Appt.</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="walkBtn" name="filterAppointmentInput" value="Walk-in"/>
                <label className="filterSpecialtyText" for="walkBtn">Walk-in</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="telemedicineBtn" name="filterAppointmentInput" value="Telemedicine"/>
                <label className="filterSpecialtyText" for="telemedicineBtn">Telemedicine</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="houseBtn" name="filterAppointmentInput" value="House Calls"/>
                <label className="filterSpecialtyText" for="houseBtn">House Calls</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterAppointmentInput" value="None (exit)"/>
                <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
            </div>
        </div>
    );
}

export default FilterAppointment;