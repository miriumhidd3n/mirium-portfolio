console.log('MIRIUM.HIDD3N // SYSTEM ONLINE');
const bootScreen =
    document.querySelector<HTMLElement>('#boot-screen');

const enterButton =
    document.querySelector<HTMLButtonElement>('#enter-button');


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