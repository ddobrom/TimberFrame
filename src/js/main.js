import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import { CSSRulePlugin } from "gsap/all";
import { gsap } from "gsap";
import Parallax from "parallax-js";

const headerNav = document.querySelector(".nav__list");
const benefitsSection = document.querySelector(".benefit");
const tourSection = document.querySelector(".tour");
const popularSection = document.querySelector(".popular");
const servicesSection = document.querySelector(".services-section");
const projectSection = document.querySelector(".projects-section");
const benHouseSection = document.querySelector(".benefits-house");
const ecoHouseSection = document.querySelector(".eco-house");
const techSection = document.querySelector(".tech");
const addSection = document.querySelector(".add");
const officeSection = document.querySelector(".office");
const ctaSection = document.querySelector(".cta");
const resSection = document.querySelector(".responsibility");

const hce = document.querySelector(".house-content__image.mob-order-3");
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
window.addEventListener("scroll", () => {
  if (window.matchMedia("(min-width: 1440px)").matches) {
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
      isInto(headerNav, techSection) ||
      isInto(headerNav, addSection) ||
      isInto(headerNav, officeSection) ||
      isInto(headerNav, resSection)
    ) {
      document.querySelector(".header").classList.add("dark");
    } else {
      document.querySelector(".header").classList.remove("dark");
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
      document.querySelector(".header").classList.add("dark");
    } else {
      document.querySelector(".header").classList.remove("dark");
    }
  }
  if (
    getCoord(document.querySelector(".mobile-menu")) >=
    getBottom(document.querySelector(".hero"))
  ) {
    document.querySelector(".mobile-menu").style.opacity = "1";
    document.querySelector(".mobile-menu").style.zIndex = "20";
  } else {
    document.querySelector(".mobile-menu").style.opacity = null;
    document.querySelector(".mobile-menu").style.zIndex = null;
  }
});

const projectCards = document.querySelectorAll(".projects-card");
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

const favorites = document.querySelector(".favorites-content");
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
  end: "+=100%",
  scrub: 0.1,
  pin: true,
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
