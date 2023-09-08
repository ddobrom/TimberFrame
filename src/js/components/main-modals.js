const modalButtons = document.querySelectorAll('.slide__item')
const heroSection = document.querySelector('.hero')

if(heroSection && modalButtons){
  modalButtons.forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.currentTarget.dataset.src){
        const modalVideo = heroSection.querySelector('.modal-video')
        const src = e.target.dataset.src;
        const video = modalVideo.querySelector('.modal-window__video')
        video.setAttribute('src', src)
        modalVideo.classList.add('active')
        document.body.classList.add('dis-scroll')
      }
      if(e.currentTarget.dataset.tour){
        const modalTour = heroSection.querySelector('.modal-tour')
        const src = e.target.dataset.tour;
        // const panorama = modalTour.querySelector('.modal-pano')
        // panorama.setAttribute('src', src)
        modalTour.classList.add('active')
        document.body.classList.add('dis-scroll')
      }
      if(e.currentTarget.dataset.gallery){
        const sources = e.currentTarget.dataset.gallery
        const modalGallery = heroSection.querySelector('.modal-gallery')
        modalGallery.classList.add('active')
        modalGallery.addEventListener('click', e => e.stopPropagation())
        document.body.classList.add('dis-scroll')
      }
    })
  })
}
document.querySelector('.phone-btn').addEventListener('click', (e) => {
  const modalForm = document.querySelector('.modal-form')
  modalForm.classList.add('active')
})
document.querySelectorAll('.modal').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    if(e.target == el){
      e.currentTarget.classList.remove('active')
      if(document.querySelector('.modal').querySelector('.modal-window__video')){
        document.querySelector('.modal').querySelector('.modal-window__video').setAttribute('src', '')
      }
      document.body.classList.remove('dis-scroll')
    }
  })
})
document.querySelectorAll('.modal__close').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.currentTarget.closest('.modal').classList.remove('active')
    if(document.querySelector('.modal').querySelector('.modal-window__video')){
      document.querySelector('.modal').querySelector('.modal-window__video').setAttribute('src', '')
    }
    document.body.classList.remove('dis-scroll')
  })
})
