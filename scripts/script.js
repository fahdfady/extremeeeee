

const nav = document.querySelector("nav");
const header = document.querySelector("header");

const navLink = document.querySelectorAll("nav ul li a");
const navLinkDropdown = document.querySelectorAll("nav ul li a+*");



for (let i = 0; i < navLink.length; i++) {
    navLink[i].onmouseover = () => {
        // navLinkDropdown.forEach((item) => {
        //     item.classList.remove('is-open');
        // })
        // navLinkDropdown[i].classList.add('is-open');.


        navLinkDropdown.forEach((item) => {
            item.classList.remove('active');
            item.style.bottom = 999999999999999999999;
        });

        setTimeout(() => {
            navLinkDropdown[i].classList.add('active');
            navLinkDropdown[i].style.bottom = -navLinkDropdown[i].offsetHeight;
        }, 1);




        nav.onmouseover = () => {
            nav.classList.add("active");
        }

        nav.onmouseleave = () => {
            nav.classList.remove('active')

            navLinkDropdown.forEach((item) => {
                item.classList.remove('active');
                item.style.bottom = 999999999999999999999;
            });
        }
    };

};

let addlogoFile = document.querySelector('.text input[type="file"]');
let addlogo = document.querySelector(".text label img");

addlogoFile.onchange = event => {
    const [file] = addlogoFile.files
    if(file){
        addlogo.src = URL.createObjectURL(file)
    }
}