const textAnimation1 = gsap.timeline();
const textAnimation2 = gsap.timeline();

textAnimation1.to('.tech__paragraph--right', {xPercent: -20})
textAnimation2.to('.tech__paragraph--left', {xPercent: 20})

ScrollTrigger.create({
  animation: textAnimation1,
  trigger: '.tech',
  start: 'top top',
  end: 'bottom',
  scrub: 1,
})
ScrollTrigger.create({
  animation: textAnimation2,
  trigger: '.tech',
  start: 'top top',
  end: 'bottom',
  scrub: 1,
})






let menuItem = document.querySelectorAll(".tech__text");
let menuImage = document.querySelectorAll(".tech__img");

for (let i = 0; i < 2; i++) {
  const animation = gsap.to(menuImage[i], {
    opacity: 1,
    duration: 0.3,
    scale: 1,
    ease: "ease-in-out",
  });

  menuItem[i].addEventListener("mouseenter", () => animation.play());
  menuItem[i].addEventListener("mouseleave", () => animation.reverse());

  animation.reverse();
}

function moveText(e) {
  gsap.to([...menuImage], {
    css: {
      left: e.pageX + 50,
      top: e.pageY,
    },
    duration: 0.3,
  });
}

menuItem.forEach((el) => {
  el.addEventListener("mousemove", moveText);
  el.addEventListener("mouseleave", null);
});
