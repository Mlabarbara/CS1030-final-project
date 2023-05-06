// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Define the tween for the horizontal motion effect
var horizontalTween = gsap.timeline()
    .to('.container', { x: '-50%', ease: 'power1.inOut' })
    .to('.image', { x: '-50%', ease: 'power1.inOut' }, '-=1'); // Start the image animation 1 second before the container animation

// Create a ScrollMagic scene for the horizontal motion effect
var horizontalScene = new ScrollMagic.Scene({
    triggerElement: '.container',
    triggerHook: 'onEnter',
    duration: '200%' // Adjust the duration as needed
})
.setTween(horizontalTween)
.addTo(controller);

// Add debug indicators (optional)
horizontalScene.addIndicators({ name: 'Horizontal Motion' });
