const navItems = document.querySelector('.navitems');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('#kapat');

menu.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    navItems.classList.toggle('active');
});
