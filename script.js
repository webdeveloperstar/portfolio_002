var typed = new Typed(".input", {
    strings:["Web Designer.","Web Developer.","Full Stack developer"],
    typeSpeed:130,
    backSpeed:80,
    loop:true 
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};