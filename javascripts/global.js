
jQuery(document).ready(function(){
	
	$('#clientSlide').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:5
			},
			1000:{
				items:6
			}
		}
	})
	
});