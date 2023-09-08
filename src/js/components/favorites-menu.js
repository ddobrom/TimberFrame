const fMenuBtn = document.querySelector('.favorites-btn')
const fMenu = document.querySelector('.favorites-menu')
const menuBtn = document.querySelector('.menu-btn')

fMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  menuBtn.classList.add('disabled')
  fMenu.classList.add('menu-active')
  fMenu.classList.remove('menu-disabled')
})
const closeBtn = fMenu.querySelector('.menu__close-btn')
  closeBtn.addEventListener('click', () => {
    fMenu.classList.add('menu-disabled')
    setTimeout(() => {
      fMenu.classList.remove('menu-active')
      menuBtn.classList.remove('disabled')
    }, 500 )

})
