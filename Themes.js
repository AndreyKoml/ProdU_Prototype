
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const isDark = themeStyle.getAttribute('href') === 'dark-style.css';
    
    if (isDark) {
        themeStyle.setAttribute('href', 'style.css');
        localStorage.setItem('theme', 'light');
    } else {
        themeStyle.setAttribute('href', 'dark-style.css');
        localStorage.setItem('theme', 'dark');
    }
}

// Загрузка сохраненной темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.getElementById('theme-style').setAttribute('href', `${savedTheme}-theme.css`);
    document.getElementById('checkbox2').checked = savedTheme === 'dark';
    
    // Назначение обработчика для переключателя
    document.getElementById('checkbox2').addEventListener('change', toggleTheme);
 
});