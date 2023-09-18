import simpleParallax from 'simple-parallax-js';
import { gsap } from 'gsap/gsap-core';
const bh1 = document.getElementById('bh1')
const bh2 = document.getElementById('bh2')
const bh3 = document.getElementById('bh3')
const bh4 = document.getElementById('bh4')
const bh5 = document.getElementById('bh5')


new simpleParallax(bh1, {
  scale: 1.2,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});


new simpleParallax(bh2, {
  scale: 2,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(bh3, {
  scale: 1.2,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(bh4, {
  scale: 1.2,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(bh5, {
  scale: 1.2,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});



// const shT = gsap.timeline()

// shT.to('.shadow__body', {yPercent: -85})

// ScrollTrigger.create({
//   animation: shT,
//   trigger: '.tech',
//   start: 'top bottom-=100px',
//   end: '+=700',
//   scrub: true,
//   markers: true
// })
