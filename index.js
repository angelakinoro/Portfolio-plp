// Scroll Animation
const animateElements = document.querySelectorAll('.animate');
        
// Initially animate visible elements
checkVisibility();

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

function checkVisibility() {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('appear');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive frame effect
const frame = document.querySelector('.frame');

window.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to window
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle movement of the frame based on mouse position
    frame.style.transform = `translate(
        ${(mouseX - 0.5) * 10}px, 
        ${(mouseY - 0.5) * 10}px
    )`;
});