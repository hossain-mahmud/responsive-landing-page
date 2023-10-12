// -------- nav bar start ---------
let nav = document.querySelector('nav');
let bar_icon = document.querySelector('.bar_icon');
let menu_items = document.querySelector('.menu_items');
bar_icon.addEventListener('click', function () {
    menu_items.classList.toggle("active");
})
let changIcon = function (icon) {
    icon.classList.toggle('fa-times')
}
// nav sticky start
window.addEventListener('scroll', () => {
    let scrolling = this.scrollY;
    console.log(scrolling)

    if (scrolling > 200) {
        nav.classList.add('nav_sticky')
    } else {
        nav.classList.remove('nav_sticky')
    }
})
// slider part start 
$('.features_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
            }
        }
    ]
});