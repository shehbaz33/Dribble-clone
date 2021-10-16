let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    console.log('first click');
    menu.classList.toggle('inactive');
})