import Lenis from "@studio-freight/lenis";
import catalogueData from "./catalogueData";

import { Swiper } from "swiper/bundle";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Thumbs, Autoplay, Pagination]);

const lenis = new Lenis({
  lerp: 0.07,
  wheelMultiplier: 0.7,
  touchMultiplier: 0.7,
  smooth: true,
  normalizeWheel: false,
  infinite: false,
  breakpoints: [0, 768, 1201],
});

const implemObjectsSection = document.querySelector('.implemObjects-section')

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


let preloader = document.querySelector('.preloader')

window.addEventListener('DOMContentLoaded', () => {
  if(preloader){
      lenis.stop()
    preloader.querySelector('.preloader__row').style.animation = "none"
    preloader.querySelector('.preloader__row').style.maxWidth = "none"
    preloader.querySelector('.preloader__text').style.transform = "translateX(0%)"
    preloader.style.maxHeight = preloader.scrollHeight + 'px'
    setTimeout(() => {
      preloader.style.maxHeight = 0 + 'px'
    }, 3000)

    setTimeout(()=>{
      document.body.style.overflow = null
      onResize()
      lenis.start()
      ScrollTrigger.update()
      rellax.refresh()
      preloader.remove()
      Swiper.update()
    }, 3500)
  } else {
    onResize()
      lenis.start()
      ScrollTrigger.update()
  }
})





// const heroSlider = document.querySelector(".hero__slider");

// const moveBg = () => {
//   const slides = heroSlider.querySelectorAll(".hero-slide__image");
//   slides.forEach((item) => (item.style.transform = null));
//   const activeSlide = heroSlider
//     .querySelector(".swiper-slide-active")
//     .querySelector(".hero-slide__image");
//   activeSlide.style.transform = "translate(-45%, -50%)";
// };

const heroslider = new Swiper(".hero__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-control__btn--next",
    prevEl: ".slider-control__btn--prev",
  },
  loop: true,
  effect: "fade",
  speed: 2000,
  autoplay: {
    delay: 6300,
    disableOnInteraction: false,
  },

});

let popularImages = null;
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
  on: {

    slideChange : () => {
      popularImages = document.querySelectorAll(".popular__img img")
      popularImages.forEach(img => {
        img.style.transform = null
        if(img.closest('.swiper-slide-visible')){
          img.style.transform = 'scale(1.1)'
        }
      })
    }
  }
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

if(popularImages && popularImages.length > 0){
  const popularImgObserver = new IntersectionObserver( (entries, observer) => {
    entries.forEach(el => {
      if(el.isIntersecting && el.intersectionRatio >= 0.5 && el.target.closest('.swiper-slide-active')){
        el.target.style.transform = 'scale(1.1)'
      } else {
        el.target.style.transform = null

      }
    })
  }, {
    threshold: 0.5
  })
  popularImages.forEach(el => {
    popularImgObserver.observe(el)

  })
}
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

// if (heroSlider) {
//   window.addEventListener("DOMContentLoaded", () => {
//     requestAnimationFrame(moveBg);
//     setTimeout(() => {
//       rellax.refresh()
//     }, 50)
//   });
// }

// office__slider
const officeSlider = new Swiper(".office__slider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 8,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  // speed: 5000,
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

const aboutProdSlider = new Swiper(".about-prod__slider", {
  slidesPerView: 2.4,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.slider-control__btn--prev',
    nextEl: '.slider-control__btn--next',
  }
});

const builtHouseSlider = new Swiper(".built-houses__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  breakpoints: {
    320: {
      spaceBetween: 11,
    },
    768: {
      spaceBetween: 30,
    },
  },
});
// следим за автоплеем слайдера снизу
// let builtObserver = new IntersectionObserver((entries, observer) => {
//   if(entries[0].isIntersecting){
//     builtHouseSlider.autoplay.start()
//   } else {
//     builtHouseSlider.autoplay.stop()
//   }
// }, {
//   threshold: 0.1,
// })
// builtObserver.observe(document.querySelector('.built-houses'))


window.addEventListener("refresh", () => {
  builtHouseSlider.update();
});

const itemProductSliderThumbs = new Swiper(".item-product__thumbs", {
  slidesPerView: 3,
  spaceBetween: 8,
});

const itemProductSlider = new Swiper(".item-product__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".item-product-next",
    prevEl: ".item-product-prev",
  },
  loop: true,
  thumbs: {
    swiper: itemProductSliderThumbs,
  },
});

// const productSliders = document.querySelectorAll(".product__slider");
const productSlidersArray = []
const initProductSliders = (productSliders) => {
  productSliders.forEach((el,i) => {

      new Swiper(el, {
        slidesPerView: "auto",
        pagination: {
          el: `.product-slider__pagination`,
        },
        navigation : {
          prevEl : `.product-slider-btn--prev`,
          nextEl : `.product-slider-btn--next`
        },
        loop: true,
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

import AOS from "aos";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 150,
  delay: 0,
  duration: 500,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => AOS.refresh(), 50);
});



import { ScrollTrigger, CSSRulePlugin } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

// services section

const itemsTexts = document.querySelectorAll(".services-section__text");

function onResize() {
  ScrollTrigger.refresh(true);
  ScrollTrigger.update();
}
function preloadImage(url)
{
  console.log(url);
    var img=new Image();
    img.src=url;
}
if (itemsTexts.length > 0) {
  const textItems = document.querySelectorAll(".services-section__item");
  const imageItems = document.querySelectorAll(".services-section__item-image");
  for(let i = 0; i < imageItems.length; i++){
      if(imageItems[0].querySelector('img').src){
      preloadImage(imageItems[i].querySelector('source').srcset)
    }
  }
    function changeSlide() {
      let current = 0;
      let previous = 0;
      textItems.forEach((el, index) => {
        if (el.classList.contains("active")) {
          current = index;
        }
      });
      imageItems.forEach((el) => el.style.opacity = 0);
      imageItems[current].style.opacity = 1;
    }
  ScrollTrigger.addEventListener("refreshInit", onResize);
  const line = document.querySelector(".services-section__line");
  const firstItem = document.querySelector(".services-section__item");

  changeSlide();
  window.addEventListener(
    "scroll",
    () => {
      itemsTexts.forEach((el) => {
        if (
          el.getBoundingClientRect().bottom <
          line.getBoundingClientRect().bottom
        ) {
          el.closest(".services-section__item").classList.add("active");
        } else {
          if (el.closest(".services-section__item") != firstItem) {
            el.closest(".services-section__item").classList.remove("active");
          }
        }
      });
      changeSlide();
    }

  );
  changeSlide();
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    let t1 = gsap.timeline();
    t1.fromTo(
      ".services-section__list",
      {
        y: () =>
          -document.querySelector(".services-section__item").offsetHeight,
      },
      {
        y: () =>
          -document.querySelector(".services-section__list").scrollHeight,
      }
    );
    ScrollTrigger.create({
      animation: t1,
      trigger: ".services-section__line",
      start: "center center",
      end: "+=200%",
      scrub: 0.1,
      pin: ".services-section__container",
      invalidateOnRefresh: true,
    });
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    firstItem.classList.add("active");
    let offsetSize = 0;
    let scrollOffset = null
    const items = document.querySelectorAll('.services-section__item')
    for(let i = 0; i < Math.ceil(items.length); i++){
      offsetSize += items[i].offsetHeight
    }
    scrollOffset = document.querySelector('.services-section__container').scrollHeight - offsetSize
    ScrollTrigger.create({
      trigger: ".services-section__container",
      start: "top top+=80px",
      end: "bottom bottom",
      scrub: 0.1,
      pin: ".services-section__left",
      invalidateOnRefresh: true,
    });
  }
}

// ScrollTrigger.refresh();

// background parallax
setTimeout(() => {
  if (document.querySelector(".parallax")) {
    gsap.registerPlugin(CSSRulePlugin);
    let rule = CSSRulePlugin.getRule(".parallax__wrapper::before");
    const timeLine1 = gsap.timeline();
    timeLine1
      .fromTo(".parallax__body", { scale: 0.5 }, { scale: 1 })
      .set(rule, { cssRule: { opacity: 1 } });

    ScrollTrigger.create({
      animation: timeLine1,
      trigger: ".parallax__wrapper",
      start: "top top",
      end: "+=20%",
      scrub: 0.2,
      pin: true,
      invalidateOnRefresh: true,
    });
  }
}, 0);

// shadow transition
if (document.querySelector(".shadow")) {
  const shadowAnim = gsap.timeline();
  shadowAnim.fromTo(
    ".shadow__body",
    { backgroundColor: "#02090e" },
    { backgroundColor: "#e4e4e4" }
  );
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger: ".eco-house",
    start: "bottom-=25% top",
    end: "+=500px",
    scrub: 0.5,
    invalidateOnRefresh: true,
  });
}

