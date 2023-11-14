import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComInsurance.css';
function ComInsurance() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();

	const handleSubmit = () => {
        const cbData = [];
        switch(selection) {
            default:
            break;
        }
        //navigate("../contact-ins", {state: cbData});
	}

    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="comInsuranceSelections" id="comInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">AARP</option>
                    <option value="2">Aetna</option>
                    <option value="3">AmBetter</option>
                    <option value="4">Assurant</option>
                    <option value="5">AvMed Health Plans</option>
                    <option value="6">Beech Street</option>
                    <option value="7">Blue Cross Blue Shield Federal Employee Program</option>
                    <option value="8">Cigna HealthCare</option>
                    <option value="9">Community Care Network</option>
                    <option value="10">Corvel Group Health</option>
                    <option value="11">Dimension Health</option>
                    <option value="12">Evolutions Healthcare</option>
                    <option value="13">First Health Coventry Healthcare</option>
                    <option value="14">Florida Blue</option>
                    <option value="15">GEHA Health Plans</option>
                    <option value="16">Great West (a Cigna HealthCare Company)</option>
                    <option value="17">Health First Health Plans</option>
                    <option value="18">Humana</option>
                    <option value="19">Mail Handlers Benefit Plan (MBHP)</option>
                    <option value="20">Mega Life and Health Insurance</option>
                    <option value="21">MetLife</option>
                    <option value="22">Multiplan</option>
                    <option value="23">Neighborhood Health Plan</option>
                    <option value="24">Optum Healthcare</option>
                    <option value="25">Preferred Medical Plan (PMP)</option>
                    <option value="26">Private Healthcare Systems (PHS)</option>
                    <option value="27">UnitedHealthCare</option>
                    <option value="28">Wellcare</option>
                </select>
            </form>
        </div>
    );
}

export default ComInsurance;