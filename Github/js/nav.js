const nav = document.querySelector('.nav');
const type =  document.querySelector('.type');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('small');
        nav.classList.remove('large');
        type.classList.add('small');
        type.classList.remove('large');
    } else {
        nav.classList.add('large');
        nav.classList.remove('small');
        type.classList.add('large');
        type.classList.remove('small');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    
    const navLinks = document.querySelectorAll('.nav-menu .link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/html/index.html')) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.type-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all') {
                    card.style.display = '';
                } else if (cardCategory === filterValue) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});