import Rellax from "rellax";

try {
  var rellax = new Rellax(".rellax", {
    breakpoints: [768, , 1201],
    center: true,
  });
} catch (e) {
  console.log(e);
}

const circles = document.querySelectorAll(".progress");
if (circles) {
  const setCirclesProgress = () => {
    circles.forEach((el) => {
      let percentageProgress = parseInt(el.dataset.percents);
      let radius =
        parseInt(window.getComputedStyle(el.closest(".circle-img")).width) / 2;
      let circleLength = 2 * Math.PI * radius + 5;
      el.setAttribute("stroke-dasharray", circleLength);
      el.setAttribute(
        "stroke-dashoffset",
        circleLength - (circleLength * percentageProgress) / 100
      );
    });
  };
  window.addEventListener("resize", () => {
    setCirclesProgress();
  });
  setCirclesProgress();
}

import { responsibility } from "./../_vars";
window.addEventListener("DOMContentLoaded", () => {
  if (responsibility) {
    const responsItems = document.querySelector(".responsibility__items");
    const resLines = responsibility.querySelectorAll(".responsibility__line");
    const resTriggers = responsibility.querySelectorAll(".responsibility__trigger");
    const resContainer = document.querySelector(".responsibility__wrapper");
    const setHeightOfWrapper = () => {
      resContainer.style.removeProperty("--wrapper-height");
      if(window.matchMedia("(min-width: 769px)").matches){
        resContainer.style.setProperty("--wrapper-height",resContainer.offsetHeight * 2.8 + "px");
      } else {
        resContainer.style.setProperty("--wrapper-height",resContainer.offsetHeight * 2 + "px");
      }
    };
    let offsetLines = [];
    function setOffsetLines() {
      offsetLines = [];
      resLines.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        offsetLines.push(
          elRect.y + (window.pageY || document.documentElement.scrollTop)
        );
      });
    }
    const thresholdsArr = [];
    for (let i = 0; i < 1.0; i += 0.2) {
      thresholdsArr.push(i);
    }
    const observer = new IntersectionObserver(
      (entries, options) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            setOffsetLines();
          }
        });
      },
      {
        threshold: thresholdsArr,
      }
    );
    const office = document.querySelector(".office");
    observer.observe(document.querySelector(".add"));
    observer.observe(responsibility);
    observer.observe(office);

    function getTopOfItems() {
      const rect = responsItems.getBoundingClientRect();
      let offsetItems =
        rect.y + (window.pageY || document.documentElement.scrollTop);
      return offsetItems;
    }
    let thresholdRes = []
    for(let i = 0; i < 1.0; i+= 0.05){
      thresholdRes.push(i)
    }

    let offset = null;
    const resObserver = new IntersectionObserver((entries, observer) => {
      offset = getTopOfItems();
      entries.forEach(entry => {
        if(entry.isIntersecting){
          offsetLines.forEach((el, index) => {
            if (offset > el) {
              responsibilitySlider.slideTo(index);
            }
          });
        }
      })
    }, {
      threshold: thresholdRes,
    })
    resLines.forEach(el => resObserver.observe(el))
    resTriggers.forEach(el => resObserver.observe(el))
    resObserver.observe(document.querySelector('.res__left'))
    // window.addEventListener("scroll", () => {
    //   offset = getTopOfItems();
    //   offsetLines.forEach((el, index) => {
    //     if (offset > el) {
    //       responsibilitySlider.slideTo(index);
    //     }
    //   });
    // });

    window.addEventListener("resize", () => {
      setHeightOfWrapper();
    });
    document.querySelectorAll(".res-control-btn").forEach((el) => {
      el.addEventListener("click", () => {
        const nextIndex = responsibilitySlider.activeIndex % 5;
        lenis.scrollTo(`.responsibility__line--${nextIndex + 1}`, {offset: 10});
      });
    });

    setHeightOfWrapper();
  }
});

window.onload = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.src) {
            entry.target.src = entry.target.dataset.imgSrc;
          }

          if (entry.target.dataset.imgSrcset) {
            entry.target.srcset = entry.target.dataset.imgSrcset;
          }
          if (entry.target.dataset.videoSrc) {
            entry.target.src = entry.target.dataset.videoSrc;
          }
          if(entry.target.dataset.srcBg){
            entry.target.style = `background-image: url(${entry.target.dataset.srcBg})`
          }
          observer.unobserve(entry.target);
          AOS.refresh();
          onResize();
        }
      });
    },
    { threshold: 0, rootMargin: "600px 0px" }
  );
  document
    .querySelectorAll(
      "img[data-img-src], source[data-img-srcset], video[data-video-src], [data-src-bg]"
    )
    .forEach((img) => observer.observe(img));


  let video = document.querySelectorAll("video");
  if (video && video.length > 0) {
    let videoObserver = new IntersectionObserver(
      (entries, opt) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.play();
          } else {
            el.target.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
      video.forEach(vid => {
        videoObserver.observe(vid);
      })
  }
};

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");
const fMenuBtn = document.querySelector(".favorites-btn");
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  fMenuBtn.classList.add("disabled");
  menu.classList.add("menu-active");
  menu.classList.remove("menu-disabled");
  document.body.style.overflow = "hidden";
});
const closeBtn = menu.querySelector(".menu__close-btn");
closeBtn.addEventListener("click", () => {
  menu.classList.add("menu-disabled");
  setTimeout(() => {
    menu.classList.remove("menu-active");
    fMenuBtn.classList.remove("disabled");
    document.body.style.overflow = null;
  }, 500);
});
// const fMenuBtn = document.querySelector('.favorites-btn')
const fMenu = document.querySelector(".favorites-menu");
// const menuBtn = document.querySelector('.menu-btn')
const mobileFavoritesMenu = document.querySelector(
  ".mobile-menu__btn--favorites"
);
// import lenis from "./smooth-scroll"
fMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuBtn.classList.add("disabled");
  fMenu.classList.add("menu-active");
  fMenu.classList.remove("menu-disabled");
  document.body.style.overflow = "hidden";
  // lenis.stop()
});
mobileFavoritesMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  menuBtn.classList.add("disabled");
  fMenu.classList.add("menu-active");
  fMenu.classList.remove("menu-disabled");
  document.body.style.overflow = "hidden";
  // lenis.stop()
});
const fcloseBtn = fMenu.querySelector(".menu__close-btn");

fcloseBtn.addEventListener("click", () => {
  fMenu.classList.add("menu-disabled");
  setTimeout(() => {
    fMenu.classList.remove("menu-active");
    menuBtn.classList.remove("disabled");
    document.body.style.overflow = null;
    lenis.start();
  }, 500);
});

if (fMenu.classList.contains("menu-active")) {
  document.body.style.overflow = "hidden";
  // lenis.stop()
}

import SimpleBar from "simplebar";
const wrapper = document.querySelector(".favorites-menu__wrapper");
const favtitle = document.querySelector(".favorites-menu__title");

new SimpleBar(document.getElementById("fav-scroll"));

window.matchMedia("(min-width: 769px)").matches
  ? (wrapper.style.maxHeight = `${
      document.documentElement.clientHeight - wrapper.offsetTop
    }px`)
  : (wrapper.style.maxHeight = `${
      document.documentElement.clientHeight - favtitle.offsetHeight
    }px`);

window.addEventListener("resize", () => {
  wrapper.style.maxHeight = `${
    document.documentElement.clientHeight - wrapper.offsetTop
  }px`;
});

import data from "./main-houses-data.js";

const favBtns = document.querySelectorAll(".btn--like");
const favMenuBtn = document.querySelector(".favorites-btn");
const favQuantity = document.querySelector(".favorites-menu__count");
const favBtnQuantity = document.querySelectorAll(".favorites-btn__quantity");
const favContent = document.querySelector(".favorites-content");

let randId = 1133521;

