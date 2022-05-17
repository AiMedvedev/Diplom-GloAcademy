export const sendForm = (someElem = []) => {
    const submitBtns = document.querySelectorAll('button[type="submit"]');  // formId

    const validate = list => {
        let success = true;
        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(answer => console.log(answer))
        
    }

    const submitForm = () => {
        const forms = document.querySelectorAll('.order-form.rf');
        
        forms.forEach(form => {
            const formElements = form.querySelectorAll('input');
            const formData = new FormData(form);
            const formBody = {};
            
            formData.forEach((value, key) => {
                formBody[key] = value;
            });
            
            const element = document.getElementById(someElem.id);
            
            if (someElem.type === 'block') {
                formBody[someElem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[someElem.id] = element.value;
            }

            if (validate(formElements)) {
                sendData(formBody)
                .then(data => {
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => error.message);
            } else {
                alert('Данные не валидны');
            }   
        });  
    }

    try {
        submitBtns.forEach(btn => {
            if (!btn) {
                throw new Error('Верните форму на место, пожалуйста!')
            }
    
            btn.addEventListener('submit', (event) => {
                event.preventDefault();
                //submitForm();
                console.log('data sent');
            })
        })
        
    } catch (error) {
        console.log(error.message)
    }
} 