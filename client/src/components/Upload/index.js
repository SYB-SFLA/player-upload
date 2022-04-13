/* UPLOAD - INDEX.JS */

import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';


export default class Upload extends Component {
    state = {
        /* Initially, no file is selected */
        selectedFile: null,
    };

    /* On file select (from the pop up) */
    onFileChange = event => {
        /* Update the state */
        this.setState({ selectedFile: event.target.files[0]});
        // console.log("OnFileChange", this.setState);
    };

    /* On file upload (click the upload button) */
    async onFileUpload(){
        /* Create an object of formData */
        const formData = new FormData();

        /* formData allows you to capture the HTML form and submit it via axios - Update the formData object */
        formData.append(
            "myVideo",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        /* Details of the uploaded file */
        console.log(this.state.selectedFile);

        /* Request made to the backend api - Send formData object */
        await axios.post("http://localhost:5000/upload", formData);
    };

    /* File content to be displayed after - File upload is complete */
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div className="infoFileUploaded">
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } 
    };

    /* Display file as list */
    renderData = (event) => {
        // this.setState({ selectedFile: event.target.files[0]});
        if(this.state.selectedFile) {
            return (
                <div className="renderData">
                    <ul>
                        <li>{this.state.selectedFile.name}</li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="div-upload">
                    <h3>Upload your video in low-res version on this platform</h3>
                    <form action="/upload" encType='multipart/form-data' method='POST'>
                        <label>
                            Name video :
                            <input
                                type="text"
                                name="nameVideo"
                                placeholder='Name Video'
                                onChange={this.onFileChange}
                            />
                        </label>
                        <input 
                            type="file" 
                            name="myVideo" 
                            onChange={this.onFileChange} required />
                        <button
                            onClick={this.onFileUpload}>
                            Upload your video!
                        </button>
                        {this.fileData()}
                    </form>
                    {this.renderData()}
                </div>
                <Footer />
            </div>
        );
    }
}