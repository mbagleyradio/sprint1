import './NotSureModal.css';
import ATC_Assistant from './sprint2/img/ATC Assistant 2.png';
import mic from './sprint2/img/mic.png';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function NotSureModal({ onAsk, onClose, onRecord, onStopRecord }) {
    // state hook that will toggle the "stop" button when the recording button (the mic) is clicked
    const [ isRecording, setIsRecording ] = useState(false);

    // state hook for the user's question in the text area, after speech-to-text and keyboard input have been used
    const [ userSubmission, setUserSubmission ] = useState(null);

    // state hook for chatGPT answers
    const [ answer, setAnswer ] = useState(null);
    
    // state hook for the number of chatGPT questions + dependency for useEffect
    const [ remainingQuestions, setRemainingQuestions ] = useState(4);

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

    // url endpoint for ChatGPT
    const url = "https://api.openai.com/v1/chat/completions";
    
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

    const initiateUserSubmission = () => {
        fetch("http://uvcsandbox.com/php/OpenAI.php", {
            method: "GET",
            mode: "cors",
            headers: {}
        }).then(response => {
            return response.json()
        }).then(data => {
            sendUserSubmission(data[0].VALUE)
        }).catch(error => {
            console.log(error)
        });
    }

    const sendUserSubmission = (key) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                {
                    "role": "user",
                    "content": userSubmission
                },
                {
                    "role": "system",
                    "content": "Please offer a recommendation from the following list: Addiction Medicine, Allergy & Immune System Medicine, Anesthesiology, Behavioral Health, Cardiology, Dermatology, Otolaryngology, Emergency Medicine, Endocrinology, Internal Medicine, Gastroenterology, Hematology, Neurology, Oncology, Opthalmology, Orthopedics, Pathology, Pediatrics, Podiatry, Pulmonology, Radiology, Rheumatology, Surgery, Urology, and OB/GYN. If you're not sure, tell them you're not sure. Please limit your answers to 200 characters or less."
                }
            ],
                "temperature": 0.6,
                "max_tokens": 30
            })
        }).then(data => {
            return data.json()
        }).then(data => {
            console.log(data);
            setAnswer(data.choices[0].message.content);
        }).catch(error => {
            console.log(error);
        });
    }

    // handler that is called when the "Ask Assistant" button is clicked on.
    const handleAsk = () => {
        if (userSubmission !== null) {
            setRemainingQuestions(remainingQuestions - 1);
            if (remainingQuestions > 0) {
                console.log(userSubmission);
                initiateUserSubmission();
            } else {
                console.log("Maximum number of submissions reached!");
            }
        }
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
                        <textarea class="chatWindow" name="chatWindowUser" rows="4" cols="64" preview="Enter text here..." value={userSubmission} onChange={(e) => {setUserSubmission(e.target.value)}} />
                        <textarea class="chatWindow" name="chatWindowAI" rows="4" cols="64" value={answer}/>
                    </div>
                    <img id="atcAssistant" src={ATC_Assistant} alt="ATC Assistant"/><br/>
                    <button id="submitBtn" onClick={handleAsk}>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default NotSureModal;