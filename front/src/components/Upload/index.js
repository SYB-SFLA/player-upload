/* UPLOAD - INDEX.JS */

import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import './style.css';


class Upload extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className="div-upload">
                    <h3>Upload your video in low-res version on this platform</h3>
                    <form>
                        <label>
                            Name video : <input type="text" name="name-video" placeholder="Name video" />
                        </label>
                        <br />
                        <label>
                            Url video : <input type="url" name="url-video" placeholder="Url video" />
                        </label>
                    </form>
                    <br />
                    <Form />
                    <br />
                </div>
                <br />
                <Footer />
            </div>
        )
    }

}

export default Upload;