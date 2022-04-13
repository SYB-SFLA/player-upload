/* NAVBAR - INDEX.JS */

import React from 'react';
import Button from "../Btn-Header";
import './style.css';

export default function NavBar() {
  return (
    <nav>
      <ul className='list'>
        <li className='items'><Button content="Upload" path="/upload" /></li>
        <li className='items'><Button content="Files" path="/files" /></li>
      </ul>
    </nav>
  )
} 
