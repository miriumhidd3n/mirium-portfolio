"use strict";
console.log('MIRIUM.HIDD3N // SYSTEM ONLINE');
const bootScreen = document.querySelector('#boot-screen');
const enterButton = document.querySelector('#enter-button');
/*
 * BOOT SEQUENCE
 */
window.addEventListener('load', () => {
    setTimeout(() => {
        bootScreen?.classList.add('hidden');
    }, 2400);
});
/*
 * ENTER BUTTON
 */
enterButton?.addEventListener('click', () => {
    document
        .querySelector('#signal')
        ?.scrollIntoView({
        behavior: 'smooth'
    });
});
