// ========== MOBILE MENU =========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when clicking on a link (only on mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
    });
});

// ========== CONTACT FORM =========
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all the information!');
        return;
    }
    
    // Here you would send the form data to your backend
    console.log({
        name: name,
        email: email,
        message: message
    });
    
    // Show success message
    alert('Thank you for sending the message! I will contact you soon.');
    contactForm.reset();
});

// ========== BACK TO TOP BUTTON =========
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'inline-flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// ========== NAVBAR SHADOW ON SCROLL =========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ========== ANIMATION ON SCROLL =========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and items
document.querySelectorAll('.education-card, .activity-card, .quality-card').forEach(el => {
    observer.observe(el);
});

// ========== SMOOTH SCROLL FALLBACK =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== RESPONSIVE NAVBAR =========
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

// ========== PAGE LOAD ANIMATION =========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add loading state
document.addEventListener('DOMContentLoaded', () => {
    // You can add any initialization code here
    console.log('Portfolio website loaded successfully!');
});
