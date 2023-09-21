import {gsap} from 'gsap'
const circles = document.querySelectorAll('.progress')
circles.forEach(el => {
  let percentageProgress = parseInt(el.dataset.percents)
  let radius = parseInt(window.getComputedStyle(el).r)
  let circleLength = 2 * Math.PI * radius;
  el.setAttribute('stroke-dasharray', circleLength)
  el.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)
})


// const timeline = gsap.timeline()

// timeline.to('.responsibility__item--1', {y: 200})
//         .to('.responsibility__item--2', {y: 200})
//         .to('.responsibility__item--3', {y: 200})
//         .to('.responsibility__item--4', {y: 200})

// ScrollTrigger.create({
//   trigger: '.responsibility',

//   scrub: 1,
//   pin: '.responsibility__items',
//   animation: timeline,
//   start: 'top top',
//   end: '+=300',
//   markers: true,
// })
