const infoOpen = document.querySelector(".info-button .info")
const infoClose = document.querySelector(".info-button .close")
const aboutSection = document.querySelector(".about")

infoOpen.addEventListener('click', function() {
    aboutSection.classList.add("show")
    infoClose.classList.remove("hidden")
    infoOpen.classList.add("hidden")
});

infoClose.addEventListener('click', function () {
    aboutSection.classList.remove("show")
    infoOpen.classList.remove("hidden")
    infoClose.classList.add("hidden")

})

