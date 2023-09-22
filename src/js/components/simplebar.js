
import SimpleBar from 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

new SimpleBar(document.getElementById('fav-scroll'));


document.querySelector('.favorites-menu__wrapper').style.maxHeight = `${document.documentElement.clientHeight - document.querySelector('.favorites-menu__wrapper').offsetTop}px`

window.addEventListener('resize', () => {
  document.querySelector('.favorites-menu__wrapper').style.maxHeight = `${document.documentElement.clientHeight - document.querySelector('.favorites-menu__wrapper').offsetTop}px`
})
