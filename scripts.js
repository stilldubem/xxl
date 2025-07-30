AOS.init();


function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const overlay = document.getElementById('navOverlay');
    
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (overlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('click', function(e) {
    const hamburger = document.querySelector('.hamburger-menu');
    const overlay = document.getElementById('navOverlay');
    
    if (!hamburger.contains(e.target) && !overlay.contains(e.target) && overlay.classList.contains('active')) {
        toggleMenu();
    }
});