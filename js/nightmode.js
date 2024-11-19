document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.getElementById('nightModeButton');
    const body = document.body;

    // Check if a mode is stored in localStorage
    const currentMode = localStorage.getItem('mode');

    // If a mode is found, apply it to the body
    if (currentMode === 'night') {
        body.classList.add('night-mode');
    }

    if (nightModeButton) {
        nightModeButton.addEventListener('click', function() {
            // Toggle the night mode class
            body.classList.toggle('night-mode');

            // Store the current mode in localStorage
            if (body.classList.contains('night-mode')) {
                localStorage.setItem('mode', 'night');
            } else {
                localStorage.setItem('mode', 'day');
            }
        });
    }
});
