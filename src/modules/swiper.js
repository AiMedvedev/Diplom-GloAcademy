import Swiper, {Navigation} from 'swiper';

export const swiper = () => {
 
    const benefits = new Swiper('.mySwiper', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetweenSlides: 30,
        /* breakpoint: {
            576: {
                slidesPerView: 1
            }
        }, */
        centeredSlides: true,
        navigation: {
            nextEl: ".benefits__arrow--left",
            prevEl: ".benefits__arrow--right",
        },
    });

    const services = new Swiper('.swiperServices', {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetweenSlides: 20,
        /* breakpoint: {
            576: {
                slidesPerView: 1
            }
        }, */
        centeredSlides: true,
        navigation: {
            nextEl: ".services__arrow--left",
            prevEl: ".services__arrow--right",
        },
    });
}