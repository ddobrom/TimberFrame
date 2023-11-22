import { responsibilitySlider } from "./sliders";
import lenis from "./smooth-scroll";
import { responsibility } from "./../_vars";
import { throttle } from "../functions/throttle";
window.addEventListener("DOMContentLoaded", () => {
  if (responsibility) {
    const responsItems = document.querySelector(".responsibility__items");
    const resLines = responsibility.querySelectorAll(".responsibility__line");
    const resContainer = document.querySelector(".responsibility__container");
    const setHeightOfWrapper = () => {
      document
        .querySelector(".responsibility__wrapper")
        .style.setProperty(
          "--wrapper-height",
          resContainer.scrollHeight * 4 + "px"
        );
    };
    let offsetLines = [];
    function setOffsetLines() {
      offsetLines = [];
      resLines.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        offsetLines.push(
          elRect.y + (window.pageY || document.documentElement.scrollTop)
        );
      });
    }
    const thresholdsArr = [];
    for (let i = 0; i < 1.0; i += 0.2) {
      thresholdsArr.push(i);
    }
    const observer = new IntersectionObserver(
      (entries, options) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            setOffsetLines();
          }
        });
      },
      {
        threshold: thresholdsArr,
      }
    );

    observer.observe(document.querySelector(".add"));
    observer.observe(responsibility);
    observer.observe(document.querySelector(".office"));

    function getTopOfItems() {
      const rect = responsItems.getBoundingClientRect();
      let offsetItems =
        rect.y + (window.pageY || document.documentElement.scrollTop);
      return offsetItems;
    }

    // responsibilitySlider.slideTo(1);
    let offset = null;

    const checkOffset = () => {
      offset = getTopOfItems();
      offsetLines.forEach((el, index) => {
        if (offset > el) {
          responsibilitySlider.slideTo(index);
        }
      });
    }
    const func = throttle(checkOffset)
    window.addEventListener("scroll", func);
    window.addEventListener("resize", () => {
      setHeightOfWrapper();
    });
    document.querySelectorAll(".res-control-btn").forEach((el) => {
      el.addEventListener("click", () => {
        const nextIndex = responsibilitySlider.activeIndex % 5;
        lenis.scrollTo(`.responsibility__line--${nextIndex + 1}`);
      });
    });

    setHeightOfWrapper();
  }
});
