export const phoneModal = () => {
    const body = document.querySelector('.okna');
    const phoneRequestBtn = document.querySelector('.button');
    const phoneRequestModal = document.querySelector('.header-modal');
    const phoneRequestModalCloseBtn = phoneRequestModal.querySelector('.header-modal__close');

    phoneRequestBtn.addEventListener('click', () => {
        phoneRequestModal.style.display = 'flex';
        body.classList.add('no-scroll');
    });

    phoneRequestModalCloseBtn.addEventListener('click', () => {
        phoneRequestModal.style.display = 'none';
        body.classList.remove('no-scroll');
    });
}