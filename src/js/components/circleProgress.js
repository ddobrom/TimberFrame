const circles = document.querySelectorAll('.progress')
if(circles){
  circles.forEach(el => {
    let percentageProgress = parseInt(el.dataset.percents)
    let radius = parseInt(window.getComputedStyle(el).r)
    let circleLength = 2 * Math.PI * radius;
    el.setAttribute('stroke-dasharray', circleLength)
    el.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)
  })
}
