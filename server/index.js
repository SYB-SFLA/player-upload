/* Requiring dotenv allows loads environment constiables from a .env file into process.env. */
require('dotenv').config();

/* ----- PACKAGE DEPENDENCIES ----- */
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

/* Calling Express */
const app = express();


/* ----- MIDDLEWARE -----*/
//#region 
/* Implementation of the CORS module */
app.use(cors());

/* To access the files in public folder */
app.use(express.static('public'));

/* Middleware integrated to Express allowing to display and receive the request as a JSON object via the POST method */
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
//#endregion

/* ----- MULTER CONFIGURATION -----*/
//#region 
/* Storage configuration - The disk storage engine for full control on storing files to disk */
const storage = multer.diskStorage({
    /* Destination is used to determine within which folder the uploaded files should be stored */
    destination: function (req, file, callback) {
        /* Uploads is the name of folder which upload/storage video */
        callback(null, "./storage")
    },
    /* The name of the file within the destination */
    filename: function (req, file, callback) {
        //! Don't work
        /* Handle of file upload date */
        // let dateCurrent = new Date();
        // let dateLocale = dateCurrent.toLocaleDateString('fr-FR', {
        //     year: 'numeric',
        //     month: 'numeric',
        //     day: 'numeric'
        // })
        // console.log("Date Current", dateLocale);
        // callback(null, file.originalname + "-" + dateCurrent + ".mp4");
        /* Name of the file on the user’s computer */
        callback(null, file.originalname + "-" + ".mp4");
    }
});

/* Maximum size allowed - 5Go or 5000 Mb */
const maxSize = 1 * 50000 * 50000;

/* Multer configuration */
const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    /* Function to control which files are accepted */ 
    fileFilter: function (req, file, callback) {

        /* Set the filetypes */
        const filetypes = /mp4/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return callback(null, true);
        }
        /* Error handling */
        callback("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
    /* 'myVideo' is the name of file attribute - Accept a single file with the name "fieldname". The single file will be stored in req.file.*/
}).single("myVideo");
//#endregion

/* ----- ROUTES -----*/
//#region 
/* Route GET - Homepage */
app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/front/public/index.html");
    res.send('GET request to the homepage');
});

/* Route POST - Upload */
app.post('/upload', (req, res) => {
    upload(req, res, (error) => {
        error ? res.send(error) : res.send("Successful, video uploaded ! ")
    });
    // res.redirect('./');
    
});

/* Route GET - Files */
app.get('/files', (req, res) => {
    res.send('Je suis dans la methode GET /files ');
});
//#endregion

/* ----- SERVER ----- */
//#region 
/* Port setup - support for the port chosen by the developer if there is one, otherwise 5000 */
const port = process.env.PORT || 5000;

/* Launching server */
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
//#endregion