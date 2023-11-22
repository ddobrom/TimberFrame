const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.main-menu')
const fMenuBtn = document.querySelector('.favorites-btn')
// import lenis from './smooth-scroll'
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  fMenuBtn.classList.add('disabled')
  menu.classList.add('menu-active')
  menu.classList.remove('menu-disabled')
  document.body.style.overflow = 'hidden'
  // lenis.stop()
})
const closeBtn = menu.querySelector('.menu__close-btn')
  closeBtn.addEventListener('click', () => {
    menu.classList.add('menu-disabled')
    setTimeout(() => {
      menu.classList.remove('menu-active')
      fMenuBtn.classList.remove('disabled')
      document.body.style.overflow = null
      lenis.start()
    }, 500)
  })
