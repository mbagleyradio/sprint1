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
        NOT_LISTED: 5
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
            case selectionNames.NOT_LISTED:
                cbData = "Military: My insurance is not listed";
            break;
            default:
                cbData = "ERROR: default case triggered in Military.js";
            break;
        }
        navigate("../contact-ins", {state: cbData});
	}
    
    return (
        <div id="militaryInsuranceSelections">
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button><br/>
                <input value="1" type="radio" id="champus" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="champus">CHAMPUS</label><br/>
                <input value="2" type="radio" id="tricare" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="tricare">Tricare</label><br/>
                <input value="3" type="radio" id="tricare_for_life" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="tricare_for_life">Tricare for Life</label><br/>
                <input value="4" type="radio" id="tricare_prime" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="tricare_prime">Tricare Prime</label><br/>
                <input value="5" type="radio" id="not_listed" name="insGroup" onChange={e => {setSelection(Number(e.target.value))}}/>
                <label for="not_listed">My insurance is not listed</label><br/>
            </form>
        </div>
    );
}