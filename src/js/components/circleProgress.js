const circles = document.querySelectorAll('.progress')
if(circles){
  const setCirclesProgress = () => {

    circles.forEach(el => {
      let percentageProgress = parseInt(el.dataset.percents)
      let radius = parseInt(window.getComputedStyle(el.closest('.circle-img')).width) / 2
      let circleLength = 2 * Math.PI * radius + 5;
      el.setAttribute('stroke-dasharray', circleLength)
      el.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)
    })
  }
  window.addEventListener("resize", () => {
    setCirclesProgress()
  })
  setCirclesProgress()
}
