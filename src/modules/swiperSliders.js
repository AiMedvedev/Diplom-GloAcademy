import Swiper, {Navigation} from 'swiper';

export const swiperBenefits = () => {
 
    const swiper = new Swiper('.mySwiper', {
        cssMode: true,
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetweenSlides: 10,
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        },
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        }
    });
}

export const swiperServices = () => {

    const swiper = new Swiper('.swiperServices', {
        cssMode: true,
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetweenSlides: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        loop: true
    });
}