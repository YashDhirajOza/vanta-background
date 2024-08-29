let vantaEffect;
let currentColor = 0x0000ff; // Initial color (blue)

// Initialize Vanta.js Globe effect
function initVanta() {
    vantaEffect = VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: currentColor,
        color2: 0xff00ff,
        size: 1.50,
        backgroundColor: 0x000000
    });
}

// Function to change the globe color
function changeColor() {
    // Generate a random color
    const newColor = Math.floor(Math.random()*16777215);
    
    // Update the Vanta effect with the new color
    vantaEffect.setOptions({
        color: newColor
    });

    // Update the text color to match the globe
    document.querySelector('.cyber-text').style.color = '#' + newColor.toString(16).padStart(6, '0');
    
    currentColor = newColor;
}

// Initialize the Vanta effect when the page loads
document.addEventListener('DOMContentLoaded', initVanta);
