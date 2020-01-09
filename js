// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var pinned_header = document.getElementById("pinned_header");

// Get the offset position of the navbar
var sticky = pinned_header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    pinned_header.classList.add("sticky")
  } else {
  pinned_header.classList.remove("sticky");
  }
}
