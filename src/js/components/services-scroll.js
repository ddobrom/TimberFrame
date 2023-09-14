import { ScrollTrigger } from "gsap/all";
import {gsap} from 'gsap'
const itemsTexts = document.querySelectorAll(".services-section__text");
const line = document.querySelector(".services-section__line");
window.addEventListener("scroll", () => {
  itemsTexts.forEach((el) => {
    if (
      el.getBoundingClientRect().bottom < line.getBoundingClientRect().bottom
    ) {
      el.closest(".services-section__item").classList.add("active");
    } else {
      el.closest(".services-section__item").classList.remove("active");
    }
  });
});


let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {

  let t1 = gsap.timeline();
  t1.to(".services-section__list", { yPercent: -100 });

    ScrollTrigger.create({
      animation: t1,
      trigger: ".services-section__line",
      start: "center center",
      end: "bottom",
      scrub: 0.1,
      pin: '.services-section__container',
      normalize: true,
      markers: true
    })
})


