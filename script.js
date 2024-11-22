// Select the navbar
const navbar = document.getElementById("navbar");

// Offset position for the navbar to become sticky
const sticky = navbar.offsetTop;

// Add or remove the sticky class based on scroll position
function checkStickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Listen to scroll events on the window
window.onscroll = checkStickyNavbar;
