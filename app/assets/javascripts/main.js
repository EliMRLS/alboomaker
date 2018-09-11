// iPad and iPod detection
function isiPad() {
  console.log('ipad working');
  return (navigator.platform.indexOf("iPad") != -1);
};

function homeAnimate() {
  console.log('home animate working');
	if ( $('#fh5co-home').length > 0 ) {

		$('#fh5co-home').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {


				setTimeout(function() {
					$('#fh5co-home .to-animate').each(function( k ) {
						var el = $(this);

						setTimeout ( function () {
							el.addClass('fadeInUp animated');
						},  k * 200, 'easeInOutExpo' );

					});
				}, 200);


				$(this.element).addClass('animated');

			}
		} , { offset: '80%' } );

	}
};


function testimonialCarousel() {
  console.log('carousel working');
  $('.owl-carousel-fullwidth').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		responsiveClass: true,
		nav: false,
		dots: true,
		smartSpeed: 800,
		autoHeight: true,
		animateIn: 'fadeIn',
      animateOut: 'fadeOut'
	});
};

$(document).on('turbolinks:load', isiPad);
$(document).on('turbolinks:load', testimonialCarousel);
$(document).on('turbolinks:load', homeAnimate);