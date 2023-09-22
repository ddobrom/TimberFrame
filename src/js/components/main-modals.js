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
        const sources = Array.from(e.currentTarget.dataset.gallery.split(','))
        const modalGallery = heroSection.querySelector('.modal-gallery')
        sources.forEach(src => {
          document.querySelector('.gallery__slider').querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', generateGallerySlides(src))
          document.querySelector('.gallery__slider-mini').querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', generateGallerySlidesMini(src))
        })
        console.log(sources);
        modalGallery.classList.add('active')
        modalGallery.addEventListener('click', e => e.stopPropagation())
        document.body.classList.add('dis-scroll')
      }
    })
  })
}

const generateGallerySlides = (src) => {
  return `
    <div class="swiper-slide">
      <div class="gallery__item">
        <img src="${src}" alt="Photo of House">
      </div>
    </div>
  `
}
const generateGallerySlidesMini = (src) => {
  return `
  <div class="swiper-slide">
    <div class="gallery__item-mini">
      <img src="${src}" alt="Photo of House">
    </div>
  </div>
  `
}
document.querySelector('.phone-btn').addEventListener('click', (e) => {
  const modalForm = document.querySelector('.modal-form')
  modalForm.classList.add('active')
})
document.querySelector('.mobile-menu__btn--call').addEventListener('click', (e) => {
  const modalForm = document.querySelector('.modal-form')
  modalForm.classList.add('active')
})
document.querySelectorAll('.modal').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
    if(e.target == el){
      e.currentTarget.classList.remove('active')
      if(e.currentTarget.querySelector('.modal-window__video')){
        e.currentTarget.querySelector('.modal-window__video').setAttribute('src', '')
      }
      if(e.currentTarget.querySelector('.gallery__window')){
        e.currentTarget.querySelector('.gallery__window').querySelectorAll('.swiper-slide').forEach(slide => slide.remove())
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
    if(e.currentTarget.closest('.modal').querySelector('.modal-window__video')){
      e.currentTarget.closest('.modal').querySelector('.modal-window__video').setAttribute('src', '')
    }
    if(e.currentTarget.closest('.modal').querySelector('.gallery__window')){
      e.currentTarget.closest('.modal').querySelectorAll('.swiper-slide').forEach(slide => slide.remove())
    }
    document.body.classList.remove('dis-scroll')
  })
})
