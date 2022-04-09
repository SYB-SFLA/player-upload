/* FILES - INDEX.JS */

import React, { Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';


class Files extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className='hooks'>
                    <p>
                    JE SUIS DANS LE DOSSIER FILES et dans le fichier index.js
                    </p>
                </div>
                
                <Footer />
            </div>
        )
    }

}

export default Files;