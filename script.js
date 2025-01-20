// Function to toggle the left menu visibility
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
}

// Function to adjust the scale of the page based on screen width
function adjustScaleBasedOnWidth() {
    const scaleWrapper = document.body;
    let scale = 1; // Default scale

    // Conditions for scaling the page
    if (window.innerWidth >= 992 && window.innerWidth <= 1600) {
        scale = 0.9;  // Shrink the page by 90%
    } else if (window.innerWidth >= 700 && window.innerWidth <= 767) {
        scale = 0.8;  // Shrink the page by 80%
    } else if (window.innerWidth >= 600 && window.innerWidth < 700) {
        scale = 0.75; // Shrink the page by 75%
    } else if (window.innerWidth <= 600) {
        scale = 0.5;  // Shrink the page by 50%
    }

    // Apply scaling to the entire content including the header
    scaleWrapper.style.transform = `scale(${scale})`;
    scaleWrapper.style.transformOrigin = "top left";  // Ensures scaling from the top-left corner

    
}

// Add event listener for window resize to handle scaling dynamically
window.addEventListener('resize', adjustScaleBasedOnWidth);

// Initial scaling when the page loads
adjustScaleBasedOnWidth();
