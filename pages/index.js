import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // TailwindCSS styles
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TrackShipment from './pages/TrackShipment';
import AdminPanel from './pages/AdminPanel';

// Optional: Global context providers (auth, notifications) can go here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
