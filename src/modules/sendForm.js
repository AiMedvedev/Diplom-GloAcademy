export const sendForm = () => {

    const forms = document.querySelectorAll('.order-form.rf, .box-modal_body.rf');
    

    forms.forEach(form => {
        form.addEventListener('submit', (e => {
            e.preventDefault();
            
            const userName = form.querySelector('input[name="fio"]');
            const userPhone = form.querySelector('input[name="phone"]');
            const body = document.querySelector('.balkony');
            const replyModal = document.querySelector('.box-modal#responseMessage');
            const closeBtn = replyModal.querySelector('.btn.btn-success.fancyClose');
            let orderValue;

            const data = {
                name: userName.value,
                phone: userPhone.value,
                orderPrice: orderValue
            };

            console.log(replyModal);

            if (body) {
                const total = document.getElementById('calc-total');
                orderValue = total.innerHTML;
            } else {
                orderValue = 0;
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .catch(error => error.message);

            userName.value = '';
            userPhone.value = '';
            
            replyModal.classList.add('show');

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                replyModal.classList.remove('show');
            })
        }));
    });
}