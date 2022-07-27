$('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:false,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive:{
        1000:{
            items:3,
            nav:false,
        },
        600:{
            items:2,
            nav:false,
        },
        0:{
            items:1,
            nav:false,
        }
    }
})

const menuOpen = document.querySelector('.hamburger')
const menuClose = document.querySelector('.xclose')
const menu = document.querySelector('.navlinks')

menuOpen.addEventListener('click', function(){
    menu.style.top = "7%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

menuClose.addEventListener('click', function(){
    menu.style.top = "-7%"
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
})