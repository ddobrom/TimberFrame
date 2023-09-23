import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/all"

const shadowAnim = gsap.timeline()
shadowAnim.to('.shadow__body', {yPercent: -95})


if(window.matchMedia("(max-width: 768px)").matches){
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger : '.house-content__image--centered',
    start: "center bottom-=20%",
    end : "+=600px",
    scrub: 0.5,
    markers: true,
  })
}
else if (window.matchMedia("(min-width: 1440px)").matches){
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger : '.house-content__image--centered',
    start: "center center+=20%",
    end : "+=1000px",
    scrub: 0.5,
    markers: true,
  })
}
else {
  ScrollTrigger.create({
    animation: shadowAnim,
    trigger : '.house-content__image--centered',
    start: "center bottom-=20%",
    end : "+=600px",
    scrub: 0.5,
    markers: true,
  })
}

