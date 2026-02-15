let typingTimeout = null;
let typingState = {
    titleIndex: 0,
    charIndex: 0,
    isDeleting: false
};

function initTypingEffect() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    typingState.titleIndex = 0;
    typingState.charIndex = 0;
    typingState.isDeleting = false;
    
    const currentLang = window.getCurrentLang() ? window.getCurrentLang() : 'pt';
    console.log(currentLang);
    
    const titles = currentLang === 'pt' 
        ? ['Desenvolvedor Full Stack', 'Especialista em JavaScript', 'Desenvolvedor Node.js', 'Criador de Soluções']
        : ['Full Stack Developer', 'JavaScript Specialist', 'Node.js Developer', 'Solution Creator'];
    
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;
    
    typedTextElement.textContent = '';
    
    function type() {
        const currentTitle = titles[typingState.titleIndex];
        
        if (typingState.isDeleting) {
            typedTextElement.textContent = currentTitle.substring(0, typingState.charIndex - 1);
            typingState.charIndex--;
        } else {
            typedTextElement.textContent = currentTitle.substring(0, typingState.charIndex + 1);
            typingState.charIndex++;
        }
        
        let typeSpeed = typingState.isDeleting ? 50 : 100;
        
        if (!typingState.isDeleting && typingState.charIndex === currentTitle.length) {
            typeSpeed = 2000;
            typingState.isDeleting = true;
        } else if (typingState.isDeleting && typingState.charIndex === 0) {
            typingState.isDeleting = false;
            typingState.titleIndex = (typingState.titleIndex + 1) % titles.length;
            typeSpeed = 500;
        }
        
        typingTimeout = setTimeout(type, typeSpeed);
    }
    
    type();
}

function stopTyping() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
    
    typingState.titleIndex = 0;
    typingState.charIndex = 0;
    typingState.isDeleting = false;
    
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        typedTextElement.textContent = '';
    }
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}


function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const progress = entry.target.querySelector('.skill-progress');
                if (progress) {
                    const percentage = progress.getAttribute('data-progress');
                    progress.style.setProperty('--progress', percentage + '%');
                }
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => observer.observe(card));
}


function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 30);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}


function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const particles = document.querySelectorAll('.particle');
        const scrolled = window.pageYOffset;
        
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index * 0.05);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}


function initProjectCardHover() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}


function initRippleEffect() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}


function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}


function initLazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}


function initAnimations() {
    initTypingEffect();
    initScrollAnimations();
    initSkillsAnimation();
    initCounters();
    initParallaxEffect();
    initProjectCardHover();
    initRippleEffect();
    addRippleStyles();
    initLazyLoadImages();
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTypingEffect,
        initScrollAnimations,
        initSkillsAnimation,
        initCounters,
        initParallaxEffect,
        initProjectCardHover,
        initRippleEffect,
        initLazyLoadImages,
        initAnimations,
        stopTyping
    };
}
