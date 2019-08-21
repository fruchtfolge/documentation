// auto detect changes to the 'originals' folder (new images and videos),
// and run a program to reduce their filesize
const fs = require('fs')
const path = require('path')
const util = require('util')
const cp = require('child_process')
const ffmpeg = require('ffmpeg-static')
const sharp = require('sharp')
const imagemin = require('imagemin')
const imageminJpegoptim = require('imagemin-jpegoptim')

const exec = util.promisify(cp.exec)

const watcher = fs.watch('./docs/original', { 
  encoding: 'utf8' 
}, async (eventType, filename) => {
  if (!filename || eventType !== 'rename') return
  try {
    const filepath = `./docs/original/${filename}`
    const ext = path.extname(filename)
    const base = path.basename(filename,ext)
    // minify images
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const outpath = `./docs/img/${base}.jpg`
      // resize image
      await sharp(filepath).resize(1024).toFile(outpath)
      // and minify
      await imagemin([outpath], {
        destination: './docs/img',
        use: [imageminJpegoptim({
          size: 90
        })]
      })
    } else if (ext === '.mp4' || ext === '.mov') {
      // minify videos
      const command = `${ffmpeg.path} -v quiet -stats -i "${
        filename}" -vf scale=1024:-2 "../img/${base}.webm"`
      await exec(command, {cwd: './docs/original'})
    }
  } catch (e) {
    console.error(e)
  }
})

watcher.on('error', (err) => console.log(err))