import AOS from 'aos'
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,


  offset: 10,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',

})
