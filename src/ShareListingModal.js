/* 
* TO DO:
*   Send the listing to our PHP back-end
*   Call the Twilio API from our PHP back-end
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

    const onSendArrowClick = () => {
        fetch("https://uvcsandbox.com/php/twilio-app/sendMMS.php", {
            method: "POST",
            mode: "cors",
            headers: {},
            body: JSON.stringify({
                screenshot,
                phoneNumber
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
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
                <input id="modalNumberInput" type="text" onChange={(e) => setPhoneNumber(e.target.value)}/>
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
