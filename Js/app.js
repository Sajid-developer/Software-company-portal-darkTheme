// console.log("I am working...")

const menu=document.querySelector(".navBar .nav-links");
const menuIcon=document.querySelector("#menu-icon");
const hamburger=document.querySelector(".navBar .hamburger-icon");
const navBar=document.querySelector("header .navBar");

    hamburger.addEventListener("click", ()=>{
        menu.classList.toggle("showHide");
        menuIcon.classList.toggle("bx-x");
    });

    window.addEventListener("scroll", ()=>{
        navBar.classList.toggle("sticky", window.scrollY > 30);
        menu.classList.remove("showHide", window.scrollY > 0);
        menuIcon.classList.remove("bx-x");
    });

    console.warn("Its working fine...");

let swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });