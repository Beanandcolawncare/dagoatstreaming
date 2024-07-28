document.addEventListener('DOMContentLoaded', function () {
    const mp3Files = [
        'Free_Test_Data_5MB_MP3.mp3',
        'secondfile.mp3',
        'Free_Test_Data_5MB_MP3.mp3'
    ];

    const mp4Files = [
        'video1.mp4',
        'video2.mp4'
    ];
    
    const mp3Container = document.getElementById('mp3');
    const mp4Container = document.getElementById('mp4');

    function createMediaElement(container, files, type) {
        container.innerHTML = '';  // Clear previous content

        files.forEach(file => {
            const mediaElement = document.createElement('div');
            mediaElement.classList.add(type + '-item');

            const heading = document.createElement('h3');
            heading.textContent = file.replace('.' + type, '');
            mediaElement.appendChild(heading);

            if (type === 'mp3') {
                const audioElement = document.createElement('audio');
                audioElement.controls = true;
                
                const sourceElement = document.createElement('source');
                sourceElement.src = file;
                sourceElement.type = 'audio/mpeg';

                audioElement.appendChild(sourceElement);
                mediaElement.appendChild(audioElement);
            } else if (type === 'mp4') {
                const videoElement = document.createElement('video');
                videoElement.controls = true;
                
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
        const mediaItems = document.querySelectorAll('#' + type + ' .mp3-item, #' + type + ' .mp4-item');

        mediaItems.forEach(item => {
            const heading = item.querySelector('h3').textContent.toLowerCase();
            if (heading.includes(input)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    function showTab(tabId) {
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove active class from all tab links
        document.querySelectorAll('.tab-links').forEach(link => {
            link.classList.remove('active');
        });

        // Show the clicked tab content
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tab-links[onclick="showTab('${tabId}')"]`).classList.add('active');
    }

    // Create media elements on page load
    createMediaElement(mp3Container, mp3Files, 'mp3');
    createMediaElement(mp4Container, mp4Files, 'mp4');

    // Add event listeners for search inputs
    const mp3SearchInput = document.getElementById('mp3Search');
    const mp4SearchInput = document.getElementById('mp4Search');

    if (mp3SearchInput) {
        mp3SearchInput.addEventListener('keyup', () => searchMedia('mp3'));
    }

    if (mp4SearchInput) {
        mp4SearchInput.addEventListener('keyup', () => searchMedia('mp4'));
    }

    // Make shuffleTracks function accessible globally
    window.shuffleTracks = shuffleTracks;
});


