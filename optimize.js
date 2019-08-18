// auto detect changes to the 'originals' folder (new images and videos),
// and run a program to reduce their filesize
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const watcher = fs.watch('./docs/original', { encoding: 'utf8' }, (eventType, filename) => {
  if (filename && eventType === 'rename') {
    // the file either got added or deleted
    if (path.extname(filename) === '.png') {
      const commands = [
        `sips -s format jpeg -s formatOptions 70 -Z 1024 "${filename}" --out "../img/${path.basename(filename, '.png')}.jpg"`,
        `jpegoptim "../img/${path.basename(filename,'.png')}.jpg" -m80 -o -p --strip-all`
      ]
      exec(commands.join(' && '), {cwd: './docs/original'}, (err, stdout, stderr) => {
        console.log(err,stdout,stderr)
      })
    } else if (path.extname(filename) === '.mp4') {
      const command = `ffmpeg -v quiet -stats -i "${filename}" -vf scale=1024:-2 "../img/${filename}"`
      exec(command, {cwd: './docs/original'}, (err, stdout, stderr) => {
        console.log(err,stdout,stderr)
      })
    }
  }
})

watcher.on('error', (err) => console.log(err))
