import './NotSureModal.css';
import ATC_Assistant from './sprint2/img/ATC Assistant 2.png';
import mic from './sprint2/img/mic.png';

function NotSureModal({ onSubmit, onClose }) {
    return (
        <div id="backgroundWithModalOpen">
            <div id="modalWindow">
                <div id="modalCloseButton">
                    <img id="mic" src={mic} alt="Click this button to speak to the chat assistant with your device's microphone"/>
                    <button id="closeBtn" onClick={() => onClose("Close button clicked in modal")}>Close</button>
                </div>
                <div id="modalContent">
                    <label for="chatWindow">Chat Window</label>
                    <textarea id="chatWindow" name="chatWindow" rows="4" cols="64" placeholder="Enter text here..."></textarea>
                    <img src={ATC_Assistant} alt="ATC Assistant"/><br/>
                    <button id="submitBtn" onClick={() => onSubmit("Submit button clicked in modal")}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;