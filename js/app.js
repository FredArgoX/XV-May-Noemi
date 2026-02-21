// //////////////////////////////////////////////////////////////////////////////////////////
// FullScreen Functionality
const enterFullscreen = document.getElementById("enter-fullscreen");
const exitFullscreen = document.getElementById("exit-fullscreen");
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    enterFullscreen.setAttribute("stroke", "transparent");
    exitFullscreen.setAttribute("stroke", "rgb(231, 223, 212)");
  } else {
    document.exitFullscreen();
    enterFullscreen.setAttribute("stroke", "rgb(231, 223, 212)");
    exitFullscreen.setAttribute("stroke", "transparent");
  }
}
// //////////////////////////////////////////////////////////////////////////////////////////
// Itinerary Aimation
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









