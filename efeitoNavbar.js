function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("collapsed");
    var toggleButton = document.querySelector('.toggleButton');
    if (navbar.classList.contains("collapsed")) {
        navbar.style.animation = "collapseAnimation 0.3s forwards";
        toggleButton.style.top = "70%";
        toggleButton.innerHTML = '&darr;';

    } else {
        navbar.style.animation = "expandAnimation 0.3s forwards";
        navbar.style.visibility = "visible";
        toggleButton.innerHTML = '&uarr;';
        toggleButton.style.top = "calc(175% - 5px)";
    }
}
