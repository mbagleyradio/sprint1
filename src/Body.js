import './Body.css';
import { useNavigate } from 'react-router-dom';
//import FAQ_PDF from './User App FAQ.pdf';

function Body() {
    const navigate = useNavigate();
    
    return (
    <>
        <h3 id="bodyText">The place to find the right physician for you in the Keys. No insurance, commercial insurance, Medicare, Medicaid; regardless of your situation there are resources available to meet your needs.</h3>
        <div id="twoButtons">
            <button class="button learnMore" onClick={()=>window.open('http://uvcsandbox.com/learn-more', '_blank', 'noreferrer', 'fullscreen=yes')}>Learn more: Answers to Frequently Asked Questions</button>
            <button class="button getStarted" onClick={()=>navigate("/get-started")}>Get Started: Let's Find the Right Physician for YOU!</button>
        </div>
    </>
    );
}

export default Body;