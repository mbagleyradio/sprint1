import { useState, useEffect, useRef } from 'react';
import './HealthcareYesModal.css';
import share from './sprint4/img/share.png';
import emailjs from '@emailjs/browser';

export default function HealthcareYesModal({healthcareModalOpen, handleHealthcareModalClose}) {
    const [ userPrompt, setUserPrompt ] = useState({name: "", email: "", phone: ""});
    const healthcareModalRef = useRef();

    // function for checking if the modal ref does not contain the event target ... ergo, the user has clicked outside the modal
    const checkHealthcareModalClickOutside = (event) => {
        if (healthcareModalOpen && healthcareModalRef.current && !healthcareModalRef.current.contains(event.target)) {
            handleHealthcareModalClose();
        }
    }

    const handleHealthcareModalChange = (e) => {
        const { name, value } = e.target;
       
        setUserPrompt(prevState => ({
            ...prevState,
            [name]: value
        })); 
    }

    const handleEmailFromHealthcareModal = (e) => {
        e.preventDefault();
        fetch("http://uvcsandbox.com/php/EmailJS.php", {
            method: "GET",
            mode: "cors",
            headers: {}
        }).then(response => { 
            return response.json()
        }).then(data => {
            // need to pull from the inner objects (contact info and insurance)
            emailjs.send("service_unhpfsm","template_frqcrni",{
                userName: userPrompt.name,
                userInsuranceContext: "This user has no insurance",
                userInsurance: "This user has no insurance",
                userEmail: userPrompt.email,
                userPhone: userPrompt.phone
                },  data[0].VALUE);
        }).catch(error => {
            console.log(error)
        });

        handleHealthcareModalClose();
    }

    // effect hook called on modalOpen state changes, that will add/remove an event listener for mouseclicks. This event listener is passed the checkClickOutside callback
    useEffect(() => {
        document.addEventListener('mousedown', checkHealthcareModalClickOutside);
        return () => document.removeEventListener('mousedown', checkHealthcareModalClickOutside);
    }, [healthcareModalOpen]);

    return (
        <div id="windowWithHealthcareModal">
            <div id="healthcareModal" ref={healthcareModalRef}>
                <div id="healthcareModalContents">
                    <p>Enter your name and email address or mobile number and a Healthcare Exchange Navigator will contact you.</p>
                    <p>Navigators are not salespeople they are only here to help.</p>
                    <form>
                        <div className="healthcareModalInput">
                            <label>Name:</label>
                            <input name="name" type="text" value={userPrompt.name} onChange={handleHealthcareModalChange}/>
                        </div>
                        <div>
                            <label>Email Address:</label>
                            <input name="email" type="text" value={userPrompt.email} onChange={handleHealthcareModalChange}/>
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input name="phone" type="text" value={userPrompt.phone} onChange={handleHealthcareModalChange}/>
                        </div>
                        <img src={share} onClick={handleEmailFromHealthcareModal} alt="email button"/>
                    </form>
                </div>
                
            </div>
        </div>
    );
}