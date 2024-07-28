document.addEventListener('DOMContentLoaded', function () {
    // List your MP3 files
    const mp3Files = [
        'firstfile.mp3',
        'secondfile.mp3',
        'newfile1.mp3',
        'newfile2.mp3',
        'Free_Test_Data_5MB_MP3.mp3'  // Example MP3 file
    ];

    // List your MP4 files
    const mp4Files = [
        'video1.mp4',
        'video2.mp4',
        'newvideo1.mp4',
        'newvideo2.mp4'
    ];
    
    // Get the container elements
    const mp3Container = document.getElementById('mp3');
    const mp4Container = document.getElementById('mp4');

    // Add MP3 files to the page
    mp3Files.forEach(file => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('track');

        const heading = document.createElement('h3');
        heading.textContent = file.replace('.mp3', '');
        trackElement.appendChild(heading);

        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        
        const sourceElement = document.createElement('source');
        sourceElement.src = file;  // Assuming files are in the root directory
        sourceElement.type = 'audio/mpeg';

        audioElement.appendChild(sourceElement);
        trackElement.appendChild(audioElement);

        mp3Container.appendChild(trackElement);
    });

    // Add MP4 files to the page
    mp4Files.forEach(file => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');

        const heading = document.createElement('h3');
        heading.textContent = file.replace('.mp4', '');
        videoElement.appendChild(heading);

        const videoTag = document.createElement('video');
        videoTag.controls = true;
        
        const sourceElement = document.createElement('source');
        sourceElement.src = file;  // Assuming files are in the root directory
        sourceElement.type = 'video/mp4';

        videoTag.appendChild(sourceElement);
        videoElement.appendChild(videoTag);

        mp4Container.appendChild(videoElement);
    });
});
