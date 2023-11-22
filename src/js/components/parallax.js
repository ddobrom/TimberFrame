const imgsBig = document.querySelector('[data-parallax="big-img"]');
const imgsSmall = document.querySelectorAll('[data-parallax="small-img"]');

const clouds = document.querySelector(".parallax__clouds");
const ecoHouse = document.querySelector(".eco-house")
if(ecoHouse){
  const thresholdsArr = [];
  for (let i = 0; i <= 1.0; i += 0.005) {
    thresholdsArr.push(i);
  }

  function callback(entries, observer) {
    let movingPercent =
      (window.scrollY / ecoHouse.scrollHeight) * 100;
    requestAnimationFrame(moveClouds(movingPercent));
  }

  const observer = new IntersectionObserver(callback, {
    threshold: thresholdsArr,
  });

  observer.observe(ecoHouse);
  observer.observe(document.querySelector(".eco-house__title"));

  document.querySelectorAll(".eco-house .house-content__image").forEach((el) => {
    observer.observe(el);
  });
  function moveClouds(percent) {
    clouds.style.transform = `translateX(${percent / 6}%)`;
  }
}
