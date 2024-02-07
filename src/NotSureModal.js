import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './NotSureModal.css';
import ATC_Assistant from './sprint2/img/ATC Assistant 2.png';
import mic from './sprint2/img/mic.png';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function NotSureModal({ onAsk, onClose, onRecord, onStopRecord }) {
    // state hook that will toggle the "stop" button when the recording button (the mic) is clicked
    const [ isRecording, setIsRecording ] = useState(false);
    const [ keyboardInput, setKeyboardInput ] = useState("Enter text here...");

    // custom hook for recording speech and converting to text in React
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // style for when the stop button is visible
    const stopButtonVisible = {
        opacity: 100
    }

    // style for when the stop button is NOT visible
    const stopButtonHidden = {
        opacity: 0
    }

    const handleRecording = () => {
        onRecord("Record button clicked in modal");
        if (isRecording === false) {
            setIsRecording(true);
            SpeechRecognition.startListening();
        }
    }

    const handleStopRecording = () => {
        onStopRecord("The stop recording button has been clicked in modal");
        setIsRecording(false);
        SpeechRecognition.stopListening();
        //resetTranscript();
    }

    const handleCloseModal = () => {
        onClose("Close button clicked in modal");
        if (isRecording === true) {
            setIsRecording(false);
            SpeechRecognition.stopListening();
        }
    }

    const handleAsk = () => {
        onAsk("Ask button clicked in modal");
    }

    return (
        <div id="backgroundWithModalOpen">
            <div id="modalWindow">
                <div id="modalCloseButton">
                    <button id="closeBtn" onClick={handleCloseModal}>Close</button>
                </div>
                <div id="modalContent">
                    <div id="micAndTextBox">
                        <img id="startRecording" src={mic} onClick={handleRecording} alt="Click this button to speak to the chat assistant with your device's microphone"/>
                        <p id="stopRecording" style={isRecording ? stopButtonVisible : stopButtonHidden} onClick={handleStopRecording}>&#x23f9;</p>
                        <textarea id="chatWindow" name="chatWindow" rows="4" cols="64" placeholder="Enter text here...">{listening ? transcript : keyboardInput}</textarea>
                    </div>
                    <p>{transcript}</p>
                    <img src={ATC_Assistant} alt="ATC Assistant"/><br/>
                    <button id="submitBtn" onClick={handleAsk}>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;