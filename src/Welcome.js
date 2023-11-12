import React from 'react';
import A2CLogo from './A2CLogo_150x150.png';
import './Welcome.css';
function Welcome() {
    return (
        <>
            <img id="welcomeIMG" src={A2CLogo} alt="Welcome to Monroe County"/>
            <h1 id="welcomeText">Welcome to Access to Care Monroe County</h1>
        </>
    );
}

export default Welcome;