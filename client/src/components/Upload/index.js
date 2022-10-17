/* UPLOAD - INDEX.JS */

import React from 'react';
// import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';
// import { renderMatches } from 'react-router-dom';


// export default class Upload extends Component {
//     state = {
//         /* Initially, no file is selected */
//         selectedFile: null,
//     };

//     /* On file select (from the pop up) */
//     onFileChange = event => {
//         /* Update the state */
//         this.setState({ selectedFile: event.target.files[0] });
//         // console.log("OnFileChange", this.setState);
//     };

//     /* On file upload (click the upload button) */
//     async onFileUpload() {
//         /* Create an object of formData */
//         const formData = new FormData();

//         /* formData allows you to capture the HTML form and submit it via axios - Update the formData object */
//         formData.append(
//             "myVideo",
//             this.state.selectedFile,
//             this.state.selectedFile.name
//         );

//         /* Details of the uploaded file */
//         console.log('JE LOG MON STATE.SELECTEFILE dans mon index Upload', this.state.selectedFile);

//         /* Request made to the backend api - Send formData object */
//         await axios
//             .post("http://localhost:5000/upload", formData)
//             .then(res => console.log('REPONSE AXIOS POST', res))
//             .catch(error => console.log(error));
//     };

//     /* File content to be displayed after - File upload is complete */
//     fileData = () => {
//         if (this.state.selectedFile) {
//             return (
//                 <div className="infoFileUploaded">
//                     {/* <h2>File Details:</h2>
//                     <p>File Name: {this.state.selectedFile.name}</p>
//                     <p>File Type: {this.state.selectedFile.type}</p>
//                     <p>
//                         Last Modified:{this.state.selectedFile.lastModifiedDate.toDateString()}
//                     </p> */}
//                     <h1>Video upload</h1>
//                     <VideoInput width={400} height={300} />
//                 </div>

//             );

//         }

//     };

//     /* Display file as list */
//     renderData = (event) => {
//         // this.setState({ selectedFile: event.target.files[0]});
//         if (this.state.selectedFile) {
//             return (
//                 <div className="renderData">
//                     <ul>
//                         <li>{this.state.selectedFile.name}</li>
//                     </ul>
//                 </div>
//             );
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <div className="div-upload">
//                     <h3>Upload your video in low-res version on this platform</h3>
//                     <form action="/upload" encType='multipart/form-data' method='POST'>
//                         {/* <label>
//                             Name video :
//                             <input
//                                 type="text"
//                                 name="nameVideo"
//                                 placeholder='Name Video'
//                                 onChange={this.onFileChange}
//                             />
//                         </label> */}
//                         <input
//                             type="file"
//                             name="myVideo"
//                             onChange={this.onFileChange} required
//                         />
//                         <label for="to">To : </label>
//                         <select className='form-option' name='to'>
//                             <option>mp4</option>
//                             <option>avi</option>
//                             <option>webm</option>
//                             <option>mov</option>
//                         </select>

//                         <button
//                             onClick={this.onFileUpload}>
//                             Upload your video!
//                         </button>
//                         {this.fileData()}
//                     </form>
//                     {this.renderData()}
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
// }

export default function VideoInput(props) {
    const { width, height } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };

    
    return (
        <div>
            <Header />
                <div className="VideoInput">
                <input
                    ref={inputRef}
                    className="VideoInput_input"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                />
                {!source && <button onClick={handleChoose}>Choose</button>}
                {source && (
                    <video
                        className="VideoInput_video"
                        width="30%"
                        height={height}
                        controls
                        src={source}
                    />
                )}
                <div className="VideoInput_footer">{source || "Nothing selected"}</div>
                </div>
            <Footer />
        </div>
    );
}
    

