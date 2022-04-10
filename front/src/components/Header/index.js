/* HEADER - INDEX.JS */

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import './style.css';

export default function Header() {
    return (
        <div className="header">
            
            <div>
                <h1 className="h1-header">
                    Player<br />Video
                </h1>
                <h2 className="h2-header">
                    To Upload. To compress. To view video files.
                </h2>
            </div>
            <NavBar />
            <Link to="/"><img className ="img-header" src="https://img.icons8.com/nolan/64/video-playlist.png" alt="logo" /></Link>
        </div>

    )
}