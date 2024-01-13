import Lenis from "@studio-freight/lenis";

import { Swiper } from "swiper/bundle";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Thumbs, Autoplay, Pagination]);
import initFilters from "./initFilters.js";
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

if(document.querySelector('.filters')){
  initFilters()
}

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
    }, 3500)
  } else {
    onResize()
      lenis.start()
      ScrollTrigger.update()
  }
})




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
    const items = document.querySelectorAll('.services-section__item')
    let scrollOffset = document.querySelector('.services-section__container').scrollHeight - items[8].scrollHeight - items[7].scrollHeight - items[6].scrollHeight - document.querySelector('.services-section__left').scrollHeight
    ScrollTrigger.create({
      trigger: ".services-section__container",
      start: "top top+=80px",
      end: "+=" + scrollOffset,
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
var favElements = JSON.parse(localStorage.getItem("goods")) ? JSON.parse(localStorage.getItem("goods")) : []
var favId = JSON.parse(localStorage.getItem("id")) ? JSON.parse(localStorage.getItem("id")) : []
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


import data from "./main-houses-data.js";

const favBtns = document.querySelectorAll(".btn--like");
const favQuantity = document.querySelector(".favorites-menu__count");
const favBtnQuantity = document.querySelectorAll(".favorites-btn__quantity");




const deleteFav = (id) => {
  console.log(id);
  updateStorage(null, null, id);
  document
    .querySelector(`[data-id="${id}"]`)
    .querySelector(".btn--like")
    .classList.remove("active");
  printQuantity();
};

favBtns.forEach((el) => {
  if (el.closest(".projects-card")) {
    el.closest(".projects-card").setAttribute("data-id", new Date().getTime());
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let parent = self.closest(".projects-card");
      let id = parent.dataset.id;
      if (!self.classList.contains("active")) {
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

        updateStorage(generateFavoriteItem(img, srcset, title, info, link, id), id);
        printQuantity();
      } else {
        deleteFav(id);
      }
    });
  }

  if (el.closest(".hero__slider")) {
    el.closest(".swiper-slide").setAttribute("data-id", new Date().getTime());
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let id = el.closest(".swiper-slide").dataset.id;
      if (!self.classList.contains("active")) {
        self.classList.add("active");
        let title = el
          .closest(".swiper-slide")
          .querySelector(".slide__title")
          .textContent.toLowerCase()
          .trim();
        console.log(title);
        updateStorage(generateFavoriteItem(
          data[title].img,
          data[title].srcset,
          data[title].title,
          data[title].info,
          data[title].link,
          id
        ), id);
        printQuantity();
      } else {
        deleteFav(id);
      }
    });
  }

  if (el.closest(".popular-card")) {
    el.closest(".popular-card").setAttribute("data-id", new Date().getTime());
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let id = el.closest(".popular-card").dataset.id;
      if (!self.classList.contains("active")) {
        self.classList.add("active");
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
        updateStorage(generateFavoriteItem(img, srcset, title, info, link, id), id);
        printQuantity();
      } else {
        deleteFav(id);
      }
    });
  }

  if (el.closest(".popular__images")) {
    el.closest(".swiper-slide").setAttribute("data-id", new Date().getTime());

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
        updateStorage(generateFavoriteItem(img, srcset, title, info, link, id), id);
        printQuantity();
      } else {
        let id = el.closest(".swiper-slide").dataset.id;
        document
          .querySelector(`[data-id="${id}"]`)
          .querySelector(".btn--like")
          .classList.remove("active");
        printQuantity();
      }
    });
  }

  if (el.closest(".item-product")) {
    el.closest(".item-product").setAttribute("data-id", new Date().getTime());
    el.addEventListener("click", (e) => {
      let self = e.currentTarget;
      let parent = self.closest(".item-product");
      let id = parent.dataset.id;
      if (!self.classList.contains("active")) {
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
        updateStorage(generateFavoriteItem(img, srcset, title, info, link, id), id);
        printQuantity();
      } else {
        deleteFav(id);
      }
    });
  }
  if (el.closest(".product")) {

    el.closest(".product").setAttribute("data-id", new Date().getTime());
    el.addEventListener("click", (e) => {
      console.log('closest product');
      let self = e.currentTarget;
      let parent = self.closest(".product");
      let id = parent.dataset.id;
      if (!self.classList.contains("active")) {
        let img = parent.querySelector("img").src;
        let srcset = parent
          .querySelector("source")
          .getAttribute("srcset");

          const data = parent.querySelector('.product-info')
        let title = data.querySelector("h3").textContent;
        let link = parent.querySelector(".product__link").getAttribute("href");
        let info = {
          square: parent.querySelector("[data-sq]").dataset.sq,
          floors: parent.querySelector("[data-fl]").dataset.fl,
          bedrooms: parent.querySelector("[data-bed]").dataset.bed,
          bathrooms: parent.querySelector("[data-bath]").dataset.bath,
          place: parent.querySelector("[data-pl]").dataset.pl
        }
        self.classList.add("active");
        updateStorage(generateFavoriteItem(img, srcset, title, info, link, id), id);
        printQuantity();
      } else {
        deleteFav(id);
      }
    });
  }
});
const printQuantity = () => {
  let length = JSON.parse(localStorage.getItem("goods")) ? JSON.parse(localStorage.getItem("goods")).length : 0;
  favBtnQuantity.forEach((el) => (el.textContent = length));
};


