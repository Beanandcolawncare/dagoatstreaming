document.addEventListener('DOMContentLoaded', function () {
    const mp3Files = [
        'firstfile.mp3', 'secondfile.mp3', /* ... up to 200 files ... */
    ];
    
    const container = document.getElementById('mp3');

    mp3Files.forEach(file => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('track');

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

        container.appendChild(trackElement);
    });
});
