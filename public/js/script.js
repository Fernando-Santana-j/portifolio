function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');

                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}


function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        
        console.log('Form submitted:', { name, email, subject, message });
        
        
        const currentLang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'pt';
        
        
        alert(currentLang === 'pt' 
            ? 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
            : 'Message sent successfully! I will contact you soon.');
        
            
        form.reset();
    });
}


function initLoader() {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1500);
}


function initKonamiCode() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
}


function showConsoleMessage() {
    console.log('%c🚀 Portfolio desenvolvido com JavaScript, HTML e CSS', 'color: #7B2CBF; font-size: 16px; font-weight: bold;');
    console.log('%c💼 Desenvolvedor Full Stack | JavaScript & Node.js', 'color: #9D4EDD; font-size: 14px;');
    console.log('%c📧 Contato: joao.silva@email.com', 'color: #C77DFF; font-size: 12px;');
}


document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    
    
    if (typeof initNavigation === 'function') {
        initNavigation();
    }
    
    
    if (typeof initThemeToggle === 'function') {
        initThemeToggle();
    }
    
    
    if (typeof initLanguageToggle === 'function') {
        initLanguageToggle();
    }
    
    
    if (typeof initTypingEffect === 'function') {
        initTypingEffect();
    }
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    if (typeof initSkillsAnimation === 'function') {
        initSkillsAnimation();
    }
    if (typeof initCounters === 'function') {
        initCounters();
    }
    if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
    }
    
    
    initProjectsFilter();
    initContactForm();
    initKonamiCode();
    showConsoleMessage();
});


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initProjectsFilter,
        initContactForm,
        initLoader,
        initKonamiCode,
        showConsoleMessage
    };
}
