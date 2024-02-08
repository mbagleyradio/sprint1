import './NotSureModal.css';
import ATC_Assistant from './sprint2/img/ATC Assistant 2.png';
import mic from './sprint2/img/mic.png';
import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function NotSureModal({ onAsk, onClose, onRecord, onStopRecord }) {
    // state hook that will toggle the "stop" button when the recording button (the mic) is clicked
    const [ isRecording, setIsRecording ] = useState(false);

    // state hook for the user's question in the text area, after speech-to-text and keyboard input have been used
    const [ userSubmission, setUserSubmission ] = useState("Enter text here...");

    // state hook for chatGPT answers
    const [ answer, setAnswer ] = useState(null);
    
    // state hook for the number of chatGPT questions + dependency for useEffect
    const [ remainingQuestions, setRemainingQuestions ] = useState(5);

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

    // effect hook for getting ChatGPT's questions/answers displayed in the modal 
    useEffect(() => {
        // 1. validate the user submission 
        // 2. sanitize the user submission
        // 3. send the user submission to ChatGPT's API
        // 4. receive ChatGPT's answer from ChatGPT's API
        // 5. display ChatGPT's answer in the <chatarea>
        // 6. 
    }, [remainingQuestions]);

    // handler that is called when the microphone "recording" button is clicked on
    const handleRecording = () => {
        onRecord("Record button clicked in modal");
        if (isRecording === false) {
            setIsRecording(true); // toggle the "stop recording" button. When we are recording, display it. Else, do not display it.
            SpeechRecognition.startListening(); 
        }
    }

    // handler that is called when the "stop" recording button is clicked on
    const handleStopRecording = () => {
        SpeechRecognition.stopListening();
        setUserSubmission(transcript);
        setIsRecording(false); // toggle the "stop recording" button. When we are recording, display it. Else, do not display it.
        onStopRecord("The stop recording button has been clicked in modal");
    }

    // handler that is called when the modal is closed
    const handleCloseModal = () => {
        // if the user is currently recording, stop the recording to avoid memory leaks, and stop displaying the "stop recording" button.
        if (isRecording === true) {
            SpeechRecognition.stopListening();
            setIsRecording(false);
        }
        onClose("Close button clicked in modal");
    }

    // handler that is called when the "Ask Assistant" button is clicked on.
    const handleAsk = () => {
        onAsk("Ask button clicked in modal");
        setRemainingQuestions(remainingQuestions - 1);
    }

    // JSX for the modal component
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
                        <textarea id="chatWindow" name="chatWindow" rows="4" cols="64" value={userSubmission} onChange={(e) => {setUserSubmission(e.target.value)}} />
                    </div>
                    <img src={ATC_Assistant} alt="ATC Assistant"/><br/>
                    <button id="submitBtn" onClick={handleAsk}>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;