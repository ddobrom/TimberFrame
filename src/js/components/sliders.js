import {Swiper} from "swiper/bundle";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Thumbs, Autoplay, Pagination]);

const heroSlider = document.querySelector(".hero__slider");

const moveBg = () => {
  const slides = heroSlider.querySelectorAll(".hero-slide__image");
  slides.forEach((item) => (item.style.transform = null));
  const activeSlide = heroSlider
    .querySelector(".swiper-slide-active")
    .querySelector(".hero-slide__image");
  activeSlide.style.transform = "translate(-45%, -50%)";
};


const heroslider = new Swiper(".hero__slider", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".slider-control__btn--next",
    prevEl: ".slider-control__btn--prev",
  },
  effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },

  on: {
    slideChangeTransitionStart: () => {
      requestAnimationFrame(moveBg);
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
  fadeEffect: {
    crossFade: true,
  },
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
const nextButtonsPopular = document.querySelectorAll(
  ".popular-slider-btn--next"
);
const prevButtonsPopular = document.querySelectorAll(
  ".popular-slider-btn--prev"
);

nextButtonsPopular.forEach((el) =>
  el.addEventListener("click", () => {
    popularContentSlider.slideNext();
    popularImagesSlider.slideNext();
  })
);
prevButtonsPopular.forEach((el) =>
  el.addEventListener("click", () => {
    popularContentSlider.slidePrev();
    popularImagesSlider.slidePrev();
  })
);

if (heroSlider) {
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(moveBg)
  })
}

// office__slider
const officeSlider = new Swiper(".office__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 8,
});
const gallerySliderMini = new Swiper(".gallery__slider-mini", {
  slidesPerView: "auto",
  spaceBetween: 5,
  on: {
    touchEnd: function (s, e) {
      let range = 5;
      let diff = (s.touches.diff = s.isHorizontal()
        ? s.touches.currentX - s.touches.startX
        : s.touches.currentY - s.touches.startY);
      if (diff < range || diff > -range) s.allowClick = true;
    },
  },
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
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const builtHouseSlide = new Swiper(".built-houses__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      spaceBetween: 11,
    },
    768: {
      spaceBetween: 30,
    },
  },
});

// const productSliders = document.querySelectorAll(".product__slider");
const initProductSliders = (productSliders) => {
  productSliders.forEach((el) => {
    new Swiper(el, {
      slidesPerView: "auto",
      pagination: {
        el: ".product-slider__pagination",
      },
    });

    el.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const pagination = el.querySelector(".product-slider__pagination");

      pagination.classList.add("product-slider__pagination--active");
    });
    el.addEventListener("touchend", (e) => {
      e.preventDefault();
      const pagination = el.querySelector(".product-slider__pagination");
      setTimeout(() => {
        pagination.classList.remove("product-slider__pagination--active");
      }, 500);
    });
  });
};
export {responsibilitySlider}
