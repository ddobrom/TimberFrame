const upBtn = document.querySelector('.up-page-btn')
const downBtn = document.querySelector('.hero__btn-down')
import lenis from './smooth-scroll'
upBtn.addEventListener('click', () => {
  window.scrollTo(scrollY, 0);
})
downBtn.addEventListener('click', (e) => {
  e.preventDefault();
    lenis.scrollTo('#benefit')
})
window.addEventListener('scroll', () => {
  if(scrollY >= document.documentElement.offsetHeight){
    upBtn.style.display = 'block'
    upBtn.style.opacity = '1'
  } else {
    upBtn.style.display = null
    upBtn.style.opacity = null
  }
})

