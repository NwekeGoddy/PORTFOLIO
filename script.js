
// Transparent On Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.opacity = 0.9;
  } else {
   
    document.getElementById("navbar").style.opacity = 1;
  }
}