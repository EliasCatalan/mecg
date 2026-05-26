// ============================================
// CURRENT YEAR & EXPERIENCE
// ============================================
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

// Calcular años de experiencia desde 2015
const startYear = 2015;
const yearsOfExperience = currentYear - startYear;
const yearsOfExperienceElement = document.getElementById('years-experience');
if (yearsOfExperienceElement) {
    yearsOfExperienceElement.textContent = yearsOfExperience;
}

// ============================================
// THEME TOGGLE (disabled - dark mode only)
// ============================================
// Forzar dark mode y limpiar preferencia guardada
localStorage.removeItem('theme');
document.body.classList.add('dark-mode');
document.body.classList.remove('light-mode');


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
function setActiveNavLink(targetHash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === targetHash);
    });
}

function isValidSectionHash(hash) {
    return Boolean(hash) && hash !== '#' && document.querySelector(hash);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();

            if (this.classList.contains('nav-link')) {
                setActiveNavLink(href);
            }

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Mantener la URL sincronizada con la sección seleccionada.
                history.replaceState(null, '', href);
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
    let currentSection = sections[0]?.getAttribute('id') || '';
    const activationOffset = 130;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop - activationOffset <= 0) {
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

// Respetar hash inicial (ej: abrir directo en #projects)
window.addEventListener('load', () => {
    if (isValidSectionHash(window.location.hash)) {
        setActiveNavLink(window.location.hash);
    }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollToTopBtn = document.getElementById('scroll-to-top');

if (scrollToTopBtn) {
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
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👨‍💻 Elias Catalán García', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cFull-Stack Developer con +10 años de experiencia', 'font-size: 14px; color: #8b949e;');
console.log('%c🔗 GitHub: https://github.com/EliasCatalan', 'font-size: 12px; color: #58a6ff;');
console.log('%c📧 Email: ecatalan.code@gmail.com', 'font-size: 12px; color: #58a6ff;');