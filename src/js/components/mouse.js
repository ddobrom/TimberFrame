const panoramaSection = document.querySelector(".tour");

if (panoramaSection) {
  const cursor = panoramaSection.querySelector(".mouse-rotate")


  if(window.matchMedia("(max-width: 768px)").matches){
    panoramaSection.addEventListener("touchstart", () => {
      cursor.style.opacity = '0'
    });
    panoramaSection.addEventListener("touchend", () => {
      cursor.style.opacity = '1'
    });
  } else {
    panoramaSection.addEventListener("mouseenter", () => {
      cursor.style.opacity = '0'
    });
    panoramaSection.addEventListener("mouseleave", () => {
      cursor.style.opacity = '1'
    });
  }
}
