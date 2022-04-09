/* HOMEPAGE - INDEX.JS */

import React from "react";
import './style.css';
import Button from "../Button";

import Footer from '../Footer';


export default function Homepage() {
    return (
        <div className="homepage">
            <img src="https://img.icons8.com/nolan/64/video-playlist.png" alt="logo" />
            <div className="titles">
                <h1>
                    Player<br />Video
                </h1>
                <h2>
                    To Upload. To compress. To view video files.
                </h2>
            </div>
            <div className="button-div">
                <Button className="btn-header" content="Upload" path="/upload" />
                <Button content="Files" path="/files"/>
            </div>
            <Footer />
        </div>
    )
}