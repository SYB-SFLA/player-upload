/* FORM - INDEX.JS */

import React, { useState } from 'react';
import './style.css';

export default function Form() {

    const [name] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted, ${name}`);    
    }

    return (
        <form onSubmit = {handleSubmit}>
            <button className="btn-submit" type ='submit' value={name}>Upload your video</button>
        </form>
    )
}

/* A CONTINUER : il faut recuperer les donnees renseignees lors du submit */