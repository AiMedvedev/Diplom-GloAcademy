import { animate } from './helpers';

export const calculate = () => {
    const body = document.querySelector('.balkony');
    const calcBlock = document.getElementById('calc');
    const area = document.getElementById('calc-input');
    const total = document.getElementById('calc-total');
    const type = document.getElementById('calc-type');
    const material = document.getElementById('calc-type-material');

    const countCalc = () => {

        const calcTypeValue = +type.options[type.selectedIndex].value;
        const calcMaterialValue = +material.options[material.selectedIndex].value;
        const calcAreaValue = +area.value;
        let totalValue;

        if (type.value && material.value && area.value) {
            totalValue = calcTypeValue * calcMaterialValue * calcAreaValue;
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    
                    total.textContent = Math.floor(progress * totalValue);
                }
            });
        } else {
            totalValue = 0;
        }
        
        total.textContent = totalValue;
    }
    if (body) {
        calcBlock.addEventListener('change', (e) => {
            if ((e.target === type) || (e.target === material) || (e.target === area)) {
                countCalc();
            }
        });
    }
}