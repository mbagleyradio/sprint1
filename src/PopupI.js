import HandleInfo from './handleInfo.js';
import { useState } from 'react';
function PopupI(/*props*/) {
    const [ insurance, setInsurance ] = useState("");
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");

    const handleSubmit = () => {
        HandleInfo.formData([insurance, name, phoneNumber, email]);
    }
    
    return (
        <form onSubmit={() => handleSubmit()}>
            <label>
                Name of Your Insurance:
                <input type="text" name="insurance" onChange={(e) => setInsurance(e.target.value)}/>
            </label>
            <label>
                Your Name: 
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Your Phone Number: 
                <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                Your Email: 
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <p>As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.</p>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default PopupI;