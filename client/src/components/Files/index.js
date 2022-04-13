/* FILES - INDEX.JS */

import React from 'react';
import Header from "../Header";
import Footer from '../Footer';
import './style.css';


export default function Files() {

    /* 
    useState(): when data changes re-render the UI
    useState(0): take first argument "0" for initialising state (default)
    video =>  reactive value 
    setList => setter
    const [video, setList] = useState(0)
    */

    return (
        <div>
            <Header />
            <div className='list-video'>
                <p>List of low resolution videos: : </p>
                <ul>
                    <li>VIDEO 1</li>
                    <li>VIDEO 2</li>
                </ul> 
                {/*
                <video >
                    <source src="/server/storage/Player Vidéo.mp4-.mp4" type="video/mp4"></source>
                </video> 
                */}
            </div>
            <Footer />
        </div>
    )
}