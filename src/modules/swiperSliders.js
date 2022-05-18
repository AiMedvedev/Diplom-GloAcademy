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
            nextEl: ".benefits__arrow--left",
            prevEl: ".benefits__arrow--right",
        },
        loop: true
    });
}

export const swiperServices = () => {

    const swiper = new Swiper('.swiperServices', {
        cssMode: true,
        modules: [Navigation],
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetweenSlides: 10,
            }
        },
        navigation: {
            nextEl: ".services__arrow--left",
            prevEl: ".services__arrow--right",
        },
        loop: true
    });
}