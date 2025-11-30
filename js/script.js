// ============================================
// CURRENT YEAR & EXPERIENCE
// ============================================
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Calcular años de experiencia desde 2015
const startYear = 2015;
const yearsOfExperience = currentYear - startYear;
document.getElementById('years-experience').textContent = yearsOfExperience;

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar preferencia guardada o sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplicar tema inicial
if (savedTheme) {
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        updateThemeButton(false);
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        updateThemeButton(true);
    }
} else {
    // Por defecto modo oscuro (como GitHub)
    if (!prefersDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        updateThemeButton(false);
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        updateThemeButton(true);
    }
}

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    const isDark = body.classList.contains('dark-mode');
    
    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        updateThemeButton(false);
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateThemeButton(true);
    }
});

function updateThemeButton(isDark) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (isDark) {
        icon.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
        icon.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
}

// ============================================
// CURRENT TIME UPDATE
// ============================================
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes} (UTC -03:00)`;
    }
}

// Actualizar tiempo cada minuto
updateCurrentTime();
setInterval(updateCurrentTime, 60000);

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// CARD HOVER EFFECTS
// ============================================
const cards = document.querySelectorAll('.project-card, .experience-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// EXTERNAL LINKS
// ============================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Actualizar al hacer scroll
window.addEventListener('scroll', updateActiveNavLink);

// Actualizar al cargar la página
window.addEventListener('load', updateActiveNavLink);

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll suave al inicio
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👨‍💻 Elias Catalán García', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cFull-Stack Developer con +10 años de experiencia', 'font-size: 14px; color: #8b949e;');
console.log('%c🔗 GitHub: https://github.com/EliasCatalan', 'font-size: 12px; color: #58a6ff;');
console.log('%c📧 Email: ecatalan.code@gmail.com', 'font-size: 12px; color: #58a6ff;');