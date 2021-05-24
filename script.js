let toggleBttn = false;

let button = document.querySelector(".btn-toggle-nav");





button.addEventListener("click", function () {

    toggleNav();

})




function toggleNav() {

    let sidebar = document.querySelector(".nav-sidebar");
    let sidebarUl = document.querySelector(".nav-sidebar ul");
    let sidebarSpan = document.querySelector(".nav-sidebar ul li span");
    let sidebarLinks = document.querySelectorAll(".nav-sidebar ul li a");



    if (toggleBttn == false) {

        sidebar.style.width = "250px";
        sidebarUl.style.visibility = "visible";
        sidebarSpan.style.opacity = "0.5";

        for (let i = 0; i < sidebarLinks.length; i++) {
            sidebarLinks[i].style.opacity = "1";

        }

        toggleBttn = true;

    }

    else if (toggleBttn == true) {

        sidebar.style.width = "50px";

        sidebarSpan.style.opacity = "0";

        for (let i = 0; i < sidebarLinks.length; i++) {
            sidebarLinks[i].style.opacity = "0";

        }

        sidebarUl.style.visibility = "hidden";
        toggleBttn = false;


    }



}