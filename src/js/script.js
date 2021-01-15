$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/chevron_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icon/chevron_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
            // {
            //     breakpoint: 768,
            //     settings: {

            //       arrow: false
            //     }
            // }, 
        ]
    });
  });