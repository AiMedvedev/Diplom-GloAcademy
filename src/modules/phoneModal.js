export const phoneModal = () => {
    const body = document.querySelector('body');
    const phoneRequestBtn = document.querySelector('.button');
    const overlay = document.querySelector('.overlay');
    const phoneRequestModal = document.querySelector('.header-modal');
    const phoneRequestModalCloseBtn = phoneRequestModal.querySelector('.header-modal__close');

    phoneRequestBtn.addEventListener('click', () => {
        phoneRequestModal.style.display = 'flex';
        body.classList.add('no-scroll');
        overlay.style.display = 'flex';
    });

    phoneRequestModalCloseBtn.addEventListener('click', () => {
        phoneRequestModal.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('no-scroll');
    });
}