const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
if (localStorage.getItem("randId")) {
  randId = localStorage.getItem("randId");
}
favBtns.forEach((el) => {
  if (el.closest(".projects-card")) {
    el.closest(".projects-card").setAttribute("data-id", ++randId);
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let parent = self.closest(".projects-card");
      if (!self.classList.contains("active")) {
        let id = parent.dataset.id;
        let img = parent.querySelector(".projects-card__img").src;
        let srcset = parent.querySelector("source").getAttribute("srcset");
        let title = parent.querySelector(".projects-card__title").textContent;
        let link = parent
          .querySelector(".projects-card__more")
          .getAttribute("href");
        let info = {
          square: parent
            .querySelector(".projects-card__item--sq")
            .querySelector(".projects-card__figure").textContent,
          floors: parent
            .querySelector(".projects-card__item--fl")
            .querySelector(".projects-card__figure").textContent,
          bedrooms: parent
            .querySelector(".projects-card__item--bed")
            .querySelector(".projects-card__figure").textContent,
          bathrooms: parent
            .querySelector(".projects-card__item--bath")
            .querySelector(".projects-card__figure").textContent,
          place: parent
            .querySelector(".projects-card__item--pl")
            .querySelector(".projects-card__figure").textContent,
        };
        self.classList.add("active");
        favContent.insertAdjacentHTML(
          "afterbegin",
          generateFavoriteItem(img, srcset, title, info, link, id)
        );
        updateStorage();
        printQuantity();
      } else {
        deleteFav(parent);
      }
    });
  }

  if (el.closest(".hero")) {
    el.closest(".hero").setAttribute("data-id", ++randId);
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      if (!self.classList.contains("active")) {
        self.classList.add("active");
        let id = el.closest(".hero").dataset.id;
        let title = el
          .closest(".hero")
          .querySelector(".slide__title")
          .textContent.toLowerCase()
          .trim();

        favContent.insertAdjacentHTML(
          "afterbegin",
          generateFavoriteItem(
            data[title].img,
            data[title].srcset,
            data[title].title,
            data[title].info,
            data[title].link,
            id
          )
        );
        updateStorage();
        printQuantity();
      } else {
        deleteFav(el.closest(".hero"));
      }
    });
  }

  if (el.closest(".popular-card")) {
    el.closest(".popular-card").setAttribute("data-id", ++randId);
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      if (!self.classList.contains("active")) {
        self.classList.add("active");
        let id = el.closest(".popular-card").dataset.id;
        let title = el
          .closest(".popular-card")
          .querySelector(".popular-card__title").textContent;
        let link = el
          .closest(".popular-card")
          .querySelector(".popular-card__more").href;
        let img = document
          .querySelector(".popular__images")
          .querySelector(
            `img[data-item-id="${el.closest(".popular-card").dataset.itemId}"]`
          ).src;
        let srcset = img;
        let info = {
          square: el
            .closest(".popular-card")
            .querySelector(".popular-card__item--sq")
            .querySelector(".popular-card__figure").textContent,
          floors: el
            .closest(".popular-card")
            .querySelector(".popular-card__item--fl")
            .querySelector(".popular-card__figure").textContent,
          bedrooms: el
            .closest(".popular-card")
            .querySelector(".popular-card__item--bed")
            .querySelector(".popular-card__figure").textContent,
          bathrooms: el
            .closest(".popular-card")
            .querySelector(".popular-card__item--bath")
            .querySelector(".popular-card__figure").textContent,
          place: el
            .closest(".popular-card")
            .querySelector(".popular-card__item--pl")
            .querySelector(".popular-card__figure").textContent,
        };
        favContent.insertAdjacentHTML(
          "afterbegin",
          generateFavoriteItem(img, srcset, title, info, link, id)
        );
        updateStorage();
        printQuantity();
      } else {
        deleteFav(el.closest(".popular-card"));
      }
    });
  }

  if (el.closest(".popular__images")) {
    el.closest(".swiper-slide").setAttribute("data-id", ++randId);

    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      if (!self.classList.contains("active")) {
        self.classList.add("active");
        let id = el.closest(".swiper-slide").dataset.id;
        const infoBlock = document.querySelector(
          `.popular-card[data-item-id="${
            el.closest(".swiper-slide").querySelector("img").dataset.itemId
          }"]`
        );
        let title = infoBlock.querySelector(".popular-card__title").textContent;
        let link = infoBlock.querySelector(".popular-card__more").href;
        let img = el.closest(".swiper-slide").querySelector("img").src;
        let srcset = "";
        el.closest(".swiper-slide").querySelector("source")
          ? (srcset = el
              .closest(".swiper-slide")
              .querySelector("source").srcset)
          : null;
        let info = {
          square: infoBlock
            .querySelector(".popular-card__item--sq")
            .querySelector(".popular-card__figure").textContent,
          floors: infoBlock
            .querySelector(".popular-card__item--fl")
            .querySelector(".popular-card__figure").textContent,
          bedrooms: infoBlock
            .querySelector(".popular-card__item--bed")
            .querySelector(".popular-card__figure").textContent,
          bathrooms: infoBlock
            .querySelector(".popular-card__item--bath")
            .querySelector(".popular-card__figure").textContent,
          place: infoBlock
            .querySelector(".popular-card__item--pl")
            .querySelector(".popular-card__figure").textContent,
        };
        favContent.insertAdjacentHTML(
          "afterbegin",
          generateFavoriteItem(img, srcset, title, info, link, id)
        );
        updateStorage();
        printQuantity();
      } else {
        let id = el.closest(".swiper-slide").dataset.id;
        favContent.querySelector(`[data-id="${id}"]`).remove();
        document
          .querySelector(`[data-id="${id}"]`)
          .querySelector(".btn--like")
          .classList.remove("active");
        printQuantity();
      }
    });
  }

  if (el.closest(".item-product")) {
    el.closest(".item-product").setAttribute("data-id", ++randId);
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let parent = self.closest(".item-product");
      if (!self.classList.contains("active")) {
        let id = parent.dataset.id;
        let img = parent.querySelector(".card").querySelector("img").src;
        let srcset = parent
          .querySelector(".card")
          .querySelector("source")
          .getAttribute("srcset");
        let title = document.querySelector("h1").textContent;
        let link = parent.querySelector(".btn--share").getAttribute("href");
        let info = {
          square: parseInt(parent.querySelector(".chars-item--sq dd").textContent),
          floors: parent.querySelectorAll(".chars-item--fl").length,
          bedrooms: parseInt(
            parent.querySelector(".chars-item--bed dd").textContent
          ),
          bathrooms: parseInt(
            parent.querySelector(".chars-item--bath dd").textContent
          ),
          place: parseInt(parent.querySelector(".chars-item--pl dd").textContent),
        };
        self.classList.add("active");
        favContent.insertAdjacentHTML(
          "afterbegin",
          generateFavoriteItem(img, srcset, title, info, link, id)
        );
        updateStorage();
        printQuantity();
      } else {
        deleteFav(parent);
      }
    });
  }
});
const printQuantity = () => {
  let length = favContent.children.length;
  favQuantity.textContent = length;
  favBtnQuantity.forEach((el) => (el.textContent = length));
};

