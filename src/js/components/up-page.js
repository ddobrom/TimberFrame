const upBtn = document.querySelector('.up-page-btn')
const downBtn = document.querySelector('.hero__btn-down')
import lenis from './smooth-scroll'

if(upBtn){
  upBtn.addEventListener('click', () => {
    lenis.scrollTo(".site-container")
  })
  window.addEventListener('scroll', () => {
    if(scrollY >= document.documentElement.clientHeight * 2){
      upBtn.style.display = 'block'
      upBtn.style.opacity = '1'
    } else {
      upBtn.style.display = null
      upBtn.style.opacity = null
    }
  })

}
if(downBtn){
  downBtn.addEventListener('click', (e) => {
    e.preventDefault();
      lenis.scrollTo('#benefit')
  })
}

