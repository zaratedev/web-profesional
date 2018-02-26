function scrollToElement( element ) {
  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop
  })
}
//show menu
document.querySelector(".menu")
  .addEventListener("click", function() {
    document.querySelector(".menu-screen").classList.add("active")
  })

// close menu
document.querySelector(".close")
  .addEventListener("click", function() {
    document.querySelector(".menu-screen").classList.remove("active")
  })

// links

let links = document.querySelectorAll(".menu-screen a");

// Animation Scroll

links.forEach( link => {
  link.addEventListener('click', function (ev) {
    document.querySelector(".menu-screen").classList.remove("active");

    let paths = this.href.split("/");

    const selector = paths[paths.length - 1];

    if ( window.scrollTo ) ev.preventDefault();

    scrollToElement( document.querySelector(selector) );

    return !!window.scrollTo;
  })
});
