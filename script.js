window.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container', {
        delay: 200,
        duration: 1000,
        distance: '0',
        origin: 'left',
        reset: true,
        easing: 'ease-in-out',
        interval: 100,
        opacity: 0,
        scale: 1,
        viewFactor: 0.3,
        mobile: true,
        beforeReveal: function (domEl) {
            ScrollReveal().container.style.overflowX = 'hidden'; // Hide horizontal scrollbar during the animation
            ScrollReveal().container.style.overflowY = 'hidden'; // Hide vertical scrollbar during the animation
            domEl.style.transform = 'translateX(-50px)'; // Initial position of the element
        },
        afterReveal: function (domEl) {
            domEl.style.transform = 'translateX(50px)'; // Final position of the element after the animation
        },
        beforeReset: function (domEl) {
            domEl.style.transform = 'translateX(-50px)'; // Reset the position of the element before hiding it
        },
        afterReset: function (domEl) {
            domEl.style.transform = ''; // Clear the transform style after hiding the element
            ScrollReveal().container.style.overflowX = ''; // Restore the overflow property of the container
            ScrollReveal().container.style.overflowY = ''; // Restore the overflow property of the container
        }
    });

    ScrollReveal().reveal('.image', {
        delay: 200,
        duration: 1000,
        distance: '0',
        origin: 'left',
        reset: true,
        easing: 'ease-in-out',
        interval: 100,
        opacity: 0,
        scale: 1,
        viewFactor: 0.3,
        mobile: true,
        beforeReveal: function (domEl) {
            ScrollReveal().container.style.overflowX = 'hidden'; // Hide horizontal scrollbar during the animation
            ScrollReveal().container.style.overflowY = 'hidden'; // Hide vertical scrollbar during the animation
            domEl.style.transform = 'translateX(-50px)'; // Initial position of the element
        },
        afterReveal: function (domEl) {
            domEl.style.transform = 'translateX(50px)'; // Final position of the element after the animation
        },
        beforeReset: function (domEl) {
            domEl.style.transform = 'translateX(-50px)'; // Reset the position of the element before hiding it
        },
        afterReset: function (domEl) {
            domEl.style.transform = ''; // Clear the transform style after hiding the element
            ScrollReveal().container.style.overflowX = ''; // Restore the overflow property of the container
            ScrollReveal().container.style.overflowY = ''; // Restore the overflow property of the container
        }
    });
});
