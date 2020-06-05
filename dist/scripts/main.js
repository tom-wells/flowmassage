const infoOpen = document.querySelector(".info-button .info")
const infoClose = document.querySelector(".info-button .close")
const navMenu = document.querySelector(".menu")

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

