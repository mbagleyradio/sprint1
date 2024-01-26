import './NotSureModal.css';
import ATC_Assistant from './sprint2/img/ATC Assistant 2.png';
function NotSureModal({ onSubmit, onClose }) {
    return (
        <div id="backgroundWithModalOpen">
            <div id="modalWindow">
                <div id="modalCloseButton">
                    <button id="closeBtn" onClick={() => onClose("Close button clicked in modal")}>Close</button>
                </div>
                <div id="modalContent">
                    <h1>This is the modal title</h1>
                    <img src={ATC_Assistant} alt="ATC Assistant"/><br/>
                    <button id="submitBtn" onClick={() => onSubmit("Submit button clicked in modal")}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;