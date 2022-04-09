/* INPUT-FILE - INDEX.JS */

/* Gestion de l'input - File video */

import React from 'react';
import axios from 'axios';
import './style.css';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Fichier sélectionné - ${this.fileInput.current.files[0].name} ​🎉​🍸​`
        );
        axios
            .post("http://localhost:3000/upload")
            .then(res => console.log("Reponse de AXIOS", res))
            .catch(error => console.log("Erreur de axios", error));
        

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select your video :
                    <input name="fileUploaded" type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Upload your video</button>
            </form>
        );
    }
}

export default FileInput;