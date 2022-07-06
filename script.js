
// Transparent On Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.opacity = 0.9;
  } else {
   
    document.getElementById("navbar").style.opacity = 1;
  }
}


let hamburger = document.querySelector(".hamburger");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

let asideMobile = document.querySelector(".aside-mobilenav");

hamburger.addEventListener("click", function() {
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
  asideMobile.classList.toggle("displayToggle"); 
});




