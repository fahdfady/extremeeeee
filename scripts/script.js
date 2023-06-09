const nav = document.querySelector("nav");
const header = document.querySelector("header");


const navLink = document.querySelectorAll("nav ul li a");
const navLinkDropdown = document.querySelectorAll("nav ul li a+*");
const navLinkDropdownHamburger = document.querySelectorAll("nav ul.menu-open li a+*");

const navLinks = document.querySelector("header nav ul");
const hamburgerMenu = document.querySelectorAll("nav .hamburger-button");

for (let i = 0; i < navLink.length; i++) {
    navLink[i].onmouseover = () => {
        // navLinkDropdown.forEach((item) => {
        //     item.classList.remove('is-open');
        // })
        // navLinkDropdown[i].classList.add('is-open');.


        navLinkDropdown.forEach((item) => {
            item.classList.remove('active');
            item.style.bottom = 999999999999999;
        });

        setTimeout(() => {
            navLinkDropdown[i].classList.add('active');
            navLinkDropdown[i].style.bottom = -navLinkDropdown[i].offsetHeight;
            navLinkDropdown[i].classList.add("")
        }, 1);


        nav.onmouseover = () => {
            nav.classList.add("active");
        }

        nav.onmouseleave = () => {
            nav.classList.remove('active')

            navLinkDropdown.forEach((item) => {
                item.classList.remove('active');
                item.style.bottom = 999999999999999;
            });
        }
    };
};

hamburgerMenu[0].onclick = () => {
    navLinks.classList.remove("menu-open")
}
hamburgerMenu[1].onclick = () => {
    navLinks.classList.add("menu-open")
}

let addlogoFile = document.querySelector('.text input[type="file"]');
let addlogo = document.querySelector(".text label img");

addlogoFile.onchange = event => {
    const [file] = addlogoFile.files
    if (file) {
        addlogo.src = URL.createObjectURL(file)
    }
}