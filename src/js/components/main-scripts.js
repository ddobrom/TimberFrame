// import { gsap } from "./gsap";
// import { CSSRulePlugin, ScrollTrigger } from "./gsap/all";
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
  techSection,
  addSection,
  officeSection,
  resSection,
  heroSection,
  mobileMenu,
  catalogue
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
  if (
    getCoord(mobileMenu) >=
    getBottom(heroSection)
  ) {
    mobileMenu.style.opacity = "1";
    mobileMenu.style.zIndex = "20";
  } else {
    mobileMenu.style.opacity = null;
    mobileMenu.style.zIndex = null;
  }
};
let func = throttle(setHeaderTheme);
if (heroSection) {
  window.addEventListener("scroll", func);
}
if (catalogue) {
  const allItems = document.querySelectorAll(".product__image");
  window.addEventListener("scroll", () => {
    const isOne = [];
    allItems.forEach((el) => {
      isOne.push(isInto(headerNav, el));
    });
    if (isOne.includes(true)) {
      header.classList.remove("dark");
    } else {
      header.classList.add("dark");
    }
  });
}
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
  const inputs = document.querySelectorAll(".form__input");

  inputs.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.classList.contains("focus-visible")) {
        inputs.forEach((el) =>
          el
            .closest(".form__label")
            .querySelector("span")
            .classList.remove("focus")
        );
        i.closest(".form__label").querySelector("span").classList.add("focus");
      }
    });
  });
});

// setTimeout(() => {
//   if (document.querySelector(".parallax")) {
//     gsap.registerPlugin(CSSRulePlugin);
//     let rule = CSSRulePlugin.getRule(".parallax__wrapper::before");
//     const timeLine1 = gsap.timeline();
//     timeLine1
//       .fromTo(".parallax__body", { scale: 0.5 }, { scale: 1 })
//       .set(rule, { cssRule: { opacity: 1 } });

//     ScrollTrigger.create({
//       animation: timeLine1,
//       trigger: ".parallax__wrapper",
//       start: "top top",
//       end: "+=100%",
//       scrub: 0.1,
//       pin: true,
//       invalidateOnRefresh: true,
//     });
//   }
// }, 0)

export { servicesSection };
