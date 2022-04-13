/* APP - JS */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Upload from './components/Upload';
import Files from './components/Files';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

