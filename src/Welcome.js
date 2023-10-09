import React from 'react';
import placeholder from './placeholder_for_monroe-county-logo.png';
import './Welcome.css';
function Welcome() {
    return (
        <>
            <img id="welcomeIMG" src={placeholder} alt="Welcome to Monroe County"/>
            <h1 id="welcomeText">Welcome to Access to Care Monroe County</h1>
        </>
    );
}

export default Welcome;