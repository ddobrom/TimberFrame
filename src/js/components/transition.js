import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const shadowAnim = gsap.timeline();
shadowAnim.fromTo(".shadow__body",{yPercent: -55}, { yPercent: -95 });

if (window.matchMedia("(max-width: 768px)").matches) {
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger: ".eco-house",
    start: "bottom+=10% bottom-=30%",
    end: "+=600px",
    scrub: 0.5,
  });
} else if (window.matchMedia("(min-width: 1440px)").matches) {
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger: ".eco-house",
    start: "bottom bottom-=30%",
    end: "+=1000px",
    scrub: 0.5,
  });
} else {
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger: ".house-content__image--centered",
    start: "bottom-=20% bottom-=30%",
    end: "+=600px",
    scrub: 0.5,
  });
}
