/* UPLOAD - INDEX.JS */

import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Input from '../Input-Name';
import FileInput from '../Input-File';
import './style.css';


class Upload extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="div-upload">
                    <h3>Upload your video in low-res version on this platform</h3>
                    <Input />
                    <FileInput />
                    <br />
                </div>
                <br />
                <Footer />
            </div>
        )
    }

}

export default Upload;