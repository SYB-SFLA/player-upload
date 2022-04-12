/* UPLOAD - INDEX.JS */

import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';

export default class Upload extends Component {
    state = {
        nameVideo: '',
        fileVideo: '',
        listVideo: []
    };

    /* Event listener on data entry */
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.nameVideo);
    };

    /* Management of the submission form */
    handleSubmit = async event => {
        event.preventDefault();
        const dataFile = {
            nameVideo: this.state.nameVideo,
            fileVideo: this.state.fileVideo
        };

        alert(
            `Nom du fichier : ${this.state.nameVideo} - Fichier sélectionné : ${this.state.fileVideo} ​🎉​🍸​`
        );

        /* Clean state */
        this.setState({
            nameVideo: '',
            fileVideo: '',
            /* Allows to write in a table all our inputs */
            listVideo: [...this.state.listVideo, { nameVideo: this.nameVideo, fileVideo: this.fileVideo }]
        });

        await axios
            .post("http://localhost:5000/upload", { ...dataFile })
            .then(res => console.log("Response de AXIOS", res))
            .catch(error => console.error("Jaffiche mon erreur", error));
    }

    //! nothing display
    /* Rendering of inputs as a list  */
    renderList = () => {
        return this.state.listVideo.map((item, index) => { // item refers to the current value
            return (
                <div className="list" key={index}>
                    <ul className='list-elt'>
                        <li>
                            {item.nameVideo} : {item.fileVideo}
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="div-upload">
                    <h3>Upload your video in low-res version on this platform</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name video :
                            <input
                                type="text"
                                name="nameVideo"
                                placeholder='Name Video'
                                value={this.state.nameVideo}
                                onChange={this.onChange}
                            />
                        </label>
                        <label>
                            Select your video :
                            <input
                                type="file"
                                name="fileVideo"
                                value={this.state.fileVideo}
                                onChange={this.onChange}
                            />
                        </label>
                        <button type="submit">Upload your video</button>
                    </form>
                    {/* List to display but nothing display */}
                    {this.renderList()}
                </div>
                <Footer />
            </div>
        )
    }
}