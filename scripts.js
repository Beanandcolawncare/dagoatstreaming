document.addEventListener('DOMContentLoaded', function () {
    // List of specific MP3 and MP4 files
    const mp3Files = [
        'media/Free_Test_Data_500KB_MP3.mp3',
        'media/Free_Test_Data_5MB_MP3.mp3'
        // Add more MP3 file paths as needed
    ];

    const mp4Files = [
        // Add your MP4 files here
        // Example:
        // 'media/video1.mp4'
    ];

    const mp3Container = document.getElementById('mp3');
    const mp4Container = document.getElementById('mp4');

    function createMediaElement(container, files, type) {
        container.innerHTML = '';  // Clear previous content

        files.forEach(file => {
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-item');

            const heading = document.createElement('h3');
            heading.textContent = file.split('/').pop().replace('.' + type, '');
            mediaElement.appendChild(heading);

            if (type === 'mp3') {
                const audioElement = document.createElement('audio');
                audioElement.controls = true;
                audioElement.addEventListener('error', function () {
                    console.error(`Error loading file: ${file}`);
                });
                
                const sourceElement = document.createElement('source');
                sourceElement.src = file;
                sourceElement.type = 'audio/mpeg';

                audioElement.appendChild(sourceElement);
                mediaElement.appendChild(audioElement);
            } else if (type === 'mp4') {
                const videoElement = document.createElement('video');
                videoElement.controls = true;
                videoElement.addEventListener('error', function () {
                    console.error(`Error loading file: ${file}`);
                });
                
                const sourceElement = document.createElement('source');
                sourceElement.src = file;
                sourceElement.type = 'video/mp4';

                videoElement.appendChild(sourceElement);
                mediaElement.appendChild(videoElement);
            }

            container.appendChild(mediaElement);
        });
    }

    function shuffleTracks() {
        const shuffledFiles = mp3Files.sort(() => 0.5 - Math.random());
        createMediaElement(mp3Container, shuffledFiles, 'mp3');
    }

    function searchMedia(type) {
        const input = document.getElementById(type + 'Search').value.toLowerCase();
        const mediaItems = document.querySelectorAll(`#${type} .media-item`);

        mediaItems.forEach(item => {
            const heading = item.querySelector('h3').textContent.toLowerCase();
            if (heading.includes(input)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Create media elements on page load
    createMediaElement(mp3Container, mp3Files, 'mp3');
    createMediaElement(mp4Container, mp4Files, 'mp4');

    // Make shuffleTracks function accessible globally
    window.shuffleTracks = shuffleTracks;
});
