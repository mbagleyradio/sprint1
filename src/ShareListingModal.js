/* 
* TO DO:
*   Call the Twilio API from our PHP back-end
*/

import { useState, useEffect, useRef } from 'react';
import './ShareListingModal.css';
import arrowUp from '../src/sprint4/img/arrow-up.png';

function ShareListingModal({ shareModalOpen, handleShareModalClose, screenshot }) {
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ consent, setConsent ] = useState(false);
    const shareModalRef = useRef();

    // function for checking if the modal ref does not contain the event target ... ergo, the user has clicked outside the modal
    const checkShareModalClickOutside = (event) => {
        if (shareModalOpen && shareModalRef.current && !shareModalRef.current.contains(event.target)) {
            handleShareModalClose();
        }
    }

    const generateFileName = () => {
        const dateAndTime = new Date();
        const hours = dateAndTime.getHours();
        const minutes = dateAndTime.getMinutes();
        const seconds = dateAndTime.getSeconds();
        let random =  Math.floor(Math.random() * 1000);
        if (random === 0) {
            random = 1;
        }

        const fileName = `${hours}${minutes}${seconds}${random}`
        
        return fileName;
    }

    const onResponseReceived = (data) => {
        console.log(data["error"]);
        if (data["error"] !== null) {
            alert(data["error"]);
            setPhoneNumber((prev) => {return ""});
        } else {
            alert("Your message has been sent successfully!");
            setPhoneNumber((prev) => {return ""});
            handleShareModalClose();
        }
    }

    const validatePhoneNumber = () => {
        let copyOfPhoneNumber = phoneNumber;
        if (copyOfPhoneNumber.length < 9 || copyOfPhoneNumber.length > 15) {
            return "invalid length";
        } else {
            const sanitizedString = copyOfPhoneNumber.replace(/\D/g, "");
            if (sanitizedString.length === 10 && sanitizedString.indexOf("0") !== 0) {
                // sanitized format: 1234567890 (area code + local number)
                return `+1${sanitizedString}`;
            } else if (sanitizedString.length === 11 && sanitizedString.indexOf("1") === 0) {
                // sanitized format: 11234567890 (country code + area code + local number)
                return `+${sanitizedString}`;
            } else if (sanitizedString.indexOf("0") === 0) {
                // the sanitized format begins with 0, which is invalid as a country code
                return "starts with zero";
            } else {
                // the sanitized format is too long to be a valid US phone number
                return "invalid length";
            }
        }
    }

    const handleConsent = () => {
        setConsent((prev) => {return !prev});
    }

    const onSendArrowClick = () => {
        console.log(consent);
        const fileName = generateFileName();
        const validatedNumber = validatePhoneNumber();
        if (consent === true && validatedNumber !== "starts with zero" && validatedNumber !== "invalid length") {
            
            fetch("https://uvcsandbox.com/php/twilio-app/sendMMS.php", {
                method: "POST",
                mode: "cors",
                headers: {},
                body: JSON.stringify({
                    screenshot,
                    validatedNumber,
                    fileName
                })
            }).then(response => {
                return response.json()
            }).then(data => {
                onResponseReceived(data);
            }).catch(error => {
                console.log(error)
            });
            
        } else if (consent === false) {
            alert(`Sorry! You did not agree to opt-in to the service. Please check the opt-in box if you would like to send a screenshot of this listing to your US cell phone.`);
            
        } else {
            alert(`Sorry! Your phone number ${phoneNumber} is not valid! Please enter a valid 3 digit area code, and 7 digit local number`);
        }
    }

    // effect hook called on modalOpen state changes, that will add/remove an event listener for mouseclicks. This event listener is passed the checkClickOutside callback
    useEffect(() => {
        document.addEventListener('mousedown', checkShareModalClickOutside);
        return () => document.removeEventListener('mousedown', checkShareModalClickOutside);
    }, [shareModalOpen]);

    return (
    <div id="windowWithModal">
        <div id="modal" ref={shareModalRef}>
            <div id="modalHeader">
                <p id="modalHeaderText">New Message</p>
                <button id="modalCancel" onClick={handleShareModalClose}>Cancel</button>
            </div>
            <div id="modalTo">
                <label id="modalToLabel">To: </label>
                <input id="modalNumberInput" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                {
                    phoneNumber ? <div id="unicodeBG"><img src={arrowUp} alt="arrow up" onClick={onSendArrowClick}/></div> : <></>
                }
            </div>
            <div id="modalConsent">
                <label for="modalCheckboxInput">As part of our service, we offer the ability to message screenshots of a selected healthcare listing to your (US) cell phone. Message & data rates may apply. Please check this box if you would like to opt-in to this service.</label>
                <input id="modalCheckboxInput" type="checkbox" onChange={handleConsent}/>
            </div>
            {screenshot && <div id="listingScreenshotDisplay">
                <img className="screenshotIMG" src={screenshot} alt="screenshot of the listing you want to share"/>
            </div>}
        </div>
    </div>            
    );
}

export default ShareListingModal;
