import './NotSureModal.css';

function NotSureModal({ onSubmit, onCancel }) {
    return (
        <div id="backgroundWithModalOpen">
            <div id="modalWindow">
                <div id="modalContent">
                    <h1>This is the modal title</h1>
                    <button id="submitBtn" onClick={() => onSubmit("Submit button clicked in modal")}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;