"use strict";

const bootScreen = document.querySelector('#boot-screen');
const enterButton = document.querySelector('#enter-button');
console.log('MIRIUM.HIDD3N // TYPESCRIPT ONLINE');
if (!bootScreen) {
    console.error('Boot screen was not found.');
}
else {
    console.log('Boot screen detected.');
    window.setTimeout(() => {
        bootScreen.classList.add('hidden');
        console.log('Boot sequence complete.');
    }, 3000);
}
enterButton?.addEventListener('click', () => {
    document.querySelector('#signal')?.scrollIntoView({
        behavior: 'smooth'
    });
});