const deleteFav = (fav) => {
  let id = fav.dataset.id;

  favContent.querySelector(`[data-id="${id}"]`)?.remove();
  updateStorage();
  document
    .querySelector(`[data-id="${id}"]`)
    .querySelector(".btn--like")
    .classList.remove("active");
  printQuantity();
};
favContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--like")) {
    deleteFav(e.target.closest(".projects-card"));
  }
});
const generateFavoriteItem = (img, srcset, title, info, link, id) => {
  return `
    <article class="projects-section__card projects-card" data-id="${id}">
    <picture>
      <source srcset="${srcset}" type=image/webp>
      <img class="projects-card__img" src="${img}" alt="Card">
    </picture>
        <div class="projects-card__info">
          <h3 class="projects-card__title">${title.toUpperCase()}</h3>
          <div class="projects-card__details">
            <ul class="projects-card__list popular-card__list list-reset">
              <li class="projects-card__item popular-card__item projects-card__item--sq">
                ${info.square}<span>м<sup>2</sup></span>
              </li>
              <li class="projects-card__item popular-card__item projects-card__item--fl">
              ${info.floors}<span>этажа</span>
              </li>
              <li class="projects-card__item popular-card__item projects-card__item--bed">
                ${info.bedrooms}<span>спальни</span>
              </li>
              <li class="projects-card__item popular-card__item projects-card__item--bath">
                ${info.bathrooms}<span>санузла</span>
              </li>
              <li class="projects-card__item popular-card__item projects-card__item--pl">
                ${info.place}<span>м<sup>2</sup></span>
              </li>
            </ul>
            <a href="${link}" class="projects-card__more">Подробнее</a>
          </div>
        </div>
        <button class="projects-card__btn btn btn--like btn--stroke btn-reset active">
          <svg>
            <use xlink:href="img/sprite.svg#like-icon"></use>
          </svg>
        </button>
      </article>
    `;
};
const initialState = () => {
  if (localStorage.getItem("goods")) {
    favContent.innerHTML = localStorage.getItem("goods");
    printQuantity();

    document
      .querySelectorAll(".favorites-content .projects-section__card")
      .forEach((el) => {
        let id = el.dataset.id;

        if (
          document.querySelector(`.projects-section__card[data-id="${id}"]`)
        ) {
          document
            .querySelector(`.projects-section__card[data-id="${id}"]`)
            .querySelector(".btn--like")
            .classList.add("active");
        }
        if (document.querySelector(`.popular-content__item[data-id="${id}"]`)) {
          document
            .querySelector(`.popular-content__item[data-id="${id}"]`)
            .querySelector(".btn--like")
            .classList.add("active");
        }
        if (document.querySelector(`.hero__slide[data-id="${id}"]`)) {
          document
            .querySelector(`.hero__slide[data-id="${id}"]`)
            .querySelector(".btn--like")
            .classList.add("active");
        }
        if (document.querySelector(`.product[data-id="${id}"]`)) {
          document
            .querySelector(`.product[data-id="${id}"]`)
            .querySelector(".btn--like")
            .classList.add("active");
        }
        let catalogueItem = catalogueData.find((el) => el.id == id);
        if (catalogueItem) {
          catalogueItem.active = true;
        }
      });
  }
  if (localStorage.getItem("randId")) {
    randId = parseInt(localStorage.getItem("randId"));
  }
};
if (catalogue) {
  catalogueData.forEach((el) => {
    el.id = ++randId;
  });
  catalogue.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn--like")) {
      const el = e.target;
      if (el.closest(".product")) {
        let self = el;
        let parent = self.closest(".product");
        if (!self.classList.contains("active")) {
          let id = parent.dataset.id;
          let img = parent.querySelector("img").src;
          let srcset = parent.querySelector("source").getAttribute("srcset");
          let title = parent.querySelector(".product-info__title").textContent;
          let link = parent
            .querySelector(".product__image")
            .getAttribute("href");
          let info = {
            square: parent.querySelector(".product-info__item--sq").dataset.sq,

            floors: parent.querySelector(".product-info__item--fl").dataset.fl,
            bedrooms: parent.querySelector(".product-info__item--bed").dataset
              .bed,
            bathrooms: parent.querySelector(".product-info__item--bath").dataset
              .bath,
            place: parent.querySelector(".product-info__item--pl").dataset.pl,
          };
          self.classList.add("active");
          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(img, srcset, title, info, link, id)
          );
          updateStorage();
          printQuantity();
        } else {
          deleteFav(parent);
        }
        catalogueData.find((elem) => elem.id == parent.dataset.id).active =
          self.classList.contains("active");
      }
    }
  });
}
const updateStorage = () => {
  let parent = favContent;
  let html = parent.innerHTML;
  html = html.trim();
  localStorage.setItem("randId", randId);
  if (html.length) {
    localStorage.setItem("goods", html);
  } else {
    localStorage.removeItem("goods");
  }
};

initialState();
const modalButtons = document.querySelectorAll(".slide__item");
const heroSection = document.querySelector(".hero");
// import { gallerySliderMini } from "./sliders";
// import lenis from "./smooth-scroll";

if (modalButtons.length > 0) {
  modalButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.currentTarget.dataset.src) {
        const modalVideo = document.querySelector(".modal-video");
        const src = e.target.dataset.src;
        const video = modalVideo.querySelector(".modal-window__video");
        video.setAttribute("src", src);
        modalVideo.classList.add("active");
        document.body.classList.add("dis-scroll");
        lenis.stop();
      }
      if (e.currentTarget.dataset.tour) {
        const modalTour = document.querySelector(".modal-tour");
        const src = e.target.dataset.tour;
        modalTour.classList.add("active");
        document.body.classList.add("dis-scroll");
        lenis.stop();
      }
      // if (e.currentTarget.dataset.gallery) {
      //   const sources = Array.from(e.currentTarget.dataset.gallery.split(","));
      //   const sourcesThumbs = Array.from(
      //     e.currentTarget.dataset.galleryThumbs.split(",")
      //   );
      //   const modalGallery = document.querySelector(".modal-gallery");
      //   sources.forEach((src) => {
      //     document
      //       .querySelector(".gallery__slider")
      //       .querySelector(".swiper-wrapper")
      //       .insertAdjacentHTML("beforeend", generateGallerySlides(src));
      //   });
      //   sourcesThumbs.forEach((src) => {
      //     document
      //       .querySelector(".gallery__slider-mini")
      //       .querySelector(".swiper-wrapper")
      //       .insertAdjacentHTML("beforeend", generateGallerySlidesMini(src));
      //   });
      //   // update slider
      //   gallerySliderMini.update();
      //   modalGallery.classList.add("active");
      //   modalGallery.addEventListener("click", (e) => e.stopPropagation());
      //   document.body.classList.add("dis-scroll");
      //   lenis.stop();
      // }
    });
  });
}

const generateGallerySlides = (src) => {
  let index = 0;
  return `
    <div class="swiper-slide">
      <div class="gallery__item" >
        <img src="${src}" alt="Photo of House">
      </div>
    </div>
  `;
};
const generateGallerySlidesMini = (src) => {
  return `
  <div class="swiper-slide">
    <div class="gallery__item-mini">
      <img src="${src}" alt="Photo of House">
    </div>
  </div>
  `;
};

if (document.querySelector(".phone-btn")) {
  document.querySelector(".phone-btn").addEventListener("click", (e) => {
    const modalForm = document.querySelector(".modal-form");
    modalForm.classList.add("active");
    lenis.stop();

    modalForm.setAttribute("form-id", e.currentTarget.dataset.formId);
  });
}
if(document.querySelector('.office__btn')){
  document.querySelector('.office__btn').addEventListener('click', (e) => {
    const modalForm = document.querySelector(".modal-form");
    modalForm.classList.add("active");
    lenis.stop();

    modalForm.setAttribute("form-id", "contact-form");
  })
}
if (document.querySelector(".consult-btn")) {
  document.querySelector(".consult-btn").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const modalForm = document.querySelector(".modal-form");
    modalForm.classList.add("active");
    lenis.stop();

    modalForm.setAttribute("form-id", e.currentTarget.dataset.formId);
  });
}
if (document.querySelector(".mobile-menu__btn--call")) {
  document
    .querySelector(".mobile-menu__btn--call")
    .addEventListener("click", (e) => {
      const modalForm = document.querySelector(".modal-form");
      modalForm.classList.add("active");
      lenis.stop();
      modalForm.setAttribute("form-id", e.currentTarget.dataset.formId);
    });
}
document.querySelectorAll(".modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target == el) {
      e.currentTarget.classList.remove("active");
      if (e.currentTarget.querySelector(".modal-window__video")) {
        e.currentTarget
          .querySelector(".modal-window__video")
          .setAttribute("src", "");
      }
      if (e.currentTarget.querySelector(".gallery__window")) {
        e.currentTarget
          .querySelector(".gallery__window")
          .querySelectorAll(".swiper-slide")
          .forEach((slide) => slide.remove());
      }
      document.body.classList.remove("dis-scroll");
      lenis.start();
    }
  });
});
document.querySelectorAll(".modal__close").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.closest(".modal").classList.remove("active");
    if (
      e.currentTarget.closest(".modal").querySelector(".modal-window__video")
    ) {
      e.currentTarget
        .closest(".modal")
        .querySelector(".modal-window__video")
        .setAttribute("src", "");
    }
    if (e.currentTarget.closest(".modal").querySelector(".gallery__window")) {
      e.currentTarget
        .closest(".modal")
        .querySelectorAll(".swiper-slide")
        .forEach((slide) => slide.remove());
    }
    document.body.classList.remove("dis-scroll");
    lenis.start();
  });
});

import { techSection } from "../_vars";

let menuItem = document.querySelectorAll(".tech__text");
let menuImage = document.querySelectorAll(".tech__img");

if (techSection) {
  const points = [];

  for (let i = 0; i <= 1.0; i += 0.005) {
    points.push(i);
  }
  const textObserver = new IntersectionObserver(callbackObs, {
    threshold: points,
  });
  textObserver.observe(techSection);
  textObserver.observe(menuItem[0]);
  textObserver.observe(menuItem[1]);
  function callbackObs(entries, observer) {
    let percent = 1;

    percent = (window.scrollY / techSection.scrollHeight) * 10;
    if (window.matchMedia("(min-width: 769px)")) {
      menuItem[0].querySelector(
        ".tech__paragraph"
      ).style.transform = `translateX(-${percent / 3}%)`;
      menuItem[1].querySelector(
        ".tech__paragraph"
      ).style.transform = `translateX(${percent / 3}%)`;
    } else {
      menuItem[0].querySelector(
        ".tech__paragraph"
      ).style.transform = `translateX(-${percent / 2}%)`;
      menuItem[1].querySelector(
        ".tech__paragraph"
      ).style.transform = `translateX(${percent / 2}%)`;
    }
  }

  techSection.addEventListener("wheel", () => {
    callbackObs();
  });

  document.querySelector(".tech").addEventListener("touchmove", () => {
    callbackObs();
  });
}

