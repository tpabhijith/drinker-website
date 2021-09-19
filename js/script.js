$(window).ready(function(){
    $('#testimonial div.bottom').slick({
        autoplay: true,
    });
    let hamburger = document.querySelector("#home header div.right div.menu-icon");
    hamburger.addEventListener("click", function(){
        let red = document.querySelector("#home header div.right div.image-container");
        let home = document.querySelector("#home");

        let menu = document.querySelector("body div.menu");
        hamburger.classList.toggle("active");
        home.classList.toggle("active");
        red.classList.toggle("active");
        close.classList.toggle("active");
        hamburger.classList.remove("revers");
        home.classList.remove("revers");
        red.classList.remove("revers");
        close.classList.remove("revers");
        menu.classList.toggle("active");
    })
    let close = document.querySelector("header div.right span.close");
    close.addEventListener("click", ()=>{
        let red = document.querySelector("#home header div.right div.image-container");
        let home = document.querySelector("#home");
        let menu = document.querySelector("body div.menu");
        close.classList.remove("active");
        hamburger.classList.toggle("revers");
        home.classList.toggle("revers");
        red.classList.toggle("revers");
        hamburger.classList.toggle("active");
        home.classList.toggle("active");
        red.classList.toggle("active");
        close.classList.add("revers");
        menu.classList.toggle("active");
    })
});