const generateFavoriteItem = (img, srcset, title, info, link, id) => {
  return `
      <li class="catalogue__item">
          <article class="catalogue__product product" data-id="${id}">
            <button class="product__btn btn btn--like btn--stroke btn-reset active">
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
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                  </div>
                  <div class="image-switch__item">
                    <div class="image-switch__img">
                      <picture>
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                  </div>
                  <div class="image-switch__item">
                    <div class="image-switch__img">
                      <picture>
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="product__slider swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <picture>
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                    <div class="swiper-slide">
                      <picture>
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                    <div class="swiper-slide">
                      <picture>
                        <source srcset="${srcset}" type="image/jpg" media="(min-width: 1440px)" />
                        <source srcset="${srcset}" type="image/jpg" />
                        <img src="${img}" srcset="${img}" alt="Product 1" />
                      </picture>
                    </div>
                  </div>
                  <div class="swiper-pagination product-slider__pagination"></div>
                </div>
                <ul class="pruoduct__image-pagination image-pagination list-reset"></ul>
              </div>
              <div class="product__info product-info">
                <div class="product-info__left">
                  <h3>${title}</h3>
                  <span>от 12000 <svg class="">
                      <use xlink:href="img/sprite.svg#rub"></use>
                    </svg></span>
                </div>
                <ul>
                  <li class="product-info__item product-info__item--sq" data-sq="200">
                    <div class="product-info__figure">
                      ${info.square} <span>м<sup>2</sup></span>
                    </div>
                  </li>
                  <li data-fl="2">
                    <div class="product-info__figure">${info.floors} <span>${declOfNum(info.floors, ['этаж', 'этажа', 'этажей'])}</span></div>
                  </li>
                  <li data-bed="5">
                    <div class="product-info__figure">${info.bedrooms} <span>${declOfNum(info.floors, ['спальня', 'спальни', 'спален'])}</span></div>
                  </li>
                  <li data-bath="2">
                    <div class="product-info__figure">${info.bathrooms} <span>${declOfNum(info.bedrooms, ['ванная', 'ванных', 'ванн'])}</span></div>
                  </li>
                  <li data-pl="100">
                    <div class="product-info__figure">${info.place} <span>площадь</span></div>
                  </li>
                </ul>
              </div>
            </a>
          </article>
        </li>
    `;
};
const catalogueContent = document.querySelector('.catalogue--favorites')

catalogueContent?.addEventListener('click', e => {
  if(e.target.classList.contains('btn--like')){
    e.target.classList.remove('active')
    deleteFav(e.target.closest('[data-id]').dataset.id)

    catalogueContent.removeChild(e.target.closest('li'))
    printQuantity()
  }
})
const initialState = () => {
  if (localStorage.getItem("goods")) {
    JSON.parse(localStorage.getItem("goods"))?.forEach(item => {
      if(catalogueContent){
        catalogueContent.innerHTML += item
      }
    })}

    printQuantity();
    document
      .querySelectorAll("[data-id]")
      .forEach(el => {
        JSON.parse(localStorage.getItem("id"))?.forEach(id => {
          if(el.dataset.id == id){
            el.querySelector('.btn--like').classList.add('active')
          }
        })
      })
};

const updateStorage = (element = '', id = null, delId = null) => {
  console.log(delId);
  if(element && id){
    favElements.push(element)
    favId.push(id)
  }

  if(delId){
    let index = -1;
    for(let i = 0; i < favElements.length; i++){
      if(favId[i] == delId){
        index = i;
      }
    }
    favElements.splice(index, 1)
    favId.splice(index, 1)
    console.log('sdkfjsdfijsdifsdjf');
  }

  if (favElements.length) {
    localStorage.setItem("goods", JSON.stringify(favElements));
  } else {
    localStorage.removeItem("goods");
  }
  if (favId.length) {
    localStorage.setItem("id", JSON.stringify(favId));
  } else {
    localStorage.removeItem("id");
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
    });
  });
}


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










