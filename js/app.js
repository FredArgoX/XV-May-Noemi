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






/*
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Confirmación exitosa!');
            this.reset(); // Clear the form
        } else {
            alert('Error de confirmación. Vuelve a intentar');
        }
    })
    .catch(error => {
        alert('Error: ' + error);
    });
});

*/






document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var form = this;
    var submitButton = form.querySelector('button[type="submit"]');
    
    // Optional: Disable button immediately on click to prevent multiple submits
    submitButton.disabled = true;
    submitButton.textContent = 'Confirmando...'; // Temporary text during submission
    
    var formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Confirmación exitosa!');
            
            // Apply persistent changes after success
            submitButton.classList.add('submitted'); // Add the CSS class
            submitButton.textContent = 'Confirmado'; // Change text
            submitButton.disabled = true; // Keep disabled
            
            form.reset(); // Clear the form
        } else {
            alert('Error de confirmación.');
            submitButton.disabled = false; // Re-enable on error
            submitButton.textContent = 'Confirmar'; // Reset text
        }
    })
    .catch(error => {
        alert('Error: ' + error);
        submitButton.disabled = false; // Re-enable on error
        submitButton.textContent = 'Confirmar'; // Reset text
    });
});




