const text = document.querySelectorAll(".built-houses__text");
if (text.length > 0){
  const points = [];

  for (let i = 0; i <= 1.0; i += 0.005) {
    points.push(i);
  }
  const textObserver = new IntersectionObserver(callbackObs, {
    threshold: points,
  });

  function callbackObs(entries, observer) {
    let percent = 1;

    percent =
      (window.scrollY / document.querySelector(".built-houses").scrollHeight) *
      10;
    if (window.matchMedia("(min-width: 769px)")) {
      text[0].querySelector(".built-houses__paragraph").style.transform = `translateX(-${
        percent / 3
      }%)`;
      text[1].querySelector(".built-houses__paragraph").style.transform = `translateX(${
        percent / 3
      }%)`;
    } else {
      text[0].querySelector(".built-houses__paragraph").style.transform = `translateX(-${
        percent / 2
      }%)`;
      text[1].querySelector(".built-houses__paragraph").style.transform = `translateX(${
        percent / 2
      }%)`;
    }
  }

  textObserver.observe(text[0]);
  textObserver.observe(text[1]);

  document.querySelector(".built-houses").addEventListener("wheel", () => {
    callbackObs();
  });

  document.querySelector(".built-houses").addEventListener("touchmove", () => {
    callbackObs();
  });
}
