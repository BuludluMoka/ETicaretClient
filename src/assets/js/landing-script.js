/*=====================
 Parallax effect Js
 ==========================*/


"use strict";

$(document).ready(function() {

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // Scrollspy initiation
    $('body').scrollspy({
        target: '#scroll-spy',
        offset: 70
    });

    // On render, adjust body padding to ensure last Scroll target can reach top of screen
    var height = $('#howto').innerHeight();
    var windowHeight = $(window).height();
    var navHeight = $('nav.navbar').innerHeight();
    var siblingHeight = $('#howto').nextAll().innerHeight();


    if(height < windowHeight){
        $('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
    }

    // On window resize, adjust body padding to ensure last Scroll target can reach top of screen
    $(window).resize(function(event){
        var height = $('#howto').innerHeight();
        var windowHeight = $(window).height();
        var navHeight = $('nav.navbar').innerHeight();
        var siblingHeight = $('#howto').nextAll().innerHeight();


        if(height < windowHeight){
            $('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
        }
    });

    $('nav.navbar a, .scrollTop').click(function(event){
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash (#)
            var hash = this.hash;

            // Ensure no section has relevant class
            $('section').removeClass("focus");

            // Add class to target
            $(hash).addClass("focus");

            // Remove thy class after timeout
            setTimeout(function(){
                $(hash).removeClass("focus");
            }, 2000);

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 69
            }, 600, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

            // Collapse Navbar for mobile view
            $(".navbar-collapse").collapse('hide');
        }

    });
    $(window).scroll(function(){
        var scrollPos = $('body').scrollTop();
        if(scrollPos > 0){
            $('.navbar').addClass('show-color');
            $('.scrollTop').addClass('show-button');
        } else{
            $('.navbar').removeClass('show-color');
            $('.scrollTop').removeClass('show-button');
        }

    });
    
    
});

$('.slide-center').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    dots: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        }
    ]
});

$('.slide-center-3').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    dots: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                centerPadding: '150px'
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 1
            }
        }
    ]
});