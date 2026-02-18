const btn = document.getElementById('fullscreenBtn');
btn.addEventListener('click', () => {
    const elem = document.documentElement; // Targets the entire page
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
            .then(() => console.log('Fullscreen entered'))
            .catch(err => console.error('Fullscreen failed:', err));
    } else {
        console.warn('Fullscreen API not supported');
    }
});

// Optional: Listen for fullscreen changes
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        console.log('In fullscreen');
    } else {
        console.log('Exited fullscreen');
    }
});