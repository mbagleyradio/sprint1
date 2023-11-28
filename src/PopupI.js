import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Popup.css';

function PopupI(/*props*/) {
    const messageStr = "As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.";
    const finishedStr = "Your info has been sent. Someone will get back to you shortly.";
    const [ message, setMessage ] = useState(messageStr);
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
        
        if (message === messageStr) {
            setMessage(finishedStr);
        } else if (message === finishedStr) {
            setMessage(messageStr);
        }

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
    
    return (
        <form id="formDisplay" onSubmit={handleSubmit}>
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
            <p>{message}</p>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default PopupI;