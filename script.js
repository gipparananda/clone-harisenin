 // hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    navMenu.addEventListener('click', function () {
        hamburger.classList.remove('hamburger-active');
    });
});

// dropdown nav
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdown = document.getElementById("dropdown-menu");

dropdownBtn.addEventListener('click', function(){
    dropdownBtn.classList.toggle('dropdown-menu')
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block"
    }
})
