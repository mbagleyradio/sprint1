import HandleInfo from './handleInfo.js';
import { useState } from 'react';

function PopupNoI(/*props*/) {
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");

    const handleSubmit = () => {
        
        //HandleInfo.storeForm([name, phoneNumber, email]);
    }
    return (
        <form /*onSubmit={() => handleSubmit()}*/>
            <label>
                Your Name: 
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Your Phone Number: 
                <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </label>
            <label>
                Your Email: 
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <p>As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.</p>
            <input type="button" value="Submit" onClick={()=> HandleInfo.storeForm([name, phoneNumber, email])}/>
        </form>
    );
}

export default PopupNoI;