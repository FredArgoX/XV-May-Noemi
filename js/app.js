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
// //////////////////////////////////////////////////////////////////////////////////////////
// Google Sheets RSVP
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
// //////////////////////////////////////////////////////////////////////////////////////////
// Counter until Party time
// Define the target date: June 6, 2026, 18:30 Mexico City time (CST, UTC-6)
// Mexico no longer observes DST, so offset is fixed at -06:00
const targetDate = new Date('2026-06-06T18:30:00-06:00');

function updateCountdown() {
    const now = new Date();
    let diff = targetDate - now; // Difference in milliseconds

    if (diff <= 0) {
        // Event has passed: set all to 00
        document.querySelector('.days').textContent = '00';
        document.querySelector('.hours').textContent = '00';
        document.querySelector('.minutes').textContent = '00';
        document.querySelector('.seconds').textContent = '00';
    } else {
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update the HTML elements with zero-padded values
        document.querySelector('.days').textContent = String(days).padStart(2, '0');
        document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
    }
}
// Update immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
// //////////////////////////////////////////////////////////////////////////////////////////
// Google Map [FAILED ATTEMPT]
/*
function initMap() {

    const markers = [
        {
            locationName: 'Verde Olista',
            lat: 21.766926721609785, 
            lng: -102.36498752759958,
            address: 'AGS 94,<br>20341 <br>El Salto de los Salado, <br>Ags.'
        }
    ];
    
    const centerMap = {lat:21.7636349, lng:-102.3654991}

    const mapOptions = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI: true
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    // Show markers
    for(let i=0; i<markers.length; i++) {
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map
        });
    }
}
*/
// //////////////////////////////////////////////////////////////////////////////////////////
// Social Icons
const authorBtn = document.querySelector(".author");
const whatsappBtn = document.querySelector(".whatsapp");
const gmailBtn = document.querySelector(".gmail");

whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/527621160194?text=Hola!%21%20Me%20interesa%20%20tu%20servicio%20de%20desarrollo%20web", "_blank");
});
