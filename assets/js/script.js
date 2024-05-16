// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("site-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Get the height of the navbar
var navbarHeight = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    // Add padding to the top of the page content equal to the height of the navbar
    document.body.style.paddingTop = navbarHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    // Reset padding when the navbar is not sticky
    document.body.style.paddingTop = 0;
  }
}
