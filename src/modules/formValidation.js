export const validation = () => {
    const body = document.querySelector('.balkony');
    const nameInputs = document.querySelectorAll('input[name="fio"]');
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    const area = document.getElementById('calc-input');

    nameInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, "")
        });
    });

    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9 +]/g, "");
        });
    });

    if (body) {
        area.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
        });
    }
}
        