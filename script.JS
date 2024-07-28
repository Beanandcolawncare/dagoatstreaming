document.addEventListener('DOMContentLoaded', function () {
    const mp3Files = [
        'firstfile.mp3', 'secondfile.mp3', /* Existing files */,
        'newfile1.mp3', 'newfile2.mp3', /* New files */
        // Add more filenames as needed
    ];

    const mp4Files = [
        'video1.mp4', 'video2.mp4', /* Existing files */,
        'newvideo1.mp4', 'newvideo2.mp4', /* New files */
        // Add more filenames as needed
    ];
    
    const mp3Container = document.getElementById('mp3');
    const mp4Container = document.getElementById('mp4');

    mp3Files.forEach(file => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('track', 'mp3-item');

        const heading = document.createElement('h3');
        heading.textContent = file.replace('.mp3', '');
        trackElement.appendChild(heading);

        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        
        const sourceElement = document.createElement('source');
        sourceElement.src = `path/to/your/mp3s/${file}`;
        sourceElement.type = 'audio/mpeg';

        audioElement.appendChild(sourceElement);
        trackElement.appendChild(audioElement);

        mp3Container.appendChild(trackElement);
    });

    mp4Files.forEach(file => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video', 'mp4-item');

        const heading = document.createElement('h3');
        heading.textContent = file.replace('.mp4', '');
        videoElement.appendChild(heading);

        const videoTag = document.createElement('video');
        videoTag.controls = true;
        
        const sourceElement = document.createElement('source');
        sourceElement.src = `path/to/your/mp4s/${file}`;
        sourceElement.type = 'video/mp4';

        videoTag.appendChild(sourceElement);
        videoElement.appendChild(videoTag);

        mp4Container.appendChild(videoElement);
    });
});
