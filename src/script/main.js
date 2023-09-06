document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.replace('-translate-x-full', 'translate-x-0')
});
document.querySelector('.toggle-close').addEventListener('click', () => {
    document.querySelector('nav').classList.replace('translate-x-0', '-translate-x-full')
});