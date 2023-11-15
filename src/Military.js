import './Military.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Military() {
    const [selection, setSelection] = useState(0);
    const navigate = useNavigate();
    const selectionNames = {
        CHAMPUS: 1,
		TRICARE: 2,
		TRICARE_FOR_LIFE: 3,
        TRICARE_PRIME: 4,
    }
	const handleSubmit = (e) => {
        e.preventDefault();
        let cbData = "";
        switch(Number(selection)) {
            case selectionNames.CHAMPUS:
                cbData = "Military: CHAMPUS";
            break;
            case selectionNames.TRICARE:
                cbData = "Military: Tricare";
            break;
            case selectionNames.TRICARE_FOR_LIFE:
                cbData = "Military: Tricare for Life";
            break;
            case selectionNames.TRICARE_PRIME:
                cbData = "Military: Tricare Prime";
            break;
            default:
                cbData = "ERROR: default case triggered in Military.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
	}
    
    return (
        <div id="hasInsurance">
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
                <select value={selection} name="militaryInsuranceSelections" id="militaryInsuranceSelections" size="8" onChange={e => {setSelection(Number(e.target.value))}}>
                    <option value="1">CHAMPUS</option>
                    <option value="2">Tricare</option>
                    <option value="3">Tricare for Life</option>
                    <option value="4">Tricare Prime</option>
                </select>
            </form>
        </div>
    );
}