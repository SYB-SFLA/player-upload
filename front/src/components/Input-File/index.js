/* INPUT-FILE - INDEX.JS */

/* Gestion de l'input - File video */

import React from 'react';
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select your video :
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Upload your video</button>
            </form>
        );
    }
}

export default FileInput;