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
// CONSOLE MESSAGE
// ============================================
console.log('%c👨‍💻 Elias Catalán García', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cFull-Stack Developer con +10 años de experiencia', 'font-size: 14px; color: #8b949e;');
console.log('%c🔗 GitHub: https://github.com/EliasCatalan', 'font-size: 12px; color: #58a6ff;');
console.log('%c📧 Email: ecatalan.code@gmail.com', 'font-size: 12px; color: #58a6ff;');