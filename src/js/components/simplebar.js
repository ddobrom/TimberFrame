import SimpleBar from "simplebar";
const wrapper = document.querySelector(".favorites-menu__wrapper");
const favtitle = document.querySelector(".favorites-menu__favtitle");
new SimpleBar(document.getElementById("fav-scroll"));

window.matchMedia("(min-width: 769px)").matches
  ? (wrapper.style.maxHeight = `${
      document.documentElement.clientHeight - wrapper.offsetTop
    }px`)
  : (wrapper.style.maxHeight = `${
      document.documentElement.clientHeight - favtitle.scrollHeight
    }px`);

window.addEventListener("resize", () => {
  wrapper.style.maxHeight = `${
    document.documentElement.clientHeight - wrapper.offsetTop
  }px`;
});
