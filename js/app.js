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


















// Use Intersection Observer to detect when the table enters the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to trigger the animation
            entry.target.classList.add('reveal-active');
            // Stop observing once triggered (one-time animation)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible; adjust as needed
});

// Target the container
const container = document.getElementById('itinerario_table_container');
if (container) {
    observer.observe(container);
}