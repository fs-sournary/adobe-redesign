const menuLinks = document.querySelectorAll(".menu-link");
const mainHeaderLinks = document.querySelectorAll(".main-header-link");
const dropdowns = document.querySelectorAll(".dropdown");
const header = document.querySelector(".header");
const input = document.querySelector(".search-bar input");
const contentWrapper = document.querySelector(".content-wrapper");
const popUp = document.querySelector(".pop-up");
const notOpenStatusButtons = document.querySelectorAll(".status-button:not(.open)");
const closePopupButtons = document.querySelectorAll(".pop-up .close");
const toggleButton = document.querySelector('.dark-light');
const overlayApp = document.querySelector(".overlay-app");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(e => e.classList.remove("is-active"));
        link.classList.add("is-active");
    });
});

mainHeaderLinks.forEach(link => {
    link.addEventListener("click", () => {
        mainHeaderLinks.forEach(e => e.classList.remove("is-active"));
        link.classList.add("is-active");
    });
});

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});


input.addEventListener("focus", () => {
    header.classList.add("wide");
});

input.addEventListener("blur", () => {
    header.classList.remove("wide");
});

notOpenStatusButtons.forEach(button => {
    button.addEventListener("click", () => {
        popUp.classList.add("visible");
        overlayApp.classList.add("is-active");
    });
});

closePopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Close up button clicked");
        popUp.classList.remove("visible");
        overlayApp.classList.remove("is-active");
    });
});

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});