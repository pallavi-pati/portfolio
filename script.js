// Smooth Scrolling for Section Links
document.querySelectorAll('header nav ul li a, .side-menu ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');

// Toggle Side Menu
hamburger.addEventListener('click', () => {
    if (sideMenu.style.right === '0px') {
        sideMenu.style.right = '-250px';
    } else {
        sideMenu.style.right = '0px';
    }
});
