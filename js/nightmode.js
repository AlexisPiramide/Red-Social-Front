document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.getElementById('nightModeButton');

    const currentMode = localStorage.getItem('mode');

    if (currentMode === 'night') {
        document.body.classList.add('night-mode');
    }

    if (nightModeButton) {
        nightModeButton.addEventListener('click', function() {
            document.body.classList.toggle('night-mode');

            if (document.body.classList.contains('night-mode')) {
                localStorage.setItem('mode', 'night');
            } else {
                localStorage.setItem('mode', 'day');
            }
        });
    }
});
