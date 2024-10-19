/* 
*
* TO DO:
*   Send the listing to our PHP back-end
*       steps remaining: 
            generate a timestamp string HHMMSS
            generate a random number from 1-999, convert it to a three digit string (001, 010, 100, 999, etc)
            concatenate the timestamp and random number and name it "fileName"
            send that in the data packet
*   From the back-end, convert the base64 ("screenshot" in the data packet) to a PNG, save it as the "fileName" in an "images" sub-folder
*   Call the Twilio API from our PHP back-end
*   Write a script on the back-end that cleans the "images" sub-folder once a day
* 
*/


import { useState, useEffect, useRef } from 'react';
import './ShareListingModal.css';
import arrowUp from '../src/sprint4/img/arrow-up.png';

function ShareListingModal({ shareModalOpen, handleShareModalClose, screenshot }) {
    const [ phoneNumber, setPhoneNumber ] = useState(null);
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

    const onSendArrowClick = () => {
        let fileName = generateFileName();
        
        fetch("https://uvcsandbox.com/php/twilio-app/sendMMS.php", {
            method: "POST",
            mode: "cors",
            headers: {},
            body: JSON.stringify({
                screenshot,
                phoneNumber,
                fileName
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            onResponseReceived(data);
        }).catch(error => {
            console.log(error)
        }); 
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
            {screenshot && <div id="listingScreenshotDisplay">
                <img className="screenshotIMG" src={screenshot} alt="screenshot of the listing you want to share"/>
            </div>}
        </div>
    </div>            
    );
}

export default ShareListingModal;
