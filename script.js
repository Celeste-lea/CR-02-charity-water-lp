// This is a basic JavaScript file.
// You can use JavaScript to make your website interactive.

// Example: Show a message when the donation button is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Find the donation button by its class name
    var donateBtn = document.querySelector('.donate-btn');
    // If the button exists, add a click event
    if (donateBtn) {
        donateBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the link from navigating
            alert('Thank you for your interest in donating!');
        });
    }
});
