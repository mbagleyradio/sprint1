import "./FilterSpecialty.css";

function FilterSpecialty() {
    return (
        <div id="filterSpecialtyWindow">
            <p className="filterSpecialtyText">Select One</p>
            <input className="filterSpecialtyBtn" type="radio" id="pediatricsBtn" name="filterSpecialtyInput" value="Pediatrics"/>
            <label className="filterSpecialtyText" for="pediatricsBtn">Pediatrics</label><br/>
            <input className="filterSpecialtyBtn" type="radio" id="geriatricsBtn" name="filterSpecialtyInput" value="Geriatrics"/>
            <label className="filterSpecialtyText" for="geriatricsBtn">Geriatrics</label><br/>
            <input className="filterSpecialtyBtn" type="radio" id="internalBtn" name="filterSpecialtyInput" value="Internal Medicine"/>
            <label className="filterSpecialtyText" for="internalBtn">Internal Medicine</label><br/>
            <input className="filterSpecialtyBtn" type="radio" id="fracturesBtn" name="filterSpecialtyInput" value="Fractures"/>
            <label className="filterSpecialtyText" for="fracturesBtn">Fractures</label><br/>
            <input className="filterSpecialtyBtn" type="radio" id="noneBtn" name="filterSpecialtyInput" value="None (exit)"/>
            <label className="filterSpecialtyText" for="noneBtn">None (exit)</label><br/>
        </div>
    );
}

export default FilterSpecialty;