let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let social = document.querySelector('.social_link');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    social.classList.toggle('open');
}
