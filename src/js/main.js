import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import { CSSRulePlugin } from "gsap/all";
import {gsap} from 'gsap'

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

// window.addEventListener("scroll", () => {
//   if (
//     isInto(headerNav, benefitsSection) ||
//     isInto(headerNav, popularSection) ||
//     isInto(headerNav, servicesSection) ||
//     isInto(headerNav, projectSection) ||
//     isInto(headerNav, ecoHouseSection) ||
//     isInto(headerNav, techSection) ||
//     isInto(headerNav, addSection) ||
//     isInto(headerNav, officeSection)
//   ) {
//     document.querySelector(".header").classList.add("dark");
//   } else {
//     document.querySelector(".header").classList.remove("dark");
//   }
// });

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


gsap.registerPlugin(CSSRulePlugin)
let rule = CSSRulePlugin.getRule(".parallax__wrapper::before")
const timeLine1 = gsap.timeline()
const timeLine2 = gsap.timeline()
timeLine1.fromTo('.parallax__body',{scale: 0.5}, {scale: 1})
.set(rule, {cssRule: {opacity: 1} })
ScrollTrigger.create({
  animation: timeLine1,
  trigger: '.parallax__wrapper',
  start: 'top top',
  end: '+=100%',
  scrub: 0.1,
  pin: true,
  onLeave: () => {

  }
})
