'use strict';

const btn = document.querySelector('.header_burger'),
    menu = document.querySelector('.header_menu');

btn.addEventListener('click', (e) => {
    menu.classList.toggle('header_menu_active');
    btn.classList.toggle('header_burger_active');
});
