/* Documentation - For testing */

/* Package FFMPEG */
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('ffmpeg-static').path
const ffprobePath = require('ffprobe-static').path
const path = require('path')
const uuid = require('uuid/v3')


/* ----- FFMPEG ----- */
//#region 
/* Video path */
const videoPath = path.join(__dirname, 'video', 'output.mp4')
/* Set ffmpeg path */
ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

/**
 * Extract Metadata from a video
 * @param {String} path
 */
function metadata(path) {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(path, (error, metadata) => {
            if (error) {
                reject(error)
            }
            resolve(metadata)
        })
    })
}

/* Ffmpeg command in node */
function command(input, output, bitrate) {
    return new Promise((resolve, reject) => {
        ffmpeg(input)
            .outputOptions(['-c:v libx264', `-b:v ${bitrate}k`, '-c:a aac', '-b:a 58k'])
            .output(output)
            .on('start', (command) => {
                console.log('TCL: command -> command', command)
            })
            .on('error', (error) => reject(error))
            .on('end', () => resolve())
            .run()
    })
}

function whatBitrate(bytes) {
    const ONE_MB = 1000000
    const BIT = 28 
    const diff = Math.floor(bytes / ONE_MB)
    if (diff < 5) {
        return 128
    } else {
        return Math.floor(diff * BIT * 1.1)
    }
}


/* This compress video based on bitrate => the number of bits (or data) that are processed per unit of time.*/
async function compress() {
    const name = uuid(videoPath, '1b671a64-40d5-491e-99b0-da01ff1f3341')
    const outputPath = path.join(__dirname, 'video', `${name}.mp4`)
    const inputMetadata = await metadata(videoPath)
    const bitrate = whatBitrate(inputMetadata.format.size)
    await command(videoPath, outputPath, bitrate)
    const outputMetadata = await metadata(outputPath)

    return { old_size: inputMetadata.format.size, new_size: outputMetadata.format.size }
}

compress().then(data => console.log(data)).catch(error => console.log(error))
//#endregion