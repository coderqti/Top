// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });
});

// Active Navigation Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonial Carousel Functionality
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonials-grid .testimonial-card');
const totalTestimonials = testimonials.length;

document.getElementById('next-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    updateCarousel();
});

document.getElementById('prev-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentTestimonialIndex * (document.querySelector('.testimonial-card').offsetWidth + 16); // 16px margin
    document.querySelector('.testimonials-grid').style.transform = `translateX(${offset}px)`;
}

// Footer Link Hover Effect
const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('underline');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('underline');
    });
});

// Preload Images
const preloadImages = () => {
    const images = ['logo.png', 'facebook.png', 'twitter.png', 'linkedin.png', 'instagram.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

window.addEventListener('load', preloadImages);
