// script.js

// Initialize ScrollReveal
// script.js
window.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container', {
        delay: 200,
        duration: 1000,
        distance: '200px',
        origin: 'top',
        reset: true,
        easing: 'ease-in-out',
        interval: 100,
        opacity: 0,
        scale: 0.9,
        viewFactor: 0.3,
        mobile: true,
        container: document.querySelector('.container') // Specify the container element for the parallax effect
    });

    ScrollReveal().reveal('.image', {
        delay: 200,
        duration: 1000,
        distance: '200px',
        origin: 'top',
        reset: true,
        easing: 'ease-in-out',
        interval: 100,
        opacity: 0,
        scale: 0.9,
        viewFactor: 0.3,
        mobile: true,
        container: document.querySelector('.container') // Specify the container element for the parallax effect
    });
});
// script.js
