import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function PopupI(/*props*/) {
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");
    const location = useLocation();
    const cbData = location.state;

    const user = {
        name: "",
        insurance: "",
        phoneNumber: "",
        email: ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        user.insurance = cbData;
        user.name = name;
        user.phoneNumber = phoneNumber;
        user.email = email; 

        // need to pull from the inner objects (contact info and insurance)
        emailjs.send("service_m1jpu3c","template_frqcrni",{
            userName: user.name,
            userInsurance: user.insurance,
            userEmail: user.email,
            userPhone: user.phoneNumber
        },  'En_CwK8mACVmRtAka');
    }
        
        /*
        const userData = [insurance, name, phoneNumber, email];
        const response = await fetch("http://localhost:3000/storeContact", {
            method: "PUT",
            body: JSON.stringify(userData);
        });

        */
    
    return (
        <form onSubmit={handleSubmit}>
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