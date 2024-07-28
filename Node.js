const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, 'media');
const mp3Files = [];
const mp4Files = [];

function readDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readDirectory(fullPath);
        } else if (file.endsWith('.mp3')) {
            mp3Files.push(fullPath.replace(__dirname, '.'));
        } else if (file.endsWith('.mp4')) {
            mp4Files.push(fullPath.replace(__dirname, '.'));
        }
    });
}

readDirectory(mediaDir);

fs.writeFileSync('media-list.json', JSON.stringify({ mp3Files, mp4Files }, null, 2));
