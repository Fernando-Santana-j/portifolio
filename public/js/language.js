const translations = {
    pt: {
        'logo': 'Fernando',
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
        'about-p2': 'Trabalho com metodologias ágeis, práticas de código limpo e sempre busco a melhor solução para cada problema. Acredito que a tecnologia deve ser acessível, eficiente e fazer a diferença na vida das pessoas. Meu objetivo sempre foi revolucionar a vida das pessoas por meio da tecnologia.',
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
        'logo': 'Fernando',
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
        'about-p2': 'I work with agile methodologies, clean code practices, and always seek the best solution for each problem. I believe technology should be accessible, efficient, and make a difference in people\'s lives. My goal has always been to revolutionize people\'s lives through technology.',
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


let currentLang = 'pt';


function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('language') || 'pt';
    
    currentLang = savedLang;
    updateLanguage(currentLang);
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';

        updateLanguage(currentLang);
        localStorage.setItem('language', currentLang);
        stopTyping()
    });
}


async function updateLanguage(lang) {
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
    
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = lang === 'pt' ? `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M30,5v-0.082c-1.894,-0.595 -3.909,-0.918 -6,-0.918c-11.046,0 -20,8.954 -20,20c0,0.675 0.036,1.342 0.101,2h25.899z" fill="#4154ba"></path><path d="M30.223,5c-0.076,-0.025 -0.147,-0.058 -0.223,-0.082v0.082z" fill="none"></path><path d="M30,11h9.18c-0.957,-1.116 -2.038,-2.117 -3.217,-3h-5.963z" fill="#eceff1"></path><path d="M43.899,26h-13.899h-25.899c0.102,1.028 0.303,2.024 0.555,3h38.689c0.251,-0.976 0.452,-1.972 0.554,-3z" fill="#eceff1"></path><path d="M38.271,38h-28.542c1.127,1.149 2.398,2.149 3.773,3h20.996c1.375,-0.851 2.646,-1.851 3.773,-3z" fill="#eceff1"></path><path d="M42.325,32h-36.65c0.459,1.05 1.005,2.053 1.63,3h33.39c0.625,-0.947 1.17,-1.95 1.63,-3z" fill="#eceff1"></path><path d="M30,17h12.716c-0.391,-1.044 -0.861,-2.047 -1.413,-3h-11.303z" fill="#eceff1"></path><path d="M30,23h13.95c-0.051,-1.02 -0.153,-2.026 -0.351,-3h-13.599z" fill="#eceff1"></path><path d="M30,8h5.964c-1.723,-1.29 -3.651,-2.316 -5.741,-3h-0.223z" fill="#f44336"></path><path d="M30,14h11.303c-0.617,-1.066 -1.326,-2.07 -2.122,-3h-9.181z" fill="#f44336"></path><path d="M30,20h13.598c-0.21,-1.034 -0.52,-2.03 -0.883,-3h-12.715z" fill="#f44336"></path><path d="M30,26h13.899c0.065,-0.658 0.101,-1.325 0.101,-2c0,-0.338 -0.034,-0.667 -0.05,-1h-13.95z" fill="#f44336"></path><path d="M43.344,29h-38.688c0.266,1.033 0.599,2.039 1.02,3h36.649c0.42,-0.961 0.753,-1.967 1.019,-3z" fill="#f44336"></path><path d="M40.695,35h-33.39c0.711,1.078 1.523,2.082 2.424,3h28.543c0.9,-0.918 1.712,-1.922 2.423,-3z" fill="#f44336"></path><path d="M13.502,41c3.054,1.89 6.642,3 10.498,3c3.856,0 7.444,-1.11 10.498,-3z" fill="#f44336"></path><path d="M10.25,13l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M14.25,13l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M6.25,15.488l0.93,0.512l-0.18,-1.086l0.75,-0.77l-1.035,-0.156l-0.004,-0.01c-0.33,0.568 -0.633,1.153 -0.907,1.755z" fill="#ffffff"></path><path d="M18.25,13l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M22.25,13l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M26,13l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M10.25,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M14.25,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M18.25,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M6.25,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M22.25,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M26,21l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M11.25,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M15.25,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M7.25,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M19.25,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M23.25,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M27,17l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M11.25,9l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M15.25,9l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M19.25,9l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M23.25,9l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M27,9l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M15.18,8l-0.18,-1.086l0.75,-0.77l-0.551,-0.083c-0.589,0.289 -1.16,0.606 -1.715,0.95l-0.164,0.989l0.93,-0.512z" fill="#ffffff"></path><path d="M18.25,5l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M22.25,5l0.465,0.988l1.035,0.156l-0.75,0.77l0.18,1.086l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path><path d="M26,5l0.465,0.988l1.035,0.157l-0.75,0.77l0.18,1.085l-0.93,-0.512l-0.93,0.512l0.18,-1.086l-0.75,-0.77l1.035,-0.156z" fill="#ffffff"></path></g></g></svg>` : `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><circle cx="24" cy="24" r="20" fill="#49a44c"></circle><path d="M42,24l-18,12l-18,-12l18,-12z" fill="#ffeb3b"></path><path d="M31,24c0,3.867 -3.133,7 -7,7c-3.867,0 -7,-3.133 -7,-7c0,-3.867 3.133,-7 7,-7c3.867,0 7,3.133 7,7z" fill="#3f51b5"></path><path d="M17.805,20.746c-0.34,0.645 -0.574,1.348 -0.699,2.09c2.254,-0.277 8.379,-0.563 13.535,3.375c0.23,-0.695 0.359,-1.438 0.359,-2.211c0,0 0,-0.004 0,-0.008c-4.941,-3.347 -10.344,-3.48 -13.195,-3.246z" fill="#ffffff"></path></g></g></svg>`;
    }
    setTimeout(() => {
        initTypingEffect();
    }, 100);
}


function getCurrentLang() {
    return currentLang;
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initLanguageToggle, updateLanguage, getCurrentLang, translations };
}
