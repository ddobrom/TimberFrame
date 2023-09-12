import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import { CSSRulePlugin } from "gsap/all";

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

window.addEventListener("scroll", () => {
  if (
    isInto(headerNav, benefitsSection) ||
    isInto(headerNav, popularSection) ||
    isInto(headerNav, servicesSection) ||
    isInto(headerNav, projectSection) ||
    isInto(headerNav, ecoHouseSection) ||
    isInto(headerNav, techSection) ||
    isInto(headerNav, addSection) ||
    isInto(headerNav, officeSection)
  ) {
    document.querySelector(".header").classList.add("dark");
  } else {
    document.querySelector(".header").classList.remove("dark");
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
document.querySelector('.wrapper').style.minHeight = document.querySelector('.wrapper').scrollHeight * 2 + 'px'
let rule = CSSRulePlugin.getRule('.parallax__body::before')
const tl = gsap.timeline();
tl.fromTo(".parallax__body",{backgroundSize: '50% 50%'}, {
  backgroundSize: '100% 100%'
})
.set(rule, {cssRule: {opacity: 1}})
.to(".benefits-house__content", {yPercent: -115, ease: "linear", })

ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  ease: 'none',
    start: "top top",
    end: "bottom",
    scrub: 0.4,
    pin: '.parallax',
})




