/* UPLOAD - INDEX.JS */

import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';


class Upload extends Component {

    state = {
        nameVideo: "",
        fileVideo: ""
    };

    onNameVideoChange = event => {
        this.setState({
            nameVideo: event.target.value
        });
    };

    onFileVideoChange = event => {
        this.setState({
            fileVideo: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const dataFile = {
            nameVideo: this.state.nameVideo,
            fileVideo: this.state.fileVideo
        };
        alert(
            `Nom du fichier : ${this.state.nameVideo} - Fichier sélectionné : ${this.state.fileVideo} ​🎉​🍸​`
        );


        // console.log("MES DATAAAAAAAAS", dataFile);
        axios
            .post("http://localhost:5000/upload", dataFile)
            .then(res => console.log("Response de AXIIIIOS", res))
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <Header />
                <div className="div-upload">
                    <h3>Upload your video in low-res version on this platform</h3>
                    {/* <Input />
                    <InputFile /> */}
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name video :
                            <input type="text" value={this.state.nameVideo} onChange={this.onNameVideoChange} />
                        </label>
                        <label>
                            Select your video :
                            <input name="fileVideo" type="file" ref={this.fileVideo} onChange={this.onFileVideoChange} />
                        </label>
                        <br />
                        <button type="submit">Upload your video</button>
                    </form>
                    <br />
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

export default Upload;