var elModalOpenButton = document.querySelector(".site-header__button");
var elModalOpenlink = document.querySelector(".site-header__nav");

elModalOpenButton.addEventListener("click", function () {
    elModalOpenlink.classList.toggle("nav--active");
})