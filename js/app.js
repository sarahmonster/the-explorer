$(function() {
	$(document).foundation();

	var didFadeIn = localStorage ? localStorage['loaded'] : false;

	$('.magellan-container').css({
		position: 'fixed',
		top: 0
	});

	if (didFadeIn) {
		$('body').addClass('js loaded');
	} else {
		$('body').addClass('js');
		
		$(window).on('load', function() {
	   		$('body').addClass('loaded');
	   		localStorage['loaded'] = '1';
	    });
	}
});