if (window.matchMedia("(min-width: 769px)").matches) {
  for (let i = 0; i < menuItem.length; i++) {
    const moveCursor = (e) => {
      let left = e.pageX + 20 + "px";
      let top = e.pageY + "px";
      menuImage[i].style.left = left;
      menuImage[i].style.top = top;
    };

    const setStyles = (e) => {
      menuImage[i].style.opacity = "1";
      menuImage[i].style.transform = "scale(1)";
    };
    const rmStyles = (e) => {
      menuImage[i].style.opacity = null;
      menuImage[i].style.transform = null;
    };
    menuItem[i].addEventListener("mousemove", moveCursor);
    menuItem[i].addEventListener("mouseenter", setStyles);
    menuItem[i].addEventListener("mouseleave", rmStyles);
  }
}

import {
  header,
  headerNav,
  benefitsSection,
  popularSection,
  servicesSection,
  projectSection,
  ecoHouseSection,
  houseExpanded,
  houseCentered,
  addSection,
  officeSection,
  resSection,
  mobileMenu,
  catalogue,
} from "./../_vars";

import { throttle } from "./../functions/throttle";

const getCoord = (el) => {
  let rect = el.getBoundingClientRect();
  let scrollTop = window.pageY || document.documentElement.scrollTop;

  return rect.top + scrollTop;
};
const getBottom = (el) => {
  return el.offsetHeight + el.offsetTop;
};
const isInto = (el1, el2) => {
  return getBottom(el2) >= getCoord(el1) && getCoord(el1) >= el2.offsetTop;
};
const belowEcoCenter = (el1, el2) => {
  return getCoord(el1) >= getCoord(el2);
};
const setHeaderTheme = () => {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    if (
      isInto(headerNav, benefitsSection) ||
      isInto(headerNav, popularSection) ||
      isInto(headerNav, servicesSection) ||
      isInto(headerNav, projectSection) ||
      (getCoord(headerNav) >= getCoord(ecoHouseSection) &&
        getCoord(headerNav) <= getCoord(houseExpanded)) ||
      getCoord(headerNav) >= getCoord(houseCentered) ||
      isInto(headerNav, techSection) ||
      isInto(headerNav, addSection) ||
      isInto(headerNav, officeSection) ||
      isInto(headerNav, resSection)
    ) {
      header.classList.add("dark");
    } else {
      header.classList.remove("dark");
    }
  } else {
    if (
      isInto(headerNav, benefitsSection) ||
      isInto(headerNav, popularSection) ||
      isInto(headerNav, servicesSection) ||
      isInto(headerNav, projectSection) ||
      (isInto(headerNav, ecoHouseSection) &&
        !belowEcoCenter(
          headerNav,
          document.querySelector(".house-content--expanded")
        )) ||
      belowEcoCenter(
        headerNav,
        document.querySelector(".house-content__image--big")
      ) ||
      isInto(headerNav, techSection) ||
      isInto(headerNav, addSection) ||
      isInto(headerNav, officeSection) ||
      isInto(headerNav, resSection)
    ) {
      header.classList.add("dark");
    } else {
      header.classList.remove("dark");
    }
  }
  if (getCoord(mobileMenu) >= getBottom(heroSection)) {
    mobileMenu.style.opacity = "1";
    mobileMenu.style.zIndex = "20";
  } else {
    mobileMenu.style.opacity = null;
    mobileMenu.style.zIndex = null;
  }
};
let func = throttle(setHeaderTheme);
// if (heroSection) {
//   window.addEventListener("scroll", func);
// }
// if (catalogue) {
//   const allItems = document.querySelectorAll(".product__image");
//   window.addEventListener("scroll", () => {
//     const isOne = [];
//     allItems.forEach((el) => {
//       isOne.push(isInto(headerNav, el));
//     });
//     if (isOne.includes(true)) {
//       header.classList.remove("dark");
//     } else {
//       header.classList.add("dark");
//     }
//   });
// }
const projectCards = document.querySelectorAll(".projects-card");

if (projectCards) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    const observer = new IntersectionObserver(
      (entries, options) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            const details = el.target.querySelector(".projects-card__details");
            details.classList.add("active");
            details.style.maxHeight = details.scrollHeight + "px";
          } else {
            const details = el.target.querySelector(".projects-card__details");
            details.classList.remove("active");
            details.style.maxHeight = null;
          }
        });
      },
      {
        threshold: [0.7, 1],
      }
    );

    projectCards.forEach((card) => observer.observe(card));
  } else {
    projectCards.forEach((el) => {
      const details = el.querySelector(".projects-card__details");
      el.addEventListener("mouseenter", () => {
        details.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
      });
      el.addEventListener("mouseleave", () => {
        details.classList.remove("active");
        details.style.maxHeight = null;
      });
    });
  }
}

const favorites = document.querySelector(".favorites-content");

if (favorites) {
  favorites.addEventListener("mousemove", (e) => {
    if (e.target.classList.contains("projects-card")) {
      const details = e.target.querySelector(".projects-card__details");
      e.target.addEventListener("mouseenter", (event) => {
        event.stopPropagation();
        details.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
      });
      e.target.addEventListener("mouseleave", (event) => {
        event.stopPropagation();
        details.classList.remove("active");
        details.style.maxHeight = null;
      });
    } else {
      return;
    }
  });
}
const forms = document.querySelectorAll(".form");

forms.forEach((f) => {
  const labels = f.querySelectorAll(".form__label");

  labels.forEach((label) => {
    label.addEventListener("click", (e) => {
      f.querySelector("span.focus")?.classList.remove("focus");
      document.hasFocus()
        ? e.currentTarget.querySelector("span").classList.add("focus")
        : null;
    });
  });
});

// parallax clouds

const clouds = document.querySelector(".parallax__clouds");
const ecoHouse = document.querySelector(".eco-house");
if (ecoHouse) {
  const thresholdsArr = [];
  for (let i = 0; i <= 1.0; i += 0.005) {
    thresholdsArr.push(i);
  }

  function callback(entries, observer) {
    let movingPercent = (window.scrollY / ecoHouse.scrollHeight) * 100;
    moveClouds(movingPercent);
  }

  const observer = new IntersectionObserver(callback, {
    threshold: thresholdsArr,
  });

  observer.observe(ecoHouse);
  observer.observe(document.querySelector(".eco-house__title"));

  document
    .querySelectorAll(".eco-house .house-content__image")
    .forEach((el) => {
      observer.observe(el);
    });
  function moveClouds(percent) {
    clouds.style.transform = `translateX(${percent / 6}%)`;
  }
}

const upBtn = document.querySelector(".up-page-btn");
const downBtn = document.querySelector(".hero__btn-down");

// if (upBtn) {
//   upBtn.addEventListener("click", () => {
//     lenis.scrollTo(".site-container");
//   });
//   window.addEventListener(
//     "scroll",
//     () => {
//       if (scrollY >= document.documentElement.clientHeight * 2) {
//         upBtn.style.display = "block";
//         upBtn.style.opacity = "1";
//       } else {
//         upBtn.style.display = null;
//         upBtn.style.opacity = null;
//       }
//     },
//     { passive: true }
//   );
// }
if (downBtn) {
  downBtn.addEventListener("click", (e) => {
    e.preventDefault();
    lenis.scrollTo("#benefit");
  });
}

// Catalogue

import initFilters from "./sortCatalogue";
import imagePagination from "./product";
import declOfNum from "./declOfNum";
async function getData() {
  // const response = await fetch('ваш url к базе со списком объектов. пример таких объектов есть в файле catalogueData') // раскомментировать при работе с бд
  // const d = await response.json()
  const d = catalogueData; // удалить при работе с бд
  return d;
}

