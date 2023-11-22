import { ScrollTrigger, CSSRulePlugin } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger)

// services section


const itemsTexts = document.querySelectorAll(".services-section__text");

if (itemsTexts.length > 0) {
  const line = document.querySelector(".services-section__line");
  const firstItem = document.querySelector(".services-section__item");
  let listHeight = document.querySelector(
    ".services-section__list"
  ).scrollHeight;
  window.addEventListener("scroll", () => {
    itemsTexts.forEach((el) => {
      if (
        el.getBoundingClientRect().bottom < line.getBoundingClientRect().bottom
      ) {
        el.closest(".services-section__item").classList.add("active");
      } else {
        if (el.closest(".services-section__item") != firstItem) {
          el.closest(".services-section__item").classList.remove("active");
        }
      }
    });
  }, {passive: true});

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
    function onResize(){
      ScrollTrigger.refresh(true)
      ScrollTrigger.update()

    }
    ScrollTrigger.addEventListener("refreshInit", onResize);
    ScrollTrigger.create({
      animation: t1,
      trigger: ".services-section__line",
      start: "center center",
      end: "bottom+=500px",
      scrub: 0.1,
      pin: ".services-section__container",
      invalidateOnRefresh: true,
    });
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    firstItem.classList.add("active");
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
      end: "+=100%",
      scrub: 0.1,
      pin: true,
      invalidateOnRefresh: true,
    });
  }
}, 0)

// shadow transition
if(document.querySelector('.shadow')){

  const shadowAnim = gsap.timeline();
  shadowAnim.fromTo(".shadow__body",{backgroundColor: '#000000'}, { backgroundColor: '#e4e4e4'});
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger: ".eco-house",
    start: "bottom-=25% top",
    end: "+=500px",
    scrub: 0.5,
  });
}
