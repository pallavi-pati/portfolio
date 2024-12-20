// script.js
const hamburger = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');

// Toggle Side Menu
hamburger.addEventListener('click', () => {
    if (sideMenu.style.right === '0px') {
        sideMenu.style.right = '-250px'; // Hide the menu
    } else {
        sideMenu.style.right = '0px'; // Show the menu
    }
});
