import gsap from "gsap"

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.imgSrc
      observer.unobserve(entry.target)

      if(entry.target.dataset.imgSrcset){
        entry.target.srcset = entry.target.dataset.imgSrcset
      }
    }
  })
}, { threshold: 0.2, rootMargin: "200px" })
document.querySelectorAll('img[data-img-src]').forEach(img => observer.observe(img))
