let hamburger = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
    let navList = document.getElementById("dropdown-menu");
    navList.classList.toggle("visible");
}