const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggle = document.getElementById('theme-toggle');

document.getElementById("theme-toggle").addEventListener("click", function () {
    const modoOscuro = themeToggle.dataset.modoOscuro === 'true' ? false : true;
    updateTheme(modoOscuro);
});

const updateTheme = (modoOscuro) => {
    if (modoOscuro) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Modo claro ☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = 'Modo oscuro 🌙';
    }

    themeToggle.dataset.modoOscuro = modoOscuro;
}

darkModeQuery.addListener(updateTheme);
updateTheme(darkModeQuery.matches); // Estado inicial