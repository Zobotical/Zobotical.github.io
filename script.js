// DOM Elements
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const prevButton = document.querySelector('.prev-btn'); // Changed selector to match new class
const nextButton = document.querySelector('.next-btn'); // Changed selector to match new class
const projectSlides = document.querySelectorAll('.project-slide');
const indicators = document.querySelectorAll('.indicator');

// Mobile Navigation Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Projects Navigation - Show one project at a time
let currentProject = 0;

function showProject(index) {
    // Hide all projects
    projectSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Deactivate all indicators
    indicators.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show and activate current project
    projectSlides[index].classList.add('active');
    indicators[index].classList.add('active');

    // Update current project index
    currentProject = index;
}

// Event listeners for project navigation
nextButton.addEventListener('click', () => {
    const nextIndex = (currentProject + 1) % projectSlides.length;
    showProject(nextIndex);
});

prevButton.addEventListener('click', () => {
    const prevIndex = (currentProject - 1 + projectSlides.length) % projectSlides.length;
    showProject(prevIndex);
});

// Add click event to indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showProject(index);
    });
});

// Rest of your JavaScript remains unchanged

//// DOM Elements
//const navLinks = document.querySelector('.nav-links');
//const menuToggle = document.querySelector('.menu-toggle');
//const prevButton = document.getElementById('prev-project');
//const nextButton = document.getElementById('next-project');
//const projectSlides = document.querySelectorAll('.project-slide');
//const indicators = document.querySelectorAll('.indicator');

//// Mobile Navigation Toggle
//menuToggle.addEventListener('click', () => {
//    navLinks.classList.toggle('active');
//});

//// Close mobile nav when clicking a link
//navLinks.querySelectorAll('a').forEach(link => {
//    link.addEventListener('click', () => {
//        navLinks.classList.remove('active');
//    });
//});

//// Projects Navigation - Show one project at a time
//let currentProject = 0;

//function showProject(index) {
//    // Hide all projects
//    projectSlides.forEach(slide => {
//        slide.classList.remove('active');
//    });

//    // Deactivate all indicators
//    indicators.forEach(dot => {
//        dot.classList.remove('active');
//    });

//    // Show and activate current project
//    projectSlides[index].classList.add('active');
//    indicators[index].classList.add('active');

//    // Update current project index
//    currentProject = index;
//}

//// Event listeners for project navigation
//nextButton.addEventListener('click', () => {
//    const nextIndex = (currentProject + 1) % projectSlides.length;
//    showProject(nextIndex);
//});

//prevButton.addEventListener('click', () => {
//    const prevIndex = (currentProject - 1 + projectSlides.length) % projectSlides.length;
//    showProject(prevIndex);
//});

//// Add click event to indicators
//indicators.forEach((indicator, index) => {
//    indicator.addEventListener('click', () => {
//        showProject(index);
//    });
//});

// Scroll animations
window.addEventListener('scroll', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75 && !section.classList.contains('fade-in')) {
            section.classList.add('fade-in');
        }
    });

    // Check if header should be transparent or solid
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(16, 0, 43, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(16, 0, 43, 0.8)';
    }
});

// Glitch effect for hero title
function glitchEffect() {
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.animation = 'none';
            setTimeout(() => {
                glitchText.style.animation = '';
            }, 10);
        }, 5000);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Account for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations
function initAnimations() {
    const elementsToAnimate = document.querySelectorAll('.hero-content, .about-content, .project-slide.active, .skills-content, .contact-content');

    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';

        setTimeout(() => {
            element.style.transition = 'opacity 1s ease, transform 1s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent && heroImage) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
});

// Typing effect for hero subtitle
function typeEffect() {
    const text = "Creating immersive gaming experiences with a touch of the supernatural";
    const heroSubtitle = document.querySelector('.hero-content p');

    if (heroSubtitle) {
        heroSubtitle.textContent = "";
        let i = 0;

        function typing() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 50);
            }
        }

        // Start typing after a delay
        setTimeout(typing, 1500);
    }
}

// Run initialization functions when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show the first project by default
    showProject(0);

    // Initialize animations
    initAnimations();

    // Trigger glitch effect
    glitchEffect();

    // Start typing effect
    typeEffect();

    // Show the hero section with a fade-in effect
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';

    setTimeout(() => {
        hero.style.transition = 'opacity 1.5s ease';
        hero.style.opacity = '1';
    }, 300);
});