import './App.css';
import React from 'react';
import HomePage from './HomePage.js';
import GetStarted from './GetStarted.js';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={ <HomePage/> }>
      </Route>
      <Route path="get-started" element={ <GetStarted/> }>
      </Route>
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
