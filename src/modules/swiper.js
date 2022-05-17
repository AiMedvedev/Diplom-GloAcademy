import Swiper, {Navigation} from 'swiper';

export const swiperBenefits = () => {
 
    const benefits = new Swiper('.mySwiper', {
        cssMode: true,
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetweenSlides: 10,
        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            }
        },
        navigation: {
            nextEl: ".benefits__arrow--left",
            prevEl: ".benefits__arrow--right",
        },
    });
}

export const swiperServices = () => {

    const services = new Swiper('.swiperServices', {
        cssMode: true,
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetweenSlides: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            }
        },
        navigation: {
            nextEl: ".services__arrow--left",
            prevEl: ".services__arrow--right",
        },
    });
}