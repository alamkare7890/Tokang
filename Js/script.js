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
    
    })

    /*=========nav-scrolling============*/

    $(window).bind('scroll', function () {
        $a = 50;
        if ($(window).scrollTop() > $a) {
            $('#navScroll').addClass('nav-scroll');
            $('#brand').addClass('fill');
            $('a').addClass('black');
        }
        else {
            $('#navScroll').removeClass('nav-scroll');
            $('#brand').removeClass('fill');
            $('a').removeClass('black');
            
            
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

    }) 
    /*===============partner-slide========*/
    $('.partner-slide').slick({
        slidesToScroll: 5,
        slidesToShow: 5,
        arrows:false,

    
    })
    
})