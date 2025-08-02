// 90's Vintage Website JavaScript
// Keep it simple and authentic!

// Visitor Counter (fake but fun)
function updateVisitorCounter() {
    const counter = document.querySelector('.visitor-counter span.blink');
    if (counter) {
        // Generate a "random" but consistent visitor count
        const today = new Date();
        const seed = today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate();
        const baseCount = 1337;
        const dailyVisitors = Math.floor(Math.sin(seed) * 100) + 50;
        const totalCount = baseCount + dailyVisitors;
        counter.textContent = String(totalCount).padStart(6, '0');
    }
}

// Simple typewriter effect for welcome message
function typewriterEffect(element, text, speed = 100) {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Add some retro sound effects (visual feedback)
function addRetroSoundEffects() {
    const buttons = document.querySelectorAll('.retro-button, .nav-menu a');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a brief visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
        
        button.addEventListener('mouseenter', function() {
            // Add hover effect enhancement
            this.style.textShadow = '0 0 10px currentColor';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
}

// Matrix-style background effect (subtle)
function createMatrixBackground() {
    // Only add if not mobile (keep it lightweight)
    if (window.innerWidth > 768) {
        const chars = '0123456789ABCDEF';
        const body = document.body;
        
        // Create a subtle background pattern
        for (let i = 0; i < 5; i++) {
            const span = document.createElement('span');
            span.style.position = 'fixed';
            span.style.top = Math.random() * 100 + '%';
            span.style.left = Math.random() * 100 + '%';
            span.style.color = 'rgba(0, 255, 0, 0.1)';
            span.style.fontSize = '12px';
            span.style.fontFamily = 'monospace';
            span.style.zIndex = '-1';
            span.style.pointerEvents = 'none';
            span.textContent = chars[Math.floor(Math.random() * chars.length)];
            
            // Animate position
            setInterval(() => {
                span.style.top = Math.random() * 100 + '%';
                span.style.left = Math.random() * 100 + '%';
                span.textContent = chars[Math.floor(Math.random() * chars.length)];
            }, 5000 + Math.random() * 5000);
            
            body.appendChild(span);
        }
    }
}

// Simple form validation for contact page
function validateContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('ERROR: All fields are required! Please complete the form.');
            return false;
        }
        
        if (!email.includes('@')) {
            alert('ERROR: Invalid email format! Please enter a valid email address.');
            return false;
        }
        
        // Simulate form submission
        alert('MESSAGE SENT SUCCESSFULLY! Thank you for contacting me. I will respond within 24-48 hours.');
        form.reset();
    });
}

// Add random "glitch" effects occasionally
function addGlitchEffects() {
    const elements = document.querySelectorAll('h1, h2, .ascii-art');
    
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.classList.add('animate-glitch');
            
            setTimeout(() => {
                randomElement.classList.remove('animate-glitch');
            }, 300);
        }
    }, 10000); // Check every 10 seconds
}

// Last updated timestamp
function updateLastModified() {
    const footer = document.querySelector('.footer p');
    if (footer && footer.textContent.includes('Last Updated:')) {
        const now = new Date();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dateStr = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
        footer.innerHTML = footer.innerHTML.replace(/Last Updated: .+?(\|)/, `Last Updated: ${dateStr} $1`);
    }
}

// Easter egg: Konami code
function setupKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                       'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                       'KeyB', 'KeyA'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                document.body.style.background = 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00)';
                document.body.style.backgroundSize = '400% 400%';
                document.body.style.animation = 'rainbow 2s ease infinite';
                
                // Add CSS animation for rainbow effect
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes rainbow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `;
                document.head.appendChild(style);
                
                alert('🎉 KONAMI CODE ACTIVATED! Welcome to the matrix! 🎉');
                konamiIndex = 0;
                
                // Reset after 5 seconds
                setTimeout(() => {
                    document.body.style.background = 'var(--bg-primary)';
                    document.body.style.animation = '';
                }, 5000);
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🖥️ SYSTEM INITIALIZED - WELCOME TO THE 90s! 🖥️');
    console.log('Try the Konami code for a surprise! ↑↑↓↓←→←→BA');
    
    updateVisitorCounter();
    addRetroSoundEffects();
    createMatrixBackground();
    validateContactForm();
    addGlitchEffects();
    updateLastModified();
    setupKonamiCode();
    
    // Welcome message
    setTimeout(() => {
        console.log('💾 All systems operational. Enjoy your visit!');
    }, 1000);
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('📺 Display sleep mode activated');
    } else {
        console.log('📺 Display wake mode activated');
        updateVisitorCounter(); // Update counter when page becomes visible again
    }
});