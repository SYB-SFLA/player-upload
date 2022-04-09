/* APP - JS */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage';
import Upload from './components/Upload';
import Files from './components/Files';


export default function App () {
 
    return (
      <div className="App">
        {/* Documentation: 
        - https://reactrouter.com/docs/en/v6/upgrading/v5 - 
        - https://stackoverflow.com/questions/69975792/error-home-is-not-a-route-component-all-component-children-of-routes-mus
        - https://reactrouter.com/docs/en/v6/upgrading/v5
        */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="upload" element={<Upload />} />
            <Route path="files" element={<Files />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    );
};

