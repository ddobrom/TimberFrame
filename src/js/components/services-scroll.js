import { ScrollTrigger } from "gsap/all";

const itemsTexts = document.querySelectorAll(".services-section__text");
const line = document.querySelector(".services-section__right");
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
let t1 = gsap.timeline();
t1.to(".services-section__list", { yPercent: -100 });

ScrollTrigger.create({
  animation: t1,
  trigger: ".services-section__container",
  start: "top top",
  end: "bottom",
  scrub: true,
  pin: true,
});



