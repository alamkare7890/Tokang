var myToggle = document.getElementById('toggleNav');

    toggleNav.onclick = function () {

    toggleNav.classList.toggle('active');
    
}
$(document).ready(function () {

    $('#toggleNav').click(function () {

        $('#navOpen').addClass('slide-nav');
    
    })
    $('#navClose').click(function () {
    
        $('#navOpen').removeClass('slide-nav');
    
    })

    /*======hero-slider========*/
    $('.hero-slide').slick({
        prevArrow:'<button class="slide-left" type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        nextArrow: '<button class="slide-right" type="button" class= "slick-prev" > <i class="fas fa-angle-left"></i></button> ',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    speed: 300,
                    fade: true,
                    cssEase: 'linear',
                    autoPlay: true,
                    autoplaySpeed: 300,
                    dots: true,
                }
            
            
            }
        
        
        ]
    })

    /*=========nav-scrolling============*/

    $(window).bind('scroll', function () {
        $a = 50;
        if ($(window).scrollTop() > $a) {
            $('#navScroll').addClass('nav-scroll');
            $('#brand').addClass('fill');
            $('a').addClass('black');
            $('.ham-menu').addClass('bg-color');
        }
        else {
            $('#navScroll').removeClass('nav-scroll');
            $('#brand').removeClass('fill');
            $('a').removeClass('black');
            $('.ham-menu').removeClass('bg-color');
            
            
        }
        
    
    });
    
    /*===========counter-up=============
    $('.counter').counterUp({
        time: 1000,
        delay: 10,        
    
    })*/
    /*===============person-slide========*/
    $('.testi-slide').slick({
        slidesToShow: 2,   
        slidesToScroll: 2,
        arrows: false,
        autoPlay: true,
        autoplaySpeed: 500,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
        
            
            },
        ]
      

    }) 
    /*===============partner-slide========*/
    $('.partner-slide').slick({
        slidesToScroll: 5,
        slidesToShow: 5,
        arrows:false,
        autoPlay: true,
        autoplaySpeed: 500, 
        infinite: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                }
            
            }
        ]

    })
    
})