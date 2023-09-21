const upBtn = document.querySelector('.up-page-btn')

upBtn.addEventListener('click', () => {
  window.scrollTo(scrollY, 0);
})

window.addEventListener('scroll', () => {
  if(scrollY >= document.documentElement.offsetHeight * 2){
    upBtn.style.display = 'block'
    upBtn.style.opacity = '1'
  } else {
    upBtn.style.display = null
    upBtn.style.opacity = null
  }
})
