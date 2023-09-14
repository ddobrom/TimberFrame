import {gsap} from 'gsap'
const circles = document.querySelectorAll('.progress')

circles.forEach(el => {
  let percentageProgress = el.dataset.percents
  let radius = el.getAttribute('r')
  let circleLength = 2 * Math.PI * radius;
  el.setAttribute('stroke-dasharray', circleLength)
  el.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)
})


const timeline = gsap.timeline()

// timeline.to('.responsibility__item--1', {zIndex: 1})
//         .to('.responsibility__item--2', {zIndex: 2,display: 'block'})
//         .to('.responsibility__item--3', {zIndex: 3,display: 'block'})
//         .to('.responsibility__item--4', {zIndex: 4,display: 'block'})

// ScrollTrigger.create({
//   trigger: '.responsibility__item',

//   scrub: 1,
//   pin: '.responsibility',
//   animation: timeline,
//   start: 'top center',
//   end: '+=300',
// })
