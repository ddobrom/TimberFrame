import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
const lenis = new Lenis({
  lerp: 0.07,
  wheelMultiplier: 0.7,
  touchMultiplier: 0.7,
  smooth: true,
  orientation: "vertical",
  gestureOrientation: "vertical",
  normalizeWheel: false,
  infinite: false,
  breakpoints: [0, 768, 1201],
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

export default lenis;