async function main() {
  const productsData = await getData();
  let currentPage = 1;
  let rows = 10;
  async function displayList(arrData, rowPerPage, page) {
    catalogue.innerHTML = "";
    page--;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((el) => {
      catalogue.innerHTML += createProduct(
        el.title,
        el.price,
        el.square,
        el.floors,
        el.bathrooms,
        el.bedrooms,
        el.placeSquare,
        el.imgSrcArray,
        el.active,
        el.id
      );
    });
    const products = document.querySelectorAll(".product");
    const productSliders = document.querySelectorAll(".product__slider");
    imagePagination(products);
    if (window.matchMedia("(max-width: 768px)").matches) {
      initProductSliders(productSliders);
    }
    initFilters();
  }
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector(".pagination");
    const pagesCount = Math.ceil(arrData.length / rowPerPage);

    for (let i = 0; i < pagesCount; i++) {
      paginationEl.appendChild(createPaginationBtn(i + 1));
    }
  }
  function createPaginationBtn(page) {
    const liEl = document.createElement("li");
    const btnPagination = document.createElement("button");
    liEl.classList.add("pagination__item");
    btnPagination.classList.add("btn-reset");
    btnPagination.classList.add("pagination__btn");

    if (currentPage == page) btnPagination.classList.add("active");

    btnPagination.innerText = page;
    liEl.appendChild(btnPagination);
    btnPagination.addEventListener("click", () => {
      currentPage = page;
      lenis.scrollTo("html");
      displayList(productsData, rows, currentPage);

      let currentItemLi = document.querySelector(".pagination__btn.active");
      currentItemLi.classList.remove("active");

      btnPagination.classList.add("active");

      document.querySelector(".filters__btn.active").click();
    });
    return liEl;
  }
  displayList(productsData, rows, currentPage);
  displayPagination(productsData, rows);
}

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
const createProduct = (
  title,
  price,
  square,
  floors,
  bathrooms,
  bedrooms,
  placeSquare,
  imgSrcArray,
  active = false,
  id
) => {
  const floorsWord = declOfNum(floors, ["этаж", "этажа", "этажей"]);
  const bathroomsWord = declOfNum(bathrooms, [
    "санузел",
    "санузла",
    "санузлов",
  ]);
  const bedroomsWord = declOfNum(bedrooms, ["спальня", "спальни", "спален"]);
  const isActive = active ? "active" : null;
  return `
    <li class="catalogue__item">
      <article class="catalogue__product product" data-id="${id}">
      <button class="product__btn btn btn--like btn--stroke btn-reset ${isActive}">
        <svg>
          <use xlink:href="img/sprite.svg#like-icon"></use>
        </svg>
      </button>
      <a href="#" class="product__link">
          <div class="product__image">
            <div class="product__switch image-switch">
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][0]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][1]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][0]}"
                      srcset="${imgSrcArray["jpg"][1]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][2]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][3]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][2]}"
                      srcset="${imgSrcArray["jpg"][3]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][4]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][5]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][4]}"
                      srcset="${imgSrcArray["jpg"][5]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div class="product__slider swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][0]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][1]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][0]}"
                      srcset="${imgSrcArray["jpg"][1]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][2]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][3]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][2]}"
                      srcset="${imgSrcArray["jpg"][3]} 2x"
                      alt="Product 1"
                    />
                  </picture>
                </div>
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][4]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][5]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][4]}"
                      srcset="${imgSrcArray["jpg"][4]} 2x"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="swiper-pagination product-slider__pagination"></div>
            </div>
            <ul
              class="pruoduct__image-pagination image-pagination list-reset"
            ></ul>
          </div>
          <div class="product__info product-info">
            <div class="product-info__left">
              <h3 class="product-info__title">${title}</h3>
              <span class="product-info__price"
                >от ${normalPrice(price)} <svg class="">
                <use xlink:href="img/sprite.svg#rub"></use>
              </svg></span>
            </div>
            <ul class="product-info__right list-reset">
              <li
                class="product-info__item product-info__item--sq"
                data-sq="${square}"
              >
                <div class="product-info__figure">
                  ${square} <span>м<sup>2</sup></span>
                </div>
              </li>
              <li class="product-info__item product-info__item--fl" data-fl="${floors}">
                <div class="product-info__figure">${floors} <span>${floorsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--bed"
                data-bed="${bedrooms}"
              >
                <div class="product-info__figure">${bedrooms} <span>${bedroomsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--bath"
                data-bath="${bathrooms}"
              >
                <div class="product-info__figure">${bathrooms} <span>${bathroomsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--pl visually-hidden"
                data-pl="${placeSquare}"
              >
                <div class="product-info__figure">${placeSquare} <span>площадь</span></div>
              </li>
            </ul>
          </div>
        </a>
      </article>
    </li>
  `;
};

if (catalogue) {
  main();
}

upBtn?.addEventListener("click", () => {
  lenis.scrollTo(".site-container");
});

const allItems = document.querySelectorAll(".product__image");

window.addEventListener("scroll", () => {
  if (heroSection) {
    func();
  }
  if (catalogue) {
    const isOne = [];
    allItems.forEach((el) => {
      isOne.push(isInto(headerNav, el));
    });
    if (isOne.includes(true)) {
      header.classList.remove("dark");
    } else {
      header.classList.add("dark");
    }
  }

  if (upBtn) {
    if (scrollY >= document.documentElement.clientHeight * 2) {
      upBtn.style.display = "block";
      upBtn.style.opacity = "1";
    } else {
      upBtn.style.display = null;
      upBtn.style.opacity = null;
    }
  }
});

const text = document.querySelectorAll(".built-houses__text");
if (text.length > 0) {
  const points = [];

  for (let i = 0; i <= 1.0; i += 0.005) {
    points.push(i);
  }
  const textObserver = new IntersectionObserver(callbackObs, {
    threshold: points,
  });

  function callbackObs(entries, observer) {
    let percent = 1;

    percent =
      (window.scrollY / document.querySelector(".built-houses").scrollHeight) *
      10;
    if (window.matchMedia("(min-width: 769px)")) {
      text[0].querySelector(
        ".built-houses__paragraph"
      ).style.transform = `translateX(-${percent / 3}%)`;
      text[1].querySelector(
        ".built-houses__paragraph"
      ).style.transform = `translateX(${percent / 3}%)`;
    } else {
      text[0].querySelector(
        ".built-houses__paragraph"
      ).style.transform = `translateX(-${percent / 2}%)`;
      text[1].querySelector(
        ".built-houses__paragraph"
      ).style.transform = `translateX(${percent / 2}%)`;
    }
  }

  textObserver.observe(text[0]);
  textObserver.observe(text[1]);

  document.querySelector(".built-houses").addEventListener("wheel", () => {
    callbackObs();
  });

  document.querySelector(".built-houses").addEventListener("touchmove", () => {
    callbackObs();
  });
}

// Item cart
let activePlanIndex = 0;
const plan = document.querySelector(".plan");
if (plan) {
  const planBtn = plan.querySelector(".plan__buttons").querySelectorAll("button");
  const planItems = plan.querySelectorAll(".plan__item[data-plan-item]");
  const planFullScreen = plan.querySelector(".btn--fullscreen")

  planBtn.forEach((el, idx) => {
    el.setAttribute('data-plan-btn', idx)
    if(idx === 0) el.classList.add('active')
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.currentTarget.classList.contains("active")) return;
      const index = e.currentTarget.dataset.planBtn;
      planBtn.forEach((el) => el.classList.remove("active"));
      planItems.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");
      plan.querySelector(`.plan__item[data-plan-item="${idx}"]`).classList.add("active");
      activePlanIndex = index;
    });
  });

  planItems.forEach((el) => {
    el.addEventListener("click", () => {
      planFullScreen.click();
    });
  });

  planFullScreen.addEventListener('click', e => {

  })


}

const firstDescList = document.querySelectorAll(
  '[data-desc-category="1"] .desc-list__item'
);
const secondDescList = document.querySelectorAll(
  '[data-desc-category="2"] .desc-list__item'
);
const firstDescSliderItemCart = new Swiper(".desc-slider__slider--first", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".first-desc--next",
    prevEl: ".first-desc--prev",
  },
  pagination: {
    el: ".first-desc-pagination",
    type: "fraction",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  on: {
    init: () => {
      document.querySelector(
        '[data-desc-category="1"] .desc-slider__title'
      ).textContent =
        firstDescList[0].querySelector(".desc-list__text").textContent;
    },
    slideChange: () => {
      firstDescList.forEach((item) => item.classList.remove("active"));
      firstDescList[firstDescSliderItemCart.activeIndex].classList.add(
        "active"
      );
      document.querySelector(
        '[data-desc-category="1"] .desc-slider__title'
      ).textContent =
        firstDescList[firstDescSliderItemCart.activeIndex].querySelector(
          ".desc-list__text"
        ).textContent;
    },
  },
});
const secondDescSliderItemCart = new Swiper(".desc-slider__slider--second", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".second-desc--next",
    prevEl: ".second-desc--prev",
  },
  pagination: {
    el: ".second-desc-pagination",
    type: "fraction",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  on: {
    init: () => {
      document.querySelector(
        '[data-desc-category="2"] .desc-slider__title'
      ).textContent =
        secondDescList[0].querySelector(".desc-list__text").textContent;
    },
    slideChange: () => {
      secondDescList.forEach((item) => item.classList.remove("active"));
      secondDescList[secondDescSliderItemCart.activeIndex].classList.add(
        "active"
      );
      document.querySelector(
        '[data-desc-category="2"] .desc-slider__title'
      ).textContent =
        secondDescList[secondDescSliderItemCart.activeIndex].querySelector(
          ".desc-list__text"
        ).textContent;
    },
  },
});

