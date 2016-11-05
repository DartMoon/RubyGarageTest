/**
 * Created by Kirill on 02.11.2016.
 */

$(document).ready(function(){

	//Pushy Btn
	$('.menu-btn').on("click", function(){
		$(this).css({'display':'none'});
	});
	$('.close-pushy').on("click", function(){
		$('.menu-btn').css({'display':'block'});
	});
	//Scroll Init
	$(".msg").scrollbar({});
	$(".side-bar-outer").scrollbar({});

	//Slider Init
	$('.date-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.date-content-slider',
		infinite: false
	});
	$('.date-content-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.date-slider',
		dots: false,
		fade:true,
		infinite: false,
		arrows: false
	});

	init_map();
	openSeconBar();

	// Open second bar
	function openSeconBar() {

		var myBlock = $(".side-bar");
		var myWidth = $(window).width();

		$('.open-side-bar').on("click", function() {
			if ( myWidth > 767 ) {
				if ( $(myBlock).css('left') == '-557px' ) {

					$(myBlock).animate({'left': '0'}, function () {});
					$('.open-side-bar i').css({'transform': 'rotate(180deg)'});
					$(myBlock).css({'border': '0'});

				} else {

					$(myBlock).animate({'left': '-557px'}, function () {});
					$('.open-side-bar i').css({'transform': 'rotate(0)'});
					$(myBlock).css({'border-right': '3px solid #fede06'});

				}
			}else{
				if ( $(myBlock).css('left') === '0px' ) {

					$(myBlock).animate({'left': '-100%'}, function () {});
					$(this).css(
						{
							'right': '-35px',
							'border-top-right-radius':'5px',
							'border-top-right-radius':'5px',
							'border-top-right-radius':'5px',
							'border-bottom-right-radius':'5px',
							'border-bottom-right-radius':'5px',
							'border-bottom-right-radius':'5px',
							'border-top-left-radius':'0',
							'border-top-left-radius':'0',
							'border-top-left-radius':'0',
							'border-bottom-left-radius':'0',
							'border-bottom-left-radius':'0',
							'border-bottom-left-radius':'0'
						}
					);
					$('.open-side-bar i').css({'transform': 'rotate(0)'});
					$(myBlock).css({'border-right': '3px solid #fede06'});

				} else {
					$(myBlock).animate({'left': '0px'}, function () {});
					$(this).css(
						{
							'right': '0px',
							'border-top-right-radius':'0',
							'border-top-right-radius':'0',
							'border-top-right-radius':'0',
							'border-bottom-right-radius':'0',
							'border-bottom-right-radius':'0',
							'border-bottom-right-radius':'0',
							'border-top-left-radius':'5px',
							'border-top-left-radius':'5px',
							'border-top-left-radius':'5px',
							'border-bottom-left-radius':'5px',
							'border-bottom-left-radius':'5px',
							'border-bottom-left-radius':'5px'
						}
					);
					$('.open-side-bar i').css({'transform': 'rotate(180deg)'});
					$(myBlock).css({'border': '0'})
				}
			}
		});
	};

	// MAP
	function init_map(){
		var myOptions = {
			zoom:16,
			center:new google.maps.LatLng(45.447733558406796,10.95876594257505),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var image = 'img/marker-map.png';

		map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
		marker = new google.maps.Marker(
			{
				map: map,
				position: new google.maps.LatLng(45.447733558406796,10.95876594257505),
				icon: image
			}
		);
		infowindow = new google.maps.InfoWindow(
			{
				content:
					'<ul class="map-info">' +
						'<li class="map-info__item map-info__name"><img src="img/info-map-dog.png" alt="">Trattoria Da Ropeton</li>' +
						'<li class="map-info__item map-info__location">Via Fontana del Ferro, 1, Verona, Italy</li>' +
						'<li class="map-info__item map-info__number"><i class="fa fa-phone"></i>+390458030040</li>' +
						'<li class="map-info__item map-info__site"><i class="fa fa-link"></i>trattoriadaropeton.it‎</li>' +
					'</ul>'
			}
		);
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map,marker);
		});
		infowindow.open(map,marker);
	}
	// MAP
});



