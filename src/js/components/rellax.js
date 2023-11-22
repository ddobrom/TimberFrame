import Rellax from "rellax";

try {

  var rellax = new Rellax('.rellax', {
    round: true,
    breakpoints: [768, , 1201],
  });

} catch(e){
  console.log(e);
}