const firstDescSliderImageItemCart = new Swiper(
  ".desc-slider__image-slider--first",
  {
    slidesPerView: 1,
    navigation: {
      nextEl: ".first-desc--next",
      prevEl: ".first-desc--prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  }
);
const secondDescSliderImageItemCart = new Swiper(
  ".desc-slider__image-slider--second",
  {
    slidesPerView: 1,
    navigation: {
      nextEl: ".second-desc--next",
      prevEl: ".second-desc--prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  }
);
const changeDescActiveItem = (list, slider, imageSlider) => {
  list[0].classList.add("active");

  list.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      list.forEach((item) => item.classList.remove("active"));
      el.classList.add("active");
      slider.slideTo(index);
      imageSlider.slideTo(index);
    });
  });
};
if (firstDescList.length > 0) {
  changeDescActiveItem(
    firstDescList,
    firstDescSliderItemCart,
    firstDescSliderImageItemCart
  );
}
if (secondDescList.length > 0) {
  changeDescActiveItem(
    secondDescList,
    secondDescSliderItemCart,
    secondDescSliderImageItemCart
  );
}
// if (secondDescList) {
//   changeDescActiveItem(secondDescList, secondDescSliderItemCart);
// }

const accordion = document.querySelector(".faq ul");

if (accordion) {
  const accItems = accordion.querySelectorAll("li");

  accItems.forEach((el, idx) => {
    const accHeader = el.querySelector("div");
    const accContent = el.querySelector("p");
    if (idx == 0) {
      accContent.style.maxHeight = accContent.scrollHeight + "px";
      el.classList.add("active");
    }
    accHeader.addEventListener("click", (e) => {
      e.preventDefault();
      el.classList.toggle("active");
      el.classList.contains("active")
        ? (accContent.style.maxHeight = accContent.scrollHeight + "px")
        : (accContent.style.maxHeight = null);
    });
  });
}
const itemDescPriceButtons = document.querySelector('.item-desc__buttons')?.querySelectorAll('button')
if(itemDescPriceButtons && itemDescPriceButtons.length > 0) {

  itemDescPriceButtons.forEach((el, index) => {
    el.setAttribute('data-cost-category', index + 1)
    if(index === 0) el.classList.add('active')
  })
  const descButtons = itemDescPriceButtons
  const descItems = document.querySelectorAll(
    ".item-desc__item[data-desc-category]"
  );
  descButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const currentCategory = e.currentTarget.dataset.costCategory;
      descItems.forEach((item) => item.classList.remove("active"));
      descButtons.forEach((btn) =>
        btn.classList.remove("active")
      );
      e.currentTarget.classList.add("active");
      document
        .querySelector(
          `.item-desc__item[data-desc-category="${currentCategory}"]`
        )
        .classList.add("active");
    });
  });
}

// print popup

const itemPrintBtn = document.querySelector(".plan-btn-print");
const planContent = document.querySelector(".plan__content")
if (itemPrintBtn) {
  itemPrintBtn.addEventListener("click", (e) => {
    const activePlan = planContent.querySelector(`.plan__item[data-plan-item="${activePlanIndex}"`);
    const srcImgPlan = activePlan.dataset.planSrc;
    const w = window.open("about:blank", "new image");
    w.document.write("<html><head>");
    w.document.write("<style>");

    w.document.write("</style>");
    w.document.write("</head><body >");
    w.document.write(
      `<img id="print-image-element" src='${srcImgPlan}' alt='from old image' />`
    );
    w.document.write(
      '<script>var img = document.getElementById("print-image-element"); img.addEventListener("load",function(){ window.focus(); window.print(); window.document.close(); window.close(); }); </script>'
    );
    w.document.write("</body></html>");
  });
}

const itemProdButtons = document.querySelector(".item-product__buttons");
const footer = document.querySelector("footer");
if (itemProdButtons && window.matchMedia("(max-width: 768px)").matches) {
  const rectFooter = footer.getBoundingClientRect();
  const offsetTop = rectFooter.y + window.scrollY;
  window.addEventListener("scroll", (e) => {
    const rectProd = itemProdButtons.getBoundingClientRect();
    if (rectProd.y + window.scrollY >= offsetTop) {
      itemProdButtons.style.opacity = "0";
      itemProdButtons.style.zIndex = "-1";
    } else {
      itemProdButtons.style.opacity = null;
      itemProdButtons.style.zIndex = null;
    }
  });
}

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox="images-preview"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--prev item-hero__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--next item-hero__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  },
  on : {
    init : (fa) => {
      setTimeout(() => {
        fa.jumpTo(itemProductSlider.activeIndex - 1)
      }, 70)
    },
  }
});

Fancybox.bind('[data-fancybox="fancy-plan"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  },
  on : {

    loaded: (f) => {
      f.jumpTo(activePlanIndex)
    }
  }
});

Fancybox.bind('[data-fancybox="hero-images-preview-nis"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  }
});
Fancybox.bind('[data-fancybox="hero-images-preview-vas"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  }
});
Fancybox.bind('[data-fancybox="hero-images-preview-ostamo"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  }
});
Fancybox.bind('[data-fancybox="hero-images-preview-laut"]', {
  Carousel: {
    Navigation: {
      prevTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
        " <span></span>" +
        "</div>",
      nextTpl:
        '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
        " <span></span>" +
        "</div>",
    },
  },
  Thumbs: {
    type: "classic",
  }
});




const designStepsTimeline = gsap.timeline()

gsap.set('.design-section__right li', {xPercent: 50})
  designStepsTimeline.to('.design-section__right li', {xPercent: 0, duration: 1, stagger:0.2, ease: "power1.out",})
  if(window.matchMedia("(min-width: 1440px)").matches){
    ScrollTrigger.create({
      animation: designStepsTimeline,
      trigger: '.design-section__pin',
      start: 'top top+=80%',
      end: "+=60% top+=25%",
      scrub: 0.5,
    })
  } else {
    ScrollTrigger.create({
      animation: designStepsTimeline,
      trigger: '.design-section__pin',
      start: 'top top+=45%',
      end: "+=60% top+=25%",
      scrub: 0.5,
    })
  }



const panoramaSections = document.querySelectorAll("[data-tour-sec]");

if (panoramaSections && panoramaSections.length > 0) {
  panoramaSections.forEach(el => {
    const cursor = el.querySelector(".mouse-rotate")

    if(window.matchMedia("(max-width: 768px)").matches){
      el.addEventListener("touchstart", () => {
        cursor.style.opacity = '0'
      });
      el.addEventListener("touchend", () => {
        cursor.style.opacity = '1'
      });
    }


    el.addEventListener("mousemove", e => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
    })
  })

}


if(implemObjectsSection){
  const productSliders = document.querySelectorAll(".product__slider");
  const productImages = document.querySelectorAll(".product__image")
  productSliders.forEach((el,i) => {
    const slider = new Swiper(el, {
      slidesPerView: 1,
      navigation : {
        prevEl : `.product-slider-btn--prev`,
        nextEl : `.product-slider-btn--next`
      },
      pagination: {
        el: `.product-slider__pagination`,
      },
      loop: true,
      lazy: true,
    });

    slider.on('slideChange', () => {
      productSlidersArray[i] = slider.activeIndex - 1
    })

  })

  productImages.forEach((el, i) => {
    const pagination = el.querySelector(".product-slider__pagination");
    const sliderControlBtns = el.querySelectorAll('.slider-control__btn')
    const fullscreenBtn = el.querySelector('.implemPhoto-section__btn--fullscreen')
    el.addEventListener("touchmove", (e) => {
      e.preventDefault();

      pagination.classList.add("product-slider__pagination--active");
    });
    el.addEventListener("touchend", (e) => {
      e.preventDefault();
      setTimeout(() => {
        pagination.classList.remove("product-slider__pagination--active");
      }, 500);
    });

    el.addEventListener("mouseenter", e => {
      e.stopPropagation()
      e.preventDefault()
      sliderControlBtns.forEach((btn, idx) => {
        btn.style.opacity = '1'
        btn.style.transform = 'translateX(0px) translateY(-50%)'
      })
      fullscreenBtn.style.opacity = '1'
      pagination.classList.add("product-slider__pagination--active");
    })
    el.addEventListener("mouseleave", e => {
      sliderControlBtns.forEach(btn => {
        btn.style.opacity = null
        btn.style.transform = null
      })
      fullscreenBtn.style.opacity = null
      pagination.classList.remove("product-slider__pagination--active");
    })
  })
}


