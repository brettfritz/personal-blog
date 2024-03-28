//toggle theme button

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle= document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
    });
});