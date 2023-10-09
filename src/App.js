import './App.css';
import React from 'react';
import Welcome from './Welcome.js';
import Body from './Body.js';
function App() {
  return (
    <div className="mobileResize">
      <div className="Welcome">
        <Welcome />
      </div>
      <div className="Body">
        <Body />
      </div>
      <div className="Footer">

      </div>
    </div>
  );
}

export default App;
