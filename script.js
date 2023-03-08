window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');   
});

// dropdown nav
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdown = document.querySelector("#dropdown-menu");

dropdownBtn.addEventListener('click', function () {
    if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
        dropdown.style.display = "block"
        }
})
