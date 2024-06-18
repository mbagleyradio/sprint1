import './FilterSpecialty.css';

function FilterTime() {
    return (
        <div id="filterSpecialtyWindow">
            <p className="filterSpecialtyText">Select One</p>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="earlyMorningBtn" name="filterTimeInput" value="Early Morning"/>
                <label className="filterSpecialtyText" for="earlyMorningBtn">Early Morning, 5 AM - 8 AM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="morningBtn" name="filterTimeInput" value="Morning"/>
                <label className="filterSpecialtyText" for="morningBtn">Morning, 8 AM - 11 AM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="midDayBtn" name="filterTimeInput" value="Mid Day"/>
                <label className="filterSpecialtyText" for="midDayBtn">Mid Day, 11 AM - 2 PM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="afternoonBtn" name="filterTimeInput" value="Afternoon"/>
                <label className="filterSpecialtyText" for="afternoonBtn">Afternoon, 2 PM - 5 PM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="earlyEveBtn" name="filterTimeInput" value="Early Evening"/>
                <label className="filterSpecialtyText" for="earlyEveBtn">Early Evening, 5 PM - 8 PM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="eveBtn" name="filterTimeInput" value="Evening"/>
                <label className="filterSpecialtyText" for="eveBtn">Evening, 8 PM - 11 PM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="lateBtn" name="filterTimeInput" value="Late Nite"/>
                <label className="filterSpecialtyText" for="lateBtn">Late Nite, 11 PM - 2 AM</label>
            </div>
            <div>
                <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterTimeInput" value="None (exit)"/>
                <label className="filterSpecialtyText" for="noneBtn">None (exit)</label>
            </div>
            
        </div>
    );
}

export default FilterTime;