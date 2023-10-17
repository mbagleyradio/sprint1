import './HasInsurance.css';

function HasInsurance() {
    return (
    <div id="hasInsurance">
        <div class="checkbox-container">
            <input type="checkbox" id="cb1"/>
            <label for="cb1">Multiplan</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb2"/>
            <label for="cb2">Neighborhood Health Plan</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb3"/>
            <label for="cb3">Optum Healthcare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb4"/>
            <label for="cb4">Preferred Medical Plan (PMP)</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb5"/>
            <label for="cb5">Private Healthcare Systems (PHS)</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb6"/>
            <label for="cb6">UnitedHealthCare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb7"/>
            <label for="cb7">Wellcare</label>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="cb8"/>
            <label for="cb8">My insurance is not listed</label>
        </div>
    </div>
    );
}

export default HasInsurance;