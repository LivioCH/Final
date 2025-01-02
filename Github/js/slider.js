const slider = document.getElementById('slider');
let isDown = false;
let startX;
let scrollLeft;
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Mouse events for drag functionality
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    
    if (Math.abs(walk) > 100) {
        if (walk > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
        isDown = false;
    }
});

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Update all slides' transform and opacity
    slides.forEach((slide, i) => {
        let offset;
        if (i === currentIndex) {
            offset = 0;  // Center
            slide.style.opacity = '1';
            slide.style.transform = 'scale(1)';
        } else if (i === currentIndex - 1 || (currentIndex === 0 && i === totalSlides - 1)) {
            offset = -100;  // Left side
            slide.style.opacity = '0.5';
            slide.style.transform = 'scale(0.8)';
        } else if (i === currentIndex + 1 || (currentIndex === totalSlides - 1 && i === 0)) {
            offset = 100;  // Right side
            slide.style.opacity = '0.5';
            slide.style.transform = 'scale(0.8)';
        } else {
            offset = (i < currentIndex ? -200 : 200);  // Off screen
            slide.style.opacity = '0';
            slide.style.transform = 'scale(0.8)';
        }
        slide.style.transform = `translateX(${offset}%) ${slide.style.transform}`;
    });
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Initial setup
showSlide(currentIndex);