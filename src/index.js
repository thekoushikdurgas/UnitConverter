import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DayNight from './component/daynight/DayNight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="background"></div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to='/1/1' />} />
        <Route exact path="/:page/:tab" element={<App />} />
        <Route path="*" element={<Navigate to='/1/1' />} />
      </Routes>
    </Router>
    <DayNight />
  </React.StrictMode>
);
