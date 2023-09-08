import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  isScrolled()
});

const isScrolled = () => {
  window.scrollY
    ? header.classList.add('moved')
    : header.classList.remove('moved')
}
isScrolled()



const projectCards = document.querySelectorAll('.projects-card')
projectCards.forEach(el => {
  const details = el.querySelector('.projects-card__details')
  el.addEventListener('mouseenter', () => {
    details.classList.add('active')
    details.style.maxHeight = details.scrollHeight + 'px'
  })
  el.addEventListener('mouseleave', () => {
    details.classList.remove('active')
    details.style.maxHeight = null
  })
})



const forms = document.querySelectorAll('.form')

forms.forEach(f => {
  const inputs = document.querySelectorAll('.form__input')

  inputs.forEach(i => {
    i.addEventListener('click', () => {
      if(i.classList.contains('focus-visible')){
        inputs.forEach(el => el.closest('.form__label').querySelector('span').classList.remove('focus'))
        i.closest('.form__label').querySelector('span').classList.add('focus')
      }
    })
  })
})



const bg = document.querySelector('.bg')
const benefitsHouseSection = document.querySelector('.benefits-house')
// const scrollAnimation = () => {
//   let windowCenter = (window.innerHeight / 2) + window.scrollY;

//   let scrollOffset = benefitsHouseSection.offsetTop + (benefitsHouseSection.offsetHeight / 2)
//   if(bg.classList.contains('active')) return
//   if(windowCenter >= scrollOffset){
//     bg.classList.add('active')
//     benefitsHouseSection.querySelector('.benefits-house__content').classList.remove('benefits-house__content--disabled')
//   } else {
//     bg.classList.remove('active')
//   }
// }
// window.addEventListener('scroll', () => scrollAnimation())
let t = gsap.timeline()

// t.to('.bg', {scale: 2})
t.to('.benefits-house__content', {width: '100%', minHeight: '100vh'})

ScrollTrigger.create({
  trigger: '.benefits-house__content',
  ease: 'linear',
  start: 'center center',
  end: 'bottom 200px',
  animation: t,
  onEnter: () => {
    document.querySelectorAll('.dis-opacity').forEach(el => el.classList.remove('dis-opacity'))
    document.querySelector('.benefits-house__content').classList.add('active')
  }
})
window.addEventListener('scroll', () => {

  if(document.querySelector('.bg') === window.clientWidth){
    console.log('wwwww');
  }
})

