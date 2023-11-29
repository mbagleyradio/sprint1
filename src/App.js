import './App.css';
import React from 'react';
import HomePage from './HomePage.js';
import GetStarted from './GetStarted.js';
import PopupNoI from './PopupNoI.js';
import PopupI from './PopupI.js';
import ModalOnSubmit from './ModalOnSubmit.js';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={ <HomePage/> }></Route>
      <Route path="get-started" element={ <GetStarted/> }></Route>
      <Route path="contact-ins" element={ <PopupI/>} ></Route>
      <Route path="contact-no-ins" element={ <PopupNoI/> }></Route>
      <Route path="submitted" element={ <ModalOnSubmit/> }></Route>
    </>
    )
  );
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
