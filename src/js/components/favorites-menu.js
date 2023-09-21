const fMenuBtn = document.querySelector('.favorites-btn')
const fMenu = document.querySelector('.favorites-menu')
const menuBtn = document.querySelector('.menu-btn')
const mobileFavoritesMenu = document.querySelector('.mobile-menu__btn--favorites')
fMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  menuBtn.classList.add('disabled')
  fMenu.classList.add('menu-active')
  fMenu.classList.remove('menu-disabled')
  document.body.style.overflow = 'hidden'
})
mobileFavoritesMenu.addEventListener('click', (e) => {
  e.stopPropagation()
  menuBtn.classList.add('disabled')
  fMenu.classList.add('menu-active')
  fMenu.classList.remove('menu-disabled')
  document.body.style.overflow = 'hidden'
})
const closeBtn = fMenu.querySelector('.menu__close-btn')

closeBtn.addEventListener('click', () => {
    fMenu.classList.add('menu-disabled')
    setTimeout(() => {
      fMenu.classList.remove('menu-active')
      menuBtn.classList.remove('disabled')
      document.body.style.overflow = null
    }, 500 )
})


if(fMenu.classList.contains('menu-active')){
  document.body.style.overflow = 'hidden'
}
