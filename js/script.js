'use strict';

const btn = document.querySelector('.header_burger'),
    menu = document.querySelector('.header_menu');

btn.addEventListener('click', (e) => {
    menu.classList.toggle('header_menu_active');
    btn.classList.toggle('header_burger_active');
});

// document.body.addEventListener('click', (e) => {
//     if (!e.target.closest('.header_menu')) {
//         menu.classList.remove('header_menu_active');
//         btn.classList.remove('header_burger_active');
//     }
// });
