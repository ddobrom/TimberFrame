const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if(entry.target.src){
        entry.target.src = entry.target.dataset.imgSrc
      }


      if(entry.target.dataset.imgSrcset){
        entry.target.srcset = entry.target.dataset.imgSrcset
      }
      if(entry.target.dataset.videoSrc){
        entry.target.src = entry.target.dataset.videoSrc
      }
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: "900px" })
document.querySelectorAll('img[data-img-src], source[data-img-srcset], video[data-video-src]').forEach(img => observer.observe(img))
