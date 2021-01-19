// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 300,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron_left.png"></button>',
//         nextArrow:'<button type="button" class="slick-next"><img src="icon/chevron_right.png"></button>',
//         responsive: [{
//               breakpoint: 992,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//       }]
//     });
//   });

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
	576: {
	  nav: true,

	},
	768: {
	  nav: false,
	},
	992: {
	  
	}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});


(function($) {
  	$(function() {
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
    });

    function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		
			});
		}); 
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

})(jQuery);