const implemPhotoSection = document.querySelector('.implemPhoto-section')
if(implemPhotoSection) {
  const products = document.querySelectorAll(".product");
  const productSliders = document.querySelectorAll(".product__slider");
  imagePagination(products);
  if (window.matchMedia("(max-width: 768px)").matches) {
    initProductSliders(productSliders);
  }
  const filters = document.querySelector('.filters')
  const filtersBtns = filters.querySelectorAll("button");
  const allBtn = document.querySelector('button[data-filter="all"]');
  filtersBtns.forEach((el, i) => {
    if(i === 0){
      el.classList.add('active')
    }
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let currentCategory = null

      e.currentTarget.classList.toggle("active");
      if (e.currentTarget.dataset.filter != "all") {
        allBtn.classList.remove('active')
        currentCategory = e.currentTarget.dataset.filter;
      } else {
        clearActive(filtersBtns)
        allBtn.classList.add('active')
        currentCategory = 'all'
      }


      let flag = false;
      for (let i = 0; i < filtersBtns.length; i++) {
        flag = false;
        if (filtersBtns[i].classList.contains("active")) flag = true;
        if(flag) break
      }

      if (!flag) {
        currentCategory = "all";
        allBtn.classList.add("active");
      }
    });
  });
  const clearActive = (items) => {
    items.forEach((item) => item.classList.remove("active"));
  };



  document.querySelectorAll('.product').forEach((item, index) => {
    Fancybox.bind(`[data-fancybox="gal-${index + 1}"]`, {
      Thumbs: {
        type: "classic",
      },
      Carousel: {
        Navigation: {
          prevTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
            " <span></span>" +
            "</div>",
          nextTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
            " <span></span>" +
            "</div>",
        },
      },
    });
  })
}
const contactBtns = document.querySelector('.contact__btns')

if(contactBtns){
  contactBtns.addEventListener('mouseenter', (e) => {
    e.preventDefault()
    e.stopPropagation()
    let S = 0;
    contactBtns.querySelectorAll('.contact__btn').forEach(btn => {
      S += btn.scrollHeight
    })
    contactBtns.style.maxHeight = S + 'px'
  })
  contactBtns.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    e.stopPropagation()

    contactBtns.style.maxHeight = null
  })
}

const implemVideos = document.querySelectorAll('.implemVideo-item__video')

if(implemVideos && implemVideos.length > 0){
  implemVideos.forEach(item => {
    item.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation()
      e.preventDefault()
      const videoSrc = item.dataset.videoSrc
      const modal = document.querySelector('.modal-video')
      modal.querySelector('video').src = videoSrc
      modal.querySelector('video').volume = 0.5
      modal.classList.add('active')
    })
    if(window.matchMedia('min-width: 769px').matches){

      item.querySelector('button').addEventListener('mouseenter', () => {
        item.querySelector('div').style.opacity = '1'
      })
      item.querySelector('button').addEventListener('mouseleave', () => {
        item.querySelector('div').style.opacity = null
      })
    }
  })
}


if(implemObjectsSection) {
  const sliders = document.querySelectorAll('.product__slider')
  // initProductSliders(sliders)
  document.querySelectorAll('.product').forEach((item, index) => {
    Fancybox.bind(`[data-fancybox="objects-${index + 1}"]`, {
      Thumbs: {
        type: "classic",
      },
      Carousel: {
        Navigation: {
          prevTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
            " <span></span>" +
            "</div>",
          nextTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
            " <span></span>" +
            "</div>",
        },
      },
      on : {
        init : (fa) => {
          setTimeout(() => {
            fa.jumpTo(productSlidersArray[index])
          }, 70)
        },
      }
    });
  })
}
const implemReadySliders = document.querySelectorAll('.implemReady-item__slider')
const readyArray = []
if(implemReadySliders && implemReadySliders.length > 0){
  implemReadySliders.forEach((el, index) => {
    const slider = new Swiper(el, {
      slidesPerView: 1,
      navigation: {
        nextEl: `.ready-slider-btn--next-${index+1}`,
        prevEl: `.ready-slider-btn--prev-${index+1}`,
      },
      pagination : {
        el: `.ready-pagination-${index + 1}`
      },
      loop: true,
      lazy: true,
    })

    slider.on('slideChange', () => {
      readyArray[index] = slider.activeIndex-1
    })

    const pagination = el.querySelector(".product-slider__pagination");
    const controlBtns = el.querySelectorAll('.slider-control__btn')
    const fullscreenBtn = el.querySelector('.implemPhoto-section__btn--fullscreen')
    el.addEventListener("touchmove", (e) => {
      e.preventDefault();

      pagination.classList.add("product-slider__pagination--active");
    });
    el.addEventListener("touchend", (e) => {
      e.preventDefault();
      setTimeout(() => {
        pagination.classList.remove("product-slider__pagination--active");
      }, 500);
    });

    el.addEventListener("mouseenter", e => {
      controlBtns.forEach(btn => {
        btn.style.opacity = '1'
        btn.style.transform = 'translate(0px, -50%)'
      })
      fullscreenBtn.style.opacity = '1'
      pagination.classList.add("product-slider__pagination--active");
    })
    el.addEventListener("mouseleave", e => {
      controlBtns.forEach(btn => {
        btn.style.opacity = null
        btn.style.transform = null
      })
      fullscreenBtn.style.opacity = null
      pagination.classList.remove("product-slider__pagination--active");
    })
  })
}
const implemReadySection = document.querySelector('.implemReady-section')

if(implemReadySection) {



  document.querySelectorAll('.implemReady-item__slider').forEach((item, index) => {
    Fancybox.bind(`[data-fancybox="ready-${index + 1}"]`, {
      Thumbs: {
        type: "classic",
      },
      Carousel: {
        Navigation: {
          prevTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--prev item-plan__btn" data-carousel-prev="true">' +
            " <span></span>" +
            "</div>",
          nextTpl:
            '<div class="slider-control__btn slider-control__btn--dark btn--fill slider-control__btn--next item-plan__btn" data-carousel-next="true">' +
            " <span></span>" +
            "</div>",
        },
      },
      on : {
        init : (fa) => {
          setTimeout(() => {
            fa.jumpTo(readyArray[index])
          }, 70)
        },
      }
    });
  })
}


const annText = document.querySelector('.about-main__ann')
const aboutMain = document.querySelector('.about-main')
if(annText){
  const points = [];

  for (let i = 0; i <= 1.0; i += 0.005) {
    points.push(i);
  }
  function callbackObs(entries, observer) {
    let percent = 1;

    percent = (window.scrollY / aboutMain.scrollHeight) * 100;
    if (window.matchMedia("(min-width: 769px)")) {
      annText.style.transform = `translateX(calc(-${percent + 70}%))`;

    } else {
      annText.style.transform = `translateX(calc(-${percent * 4}% + 5rem))`;
    }
  }
  const textObserver = new IntersectionObserver(callbackObs, {
    threshold: points,
  });



  aboutMain.addEventListener("wheel", () => {
    callbackObs();
  });

  aboutMain.addEventListener("touchmove", () => {
    callbackObs();
  });

  document.querySelectorAll('.about-hero__trigger').forEach(el => {
    textObserver.observe(el)
  })
  aboutMain.querySelectorAll('p').forEach(el => {
    textObserver.observe(el)
  })
  annText.querySelectorAll('span').forEach(el => {
    textObserver.observe(el)
  })

}


const aboutVideoBtn = document.querySelector('.about-video__wrapper button')

if(aboutVideoBtn) {
  aboutVideoBtn.addEventListener('click', e => {
    const modal = document.querySelector('.modal-video')
    modal.classList.add('active')
  })
}


const frameCount = 3
const currentFrame = index => {
  return `./../img/timber/${(index + 1).toString().padStart(2, '0')}.png`
}

const preloadImages = () => {
  for(let i = 0; i < frameCount; i++){
    const img = new Image()
    img.src = currentFrame(i)
  }
}

const techMainSlider = new Swiper('.timber-main__slider', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
})


preloadImages()
const mainTriggers = document.querySelectorAll('.timber-main__trigger[data-trig]')
const secTriggers = document.querySelectorAll('.timber-main__trigger')
const offsetTriggers = []

mainTriggers.forEach(el => {
    const elRect = el.getBoundingClientRect();
    offsetTriggers.push(
      elRect.y + (window.pageY || document.documentElement.scrollTop)
    );
})
const timberSlider = document.querySelector('.timber-main__slider')
const techObserver = new IntersectionObserver((entries, observer) => {
  const rect = timberSlider.getBoundingClientRect();
  let offsetItems = rect.y + (window.pageY || document.documentElement.scrollTop);
  entries.forEach(entry => {
    if(entry.isIntersecting){
      offsetTriggers.forEach((el, index) => {
        if (offsetItems > el) {
          techMainSlider.slideTo(index);
        }
      });
    }
  })
}, {
  threshold: 0,
})
mainTriggers.forEach(el => {
  techObserver.observe(el)
})
secTriggers.forEach(el => {
  techObserver.observe(el)
})
