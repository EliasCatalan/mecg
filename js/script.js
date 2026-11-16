// ============================================
// CURRENT YEAR & YEARS OF EXPERIENCE
// ============================================
const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

// Años completos de experiencia desde marzo de 2015 (el texto dice "más de X años")
const yearsExperienceElement = document.getElementById('years-experience');
if (yearsExperienceElement) {
    const careerStart = new Date(2015, 2, 1); // meses base 0: 2 = marzo
    const now = new Date();
    let years = now.getFullYear() - careerStart.getFullYear();
    if (now < new Date(now.getFullYear(), careerStart.getMonth(), careerStart.getDate())) {
        years--;
    }
    yearsExperienceElement.textContent = years;
}

// ============================================
// NAVIGATION: SMOOTH SCROLL + ACTIVE STATE
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function setActiveNavLink(targetHash) {
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === targetHash;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        if (this.classList.contains('nav-link')) {
            setActiveNavLink(href);
        }

        target.scrollIntoView({
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
            block: 'start'
        });

        // Mover el foco a la sección para que Tab continúe desde ahí
        // (preventDefault anula ese comportamiento nativo del ancla).
        target.focus({ preventScroll: true });

        // Mantener la URL sincronizada sin agregar entradas al historial.
        history.replaceState(null, '', href);
    });
});

// Marca como activa la primera sección (en orden del documento) que esté
// dentro de la franja entre la navegación sticky y la mitad de la pantalla.
const visibleSections = new Set();
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
        } else {
            visibleSections.delete(entry.target.id);
        }
    });

    const current = [...sections].find(section => visibleSections.has(section.id));
    if (current) {
        setActiveNavLink(`#${current.id}`);
    }
}, { rootMargin: '-130px 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollToTopBtn = document.getElementById('scroll-to-top');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👨‍💻 Elias Catalán García', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%c🔗 GitHub: https://github.com/EliasCatalan', 'font-size: 12px; color: #58a6ff;');
console.log('%c📧 Email: ecatalan.code@gmail.com', 'font-size: 12px; color: #58a6ff;');
