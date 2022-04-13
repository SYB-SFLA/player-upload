/* FILES - INDEX.JS */

// import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import axios from 'axios';
import './style.css';

export default function Files() {
    /* useState allows to use a local state in a component function */
   /* [filesUploaded] => positional destructuring- Doc: https://fr.reactjs.org/docs/hooks-state.html*/
    // const [filesUploaded] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/files/', {...filesUploaded})
    //         .then(res => console.log("Response : route /files side front", res))
    //         .catch(error => console.error("J'affiche mon erreur", error));
    // })
    
    // return (
    //     <div>
    //         <Header />
    //         <div className='hooks'>
    //             <ul>
    //                 {filesUploaded.map(file => {
    //                     <li>{filesUploaded.nameVideo}</li>
    //                 })};
    //             </ul>
    //         </div>
    //         <Footer />
    //     </div>
    // )

    return (
        <div>
            <Header />
            
            <Footer />
        </div>
    )
}


