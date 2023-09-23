import simpleParallax from 'simple-parallax-js';
var eco1 = document.querySelector('#eco1');
var eco2 = document.querySelector('#eco2');
var eco3 = document.querySelector('#eco3');
var eco4 = document.querySelector('#eco4');
var eco5 = document.querySelector('#eco5');
var eco6 = document.querySelector('#eco6');
var shadow = document.querySelector('.shadow__body');

new simpleParallax(eco1, {
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});
new simpleParallax(eco2, {
  scale: 3,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});
new simpleParallax(eco3, {
  scale: 1.6,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});
if(window.matchMedia("(min-width: 769px)").matches){
  new simpleParallax(eco4, {
    scale: 2.3,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
  });
}
if(window.matchMedia("(max-width: 769px)").matches){
  new simpleParallax(eco4, {
    scale: 3,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
  });
}


new simpleParallax(eco5, {
  scale: 1.6,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});
new simpleParallax(eco6, {
  scale: 1.5,
  overflow: true,
  transition: 'cubic-bezier(0,0,0,1)'
});
