export const servicesModal = () => {
    const body = document.querySelector('.okna');
    const servicesBlock = document.getElementById('services');
    const servicesRequestBtns = servicesBlock.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');
    const servicesModalCloseBtn = servicesModal.querySelector('.services-modal__close');
    const overlay = document.querySelector('.overlay');

    servicesRequestBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            servicesModal.style.display = 'flex';
            overlay.style.display = 'flex';
            body.classList.add('no-scroll');
        })
    });

    servicesModalCloseBtn.addEventListener('click', () => {
        servicesModal.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('no-scroll');
    })
}