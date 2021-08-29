$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            console.log("Class Added");
            $('nav').addClass('stickyAdd');
            $('nav').removeClass('stick');
            $('.hamburger').addClass('whenscrolled');

        }
        else {
            console.log("Class Removed");
            $('nav').removeClass('stickyAdd');
            $('nav').addClass('stick');
            $('.hamburger').removeClass('whenscrolled');
        }
    });

    $('.navbar-nav a[href^="#"').on('click', function (event) {
        event.preventDefault();
        console.log("Clicked")
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });


    particlesJS.load("particles-js", "particlesjs-config.json");

    //animate on scroll
    AOS.init();


});