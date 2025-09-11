const navLinks = document.querySelectorAll('.desktop-menu .nav-item');
const menuToggle = document.getElementById('menu-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});