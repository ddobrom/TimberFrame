let menuItem = document.querySelectorAll(".tech__text");
let menuImage = document.querySelectorAll(".tech__img");

const points = []

for(let i = 0; i <= 1.0; i+= 0.005){
  points.push(i)
}
const textObserver = new IntersectionObserver(callbackObs, {
  threshold: points,
  // rootMargin: '100px 0px 100px 0px'
})
textObserver.observe(document.querySelector('.tech'))
textObserver.observe(menuItem[0])
textObserver.observe(menuItem[1])
function callbackObs(entries, observer){
  const percent = window.scrollY / document.querySelector('.tech').scrollHeight * 10
  menuItem[0].querySelector('.tech__paragraph').style.transform = `translateX(-${percent / 3}%)`
  menuItem[1].querySelector('.tech__paragraph').style.transform = `translateX(${percent / 3}%)`
}


document.querySelector('.tech').addEventListener('wheel', () => {
  callbackObs()
})






for(let i = 0; i < menuItem.length; i++){
  const moveCursor = (e) => {
    let left = e.pageX + 20 + 'px';
    let top = e.pageY  + 'px';
    menuImage[i].style.left = left
    menuImage[i].style.top = top
  }

  const setStyles = (e) => {
    menuImage[i].style.opacity = '1'
    menuImage[i].style.transform = 'scale(1)'
  }
  const rmStyles = (e) => {
    menuImage[i].style.opacity = null
    menuImage[i].style.transform = null
  }
  menuItem[i].addEventListener("mousemove", moveCursor);
  menuItem[i].addEventListener("mouseenter", setStyles);
  menuItem[i].addEventListener("mouseleave", rmStyles);


}

// function moveText(e) {
//   gsap.to([...menuImage], {
//     css: {
//       left: e.pageX + 50,
//       top: e.pageY,
//     },
//     duration: 0.3,
//   });
// }

// menuItem.forEach((el) => {
//   el.addEventListener("mousemove", moveText);
//   el.addEventListener("mouseleave", null);
// });
