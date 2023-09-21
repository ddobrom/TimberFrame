import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/all"

const shadowAnim = gsap.timeline()
shadowAnim.to('.shadow__body', {yPercent: -90})


if(window.matchMedia("(max-width: 768px)").matches){
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger : '.shadow',
    start: "top bottom-=10%",
    end : "+=600px",
    scrub: 0.5,
  })
} else {
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger : '.shadow',
    start: "top bottom-=25%",
    end : "+=300px",
    scrub: 0.5,
  })
}