upBtn?.addEventListener("click", () => {
  lenis.scrollTo(".site-container");
});

const allItems = document.querySelectorAll(".product__image");

window.addEventListener("scroll", () => {
  if (heroSection) {
    func();
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
import imagePagination from './imagePagination.js'
import declOfNum from "./declOfNum.js";
const products = document.querySelectorAll('.product')
if(products && products.length > 0){
  imagePagination(products)
}
const implemPhotoSection = document.querySelector('.implemPhoto-section')
if(implemPhotoSection) {
  const productSliders = document.querySelectorAll(".product__slider");
  if (window.matchMedia("(max-width: 768px)").matches) {
    initProductSliders(productSliders);
  }



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
    let percent = -10;

    percent = (window.scrollY / aboutMain.scrollHeight) * 100;
    if (window.matchMedia("(min-width: 769px)")) {
      annText.style.transform = `translateX(calc(-${percent}%))`;

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


// const frameCount = 3
// const currentFrame = index => {
//   return `./../img/timber/${(index + 1).toString().padStart(2, '0')}.png`
// }

// const preloadImages = () => {
//   for(let i = 0; i < frameCount; i++){
//     const img = new Image()
//     img.src = currentFrame(i)
//   }
// }

// const techMainSlider = new Swiper('.timber-main__slider', {
//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
// })
// const techSecSlider = new Swiper('.timber-sec__slider', {
//   slidesPerView: 1,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
// })


// preloadImages()

// const mainTriggers = document.querySelectorAll('.timber-main__trigger[data-trig]')
// const secTriggers = document.querySelectorAll('.timber-main__trigger')

// const techSecTriggers = document.querySelectorAll('.timber-sec__trigger[data-trig]')
// const techAddTriggers = document.querySelectorAll('.timber-sec__trigger')

// const offsetAddTriggers = []

// const offsetTriggers = []

// mainTriggers.forEach(el => {
//     const elRect = el.getBoundingClientRect();
//     offsetTriggers.push(
//       elRect.y + (window.pageY || document.documentElement.scrollTop)
//     );
// })

// techSecTriggers.forEach(el => {
//     const elRect = el.getBoundingClientRect();
//     offsetAddTriggers.push(
//       elRect.y + (window.pageY || document.documentElement.scrollTop)
//     );
// })


// const timberSlider = document.querySelector('.timber-main__slider')
// const timberSecSlider = document.querySelector('.timber-sec__slider')

// function observeTimber(sliderSection, slider, offset, triggers, triggersSec){
//   const points = []
//   for(let i = 0; i < 1.0; i+= 0.05){
//     points.push(i)
//   }

//   const techObserver = new IntersectionObserver((entries, observer) => {
//     const rect = sliderSection.getBoundingClientRect();
//     let offsetItems = rect.y + (window.pageY || document.documentElement.scrollTop);
//     entries.forEach(entry => {
//       if(entry.isIntersecting){
//         offset.forEach((el, index) => {
//           if (offsetItems > el) {
//             slider.slideTo(index);
//           }
//         });
//       }
//     })
//   }, {
//     threshold: points,
//   })

//   triggers.forEach(el => {
//     techObserver.observe(el)
//   })
//   triggersSec.forEach(el => {
//     techObserver.observe(el)
//   })
// }


// observeTimber(timberSlider, techMainSlider, offsetTriggers, mainTriggers, secTriggers)
// observeTimber(timberSecSlider, techSecSlider, offsetAddTriggers, techSecTriggers, techAddTriggers)


if(document.querySelector('.timber-main__content--main')){

  const timelineMain = gsap.timeline()

  const images = document.querySelectorAll('.timber-main__content--main .timber-item__image')
  const imagesContainer = document.querySelector('.timber-main__content--main .timber-item__images')

  const texts = document.querySelectorAll('.timber-main__content--main .timber-item__text')
  const textsContainer = document.querySelectorAll('.timber-main__content--main .timber-item__content')


  const timelineImages = gsap.timeline()
  const timelineText = gsap.timeline()
  gsap.set([texts[0], texts[1], texts[2]], {y: "2rem", opacity: 0})
  timelineText.to(texts[0], {y: "-1rem", opacity: 1, duration: 1})
  timelineText.to(texts[0], {y: "-3rem", opacity: 0})
  timelineText.to(texts[1], {y: "-1rem", opacity: 1, duration: 1})
  timelineText.to(texts[1], {y: "-3rem", opacity: 0})
  timelineText.to(texts[2], {y: "-1rem", opacity: 1, duration: 1})
  let startPos = 'top top'
  if(window.matchMedia('(max-width: 768px)').matches){
    startPos = 'top top+=70'
  }
  ScrollTrigger.create({
    animation: timelineText,
    trigger: '.timber-main__content',
    start: startPos,
    end: "bottom",
    scrub: 1,
    ease: 'ease-out',
    invalidateOnRefresh: true
  })

  timelineImages.to(images[0], {visibility: 'visible'})
  timelineImages.set(images[0], {visibility: 'hidden'})
  timelineImages.to(images[1], {visibility: 'visible'})
  timelineImages.set(images[1], {visibility: 'hidden'})
  timelineImages.to(images[2], {visibility: 'visible'})

  ScrollTrigger.create({
    animation: timelineImages,
    trigger: '.timber-main__content',
    start: startPos,
    end: "bottom",
    scrub: 1,
    ease: 'none',
    invalidateOnRefresh: true
  })


  ScrollTrigger.create({
    animation: timelineMain,
    trigger: '.timber-main__content',
    start: startPos,
    bottom: "+=250%",
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  })
  gsap.set(imagesContainer, {yPercent: 10})
  gsap.to(imagesContainer, {yPercent: 5, scrollTrigger: {
    trigger: '.timber-main__content',
    start: startPos,
    bottom: "+=250%",
    scrub: 1,
    invalidateOnRefresh: true
  }})




  const timelineSec = gsap.timeline()

  const imagesSec = document.querySelectorAll('.timber-main__content--sec .timber-item__image')
  const imagesContainerSec = document.querySelector('.timber-main__content--sec .timber-item__images')

  const textsSec = document.querySelectorAll('.timber-main__content--sec .timber-item__text')
  const textsContainerSec = document.querySelectorAll('.timber-main__content--sec .timber-item__content')


  const timelineImagesSec = gsap.timeline()
  const timelineTextSec = gsap.timeline()

  gsap.set([textsSec[0], textsSec[1], textsSec[2]], {y: "1rem", opacity: 0})

  timelineTextSec.to(textsSec[0], {y: "-1rem", opacity: 1, duration: 0.8})
  timelineTextSec.to(textsSec[0], {y: "-3rem", opacity: 0})
  timelineTextSec.to(textsSec[1], {y: "-1rem", opacity: 1, duration: 0.8})
  timelineTextSec.to(textsSec[1], {y: "-3rem", opacity: 0})
  timelineTextSec.to(textsSec[2], {y: "-1rem", opacity: 1, duration: 0.8})

  ScrollTrigger.create({
    animation: timelineTextSec,
    trigger: '.timber-main__content--sec',
    start: startPos,
    end: "bottom",
    scrub: 1,
    ease: 'ease-out',
    invalidateOnRefresh: true,
    toggleActions:"play none none reverse",
  })

  timelineImagesSec.to(imagesSec[0], {visibility: 'visible'})
  timelineImagesSec.to(imagesSec[1], {visibility: 'visible'})
  timelineImagesSec.to(imagesSec[2], {visibility: 'visible'})

  ScrollTrigger.create({
    animation: timelineImagesSec,
    trigger: '.timber-main__content--sec',
    start: startPos,
    end: "bottom",
    scrub: 1,
    ease: 'none',
    invalidateOnRefresh: true,
    toggleActions:"play none none reverse",
    pinSpacing: true
  })


  ScrollTrigger.create({
    animation: timelineSec,
    trigger: '.timber-main__content--sec',
    start: startPos,
    bottom: "+=250%",
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  })
  gsap.set(imagesContainerSec, {yPercent: 10})
  gsap.to(imagesContainerSec, {yPercent: 5, scrollTrigger: {
    trigger: '.timber-main__content--sec',
    start: startPos,
    bottom: "+=300%",
    scrub: 0.8,
    invalidateOnRefresh: true
  }})


  const readyTl = gsap.timeline()
  const items = document.querySelectorAll('.timber-ready li')

  items.forEach(item => {
    readyTl.fromTo(item, {xPercent: 50, opacity: 0}, {xPercent: 0, opacity: 1, scrollTrigger : {
      trigger: item,
      start: 'bottom bottom-=25%',
      end: '+=200',
      scrub: 1
    }})
    // ScrollTrigger.create({
    //   trigger: item,
    //   start: 'bottom center',
    //   end: '+=200',
    //   animation: readyTl,
    //   scrub: 1
    // })
  })

}



