// hero-section //

$(".slider-1").owlCarousel({
    slideBy: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    nav: true,
    dot: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        },
        991: {
            items: 1,
        },
    },
});


// team-section //

$(".slider-2").owlCarousel({
    slideBy: 1,
    autoplay: false,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    nav: false,
    fade: true,
    dot: false,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        991: {
            items: 4,
        },
    },
});

// owl carousel //


// // bottom to top button

// let mybutton = document.getElementById("top");

// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }



$(".dropdown-toggle").on("click", function (e) {
    // Check if the screen width is less than or equal to 991px
    if (window.innerWidth <= 991) {
        e.preventDefault();
        $(this).parent().toggleClass("current");
        $(this).next().slideToggle();
    }
});


function menuSticky() {
    if ($(".is-sticky-on").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('.is-sticky-on').addClass('is-sticky-menu');
            }
            else {
                $('.is-sticky-on').removeClass('is-sticky-menu');
            }
        });
    }
}
menuSticky()
