const infoOpen = document.querySelector(".info-button .info")
const infoClose = document.querySelector(".info-button .close")
const navMenu = document.querySelector(".menu")

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


infoOpen.addEventListener('click', function() {
    navMenu.classList.add("open")
    infoClose.classList.remove("hidden")
    infoOpen.classList.add("hidden")
});

infoClose.addEventListener('click', function () {
    navMenu.classList.remove("open")
    infoOpen.classList.remove("hidden")
    infoClose.classList.add("hidden")

})

