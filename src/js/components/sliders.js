import Swiper from "swiper/bundle";
const heroslider = new Swiper(".hero__slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".slider-control__btn--next",
    prevEl: ".slider-control__btn--prev",
  },
  effect: "fade",
  speed: 2000,
  lazy: true,
  autoplay: {
    delay: 7000,
  },
  on: {
    slideChangeTransitionStart: () => {
      moveBg();
    },
  },
});


const popularImagesSlider = new Swiper(".slider-popular__images", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".popular-slider-btn--next",
    prevEl: ".popular-slider-btn--prev",
  },
  loop: true,
  effect: "fade",
  lazy: true,

});
const popularContentSlider = new Swiper(".slider-popular__content", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".popular-slider-btn--next",
    prevEl: ".popular-slider-btn--prev",
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

});
const nextButtonsPopular = document.querySelectorAll('.popular-slider-btn--next')
const prevButtonsPopular = document.querySelectorAll('.popular-slider-btn--prev')

nextButtonsPopular.forEach(el => el.addEventListener('click', () => {
  popularContentSlider.slideNext()
  popularImagesSlider.slideNext()
}))
prevButtonsPopular.forEach(el => el.addEventListener('click', () => {
  popularContentSlider.slidePrev()
  popularImagesSlider.slidePrev()
}))

const heroSlider = document.querySelector(".hero__slider");
const moveBg = () => {
  heroSlider
    .querySelectorAll(".hero__slide")
    .forEach((item) => item.classList.remove("move-background"));
  heroSlider
    .querySelector(".swiper-slide-active")
    .querySelector(".hero__slide")
    .classList.add("move-background");
};

moveBg();

// office__slider
const officeSlider = new Swiper(".office__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 8,
});
const gallerySliderMini = new Swiper(".gallery__slider-mini", {
  slidesPerView: "auto",
  spaceBetween: 5,
});
const gallerySlider = new Swiper(".gallery__slider", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery__btn--next",
    prevEl: ".gallery__btn--prev",
  },
  thumbs: {
    swiper: gallerySliderMini,
  },
});


const responsibilitySlider = new Swiper(".responsibility__items", {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
})

document.querySelectorAll('.res-control-btn').forEach(el => {
  el.addEventListener('click', () => {
    responsibilitySlider.slideNext()
  })
})
