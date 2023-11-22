import { throttle } from "../functions/throttle";
if (document.querySelector(".services-section")) {
  const textItems = [...document.querySelectorAll(".services-section__item")];
  const imageItems = [
    ...document.querySelectorAll(".services-section__item-image"),
  ];
  if (window.matchMedia("(min-width: 769px)").matches) {
    const throttleChangeSlide = throttle(changeSlide);
    window.addEventListener("scroll", throttleChangeSlide);
    function changeSlide() {
      let current = 0;
      textItems.forEach((el, index) => {
        if (el.classList.contains("active")) {
          current = index;
        }
      });
      imageItems.forEach((el) => el.classList.remove("active"));
      imageItems[current].classList.add("active");
    }
  }
}
