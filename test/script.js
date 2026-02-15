// Translations
const translations = {
    pt: {
        'logo': 'DEV',
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        
        'hero-greeting': 'Olá, eu sou',
        'hero-description': 'Desenvolvedor Full Stack especializado em JavaScript e Node.js, criando soluções inovadoras e escaláveis para a web.',
        'hero-btn-projects': 'Ver Projetos',
        'hero-btn-contact': 'Entre em Contato',
        
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Desenvolvedor Full Stack & Entusiasta de Tecnologia',
        'about-p1': 'Com mais de 5 anos de experiência em desenvolvimento web, me especializei em criar aplicações robustas e escaláveis usando JavaScript e Node.js. Minha paixão por tecnologia me leva a estar sempre aprendendo e explorando novas ferramentas.',
        'about-p2': 'Trabalho com metodologias ágeis, práticas de código limpo e sempre busco a melhor solução para cada problema. Acredito que a tecnologia deve ser acessível, eficiente e fazer a diferença na vida das pessoas.',
        'about-btn': 'Vamos Conversar',
        'stat-projects': 'Projetos',
        'stat-years': 'Anos XP',
        'stat-clients': 'Clientes',
        
        'skills-title': 'Habilidades',
        'skills-subtitle': 'Tecnologias e ferramentas que domino',
        
        'projects-title': 'Projetos',
        'projects-subtitle': 'Alguns dos meus trabalhos recentes',
        'filter-all': 'Todos',
        'filter-personal': 'Pessoais',
        'filter-company': 'Empresas',
        'filter-ongoing': 'Em Andamento',
        'view-details': 'Ver Detalhes',
        'badge-ongoing': 'Em Desenvolvimento',
        
        'project-desc-1': 'Aplicativo completo de gerenciamento de tarefas com autenticação, notificações em tempo real e sincronização em nuvem.',
        'project-desc-2': 'Plataforma completa de e-commerce com painel administrativo, processamento de pagamentos e sistema de analytics.',
        'project-desc-3': 'Aplicativo de chat com inteligência artificial, suporte a múltiplos modelos e interface conversacional avançada.',
        'project-desc-4': 'Dashboard interativo de clima com previsões, mapas e gráficos históricos.',
        'project-desc-5': 'Sistema completo de CRM com automação de marketing, pipeline de vendas e relatórios avançados.',
        'project-desc-6': 'Gerenciador de snippets de código com syntax highlighting, organização por tags e compartilhamento.',
        
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Vamos trabalhar juntos no seu próximo projeto',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Telefone',
        'contact-location-label': 'Localização',
        
        'form-name': 'Seu Nome',
        'form-email': 'Seu Email',
        'form-subject': 'Assunto',
        'form-message': 'Mensagem',
        'form-submit': 'Enviar Mensagem',
        
        'footer-description': 'Desenvolvedor Full Stack criando experiências digitais incríveis.',
        'footer-links-title': 'Links Rápidos',
        'footer-social-title': 'Redes Sociais',
        'footer-rights': 'Todos os direitos reservados.'
    },
    en: {
        'logo': 'DEV',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        'hero-greeting': 'Hello, I am',
        'hero-description': 'Full Stack Developer specialized in JavaScript and Node.js, creating innovative and scalable web solutions.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Get in Touch',
        
        'about-title': 'About Me',
        'about-subtitle': 'Full Stack Developer & Technology Enthusiast',
        'about-p1': 'With over 5 years of experience in web development, I specialize in creating robust and scalable applications using JavaScript and Node.js. My passion for technology drives me to constantly learn and explore new tools.',
        'about-p2': 'I work with agile methodologies, clean code practices, and always seek the best solution for each problem. I believe technology should be accessible, efficient, and make a difference in people\'s lives.',
        'about-btn': 'Let\'s Talk',
        'stat-projects': 'Projects',
        'stat-years': 'Years XP',
        'stat-clients': 'Clients',
        
        'skills-title': 'Skills',
        'skills-subtitle': 'Technologies and tools I master',
        
        'projects-title': 'Projects',
        'projects-subtitle': 'Some of my recent work',
        'filter-all': 'All',
        'filter-personal': 'Personal',
        'filter-company': 'Companies',
        'filter-ongoing': 'Ongoing',
        'view-details': 'View Details',
        'badge-ongoing': 'In Development',
        
        'project-desc-1': 'Complete task management application with authentication, real-time notifications and cloud synchronization.',
        'project-desc-2': 'Complete e-commerce platform with admin panel, payment processing and analytics system.',
        'project-desc-3': 'AI chat application with support for multiple models and advanced conversational interface.',
        'project-desc-4': 'Interactive weather dashboard with forecasts, maps and historical charts.',
        'project-desc-5': 'Complete CRM system with marketing automation, sales pipeline and advanced reporting.',
        'project-desc-6': 'Code snippet manager with syntax highlighting, tag organization and sharing.',
        
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Let\'s work together on your next project',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-location-label': 'Location',
        
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        
        'footer-description': 'Full Stack Developer creating amazing digital experiences.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Social Media',
        'footer-rights': 'All rights reserved.'
    }
};

// Current language
let currentLang = 'pt';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after page load
    setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.add('hidden');
    }, 1500);
    
    // Initialize all features
    initNavigation();
    initThemeToggle();
    initLanguageToggle();
    initTypingEffect();
    initScrollAnimations();
    initSkillsAnimation();
    initProjectsFilter();
    initContactForm();
    initCounters();
    initSmoothScroll();
});

// Navigation
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active section highlight
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// Language Toggle
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('language') || 'pt';
    
    currentLang = savedLang;
    updateLanguage(currentLang);
    langToggle.querySelector('.lang-text').textContent = currentLang.toUpperCase();
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(currentLang);
        langToggle.querySelector('.lang-text').textContent = currentLang.toUpperCase();
        localStorage.setItem('language', currentLang);
        
        // Reinitialize typing effect with new language
        initTypingEffect();
    });
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Typing Effect
function initTypingEffect() {
    const titles = currentLang === 'pt' 
        ? ['Desenvolvedor Full Stack', 'Especialista em JavaScript', 'Desenvolvedor Node.js', 'Criador de Soluções']
        : ['Full Stack Developer', 'JavaScript Specialist', 'Node.js Developer', 'Solution Creator'];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.querySelector('.typed-text');
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Scroll Animations
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
    
    // Animate sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Skills Animation
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
                const percentage = progress.getAttribute('data-progress');
                progress.style.setProperty('--progress', percentage + '%');
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => observer.observe(card));
}

// Projects Filter
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Animate in
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

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert(currentLang === 'pt' 
            ? 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
            : 'Message sent successfully! I will contact you soon.');
        
        // Reset form
        form.reset();
    });
}

// Counter Animation
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

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for particles
window.addEventListener('scroll', () => {
    const particles = document.querySelectorAll('.particle');
    const scrolled = window.pageYOffset;
    
    particles.forEach((particle, index) => {
        const speed = 0.1 + (index * 0.05);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Add ripple effect to buttons
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

// Add CSS for ripple animation
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

// Easter egg: Konami code
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

// Performance optimization: Lazy load images
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

// Console message
console.log('%c🚀 Portfolio desenvolvido com JavaScript, Node.js, EJS e CSS ', 'color: #7B2CBF; font-size: 16px; font-weight: bold;');
console.log('%c💼 Desenvolvedor Full Stack | JavaScript & Node.js', 'color: #9D4EDD; font-size: 14px;');
console.log('%c📧 Contato: joao.silva@email.com', 'color: #C77DFF; font-size: 12px;');
