/*	
	Name: EasyPopup 
	GitHub: https://github.com/Dzvonkevich/Easy-Popup
	Autor: Dzvonkevich Saveliy
*/

!(function() {

	$(function() {

		var easypopup, easypopupIn, easypopupOut, easypopupOther, easypopupOtherOut;

		$('[id^="popup-"]').addClass('easypopup-block easypopup');
		$('a[href^="#popup-"], [data-easypopup-href^="popup-"]').on('click', easypopupCall); // Catch the click on button and working with easypopup

	}); 

	function easypopupCall(e) {

		var click = $(this);

		switch(true) {
			case ( click.is( 'a' ) ):
		        e.preventDefault();
				easypopup = $(this).attr('href');
				break;
			default:
				easypopup = '#' + $(this).data('easypopupHref');
				break;
		}

		easypopupIn = $(easypopup).data('easypopupIn');
		easypopupOut = $(easypopup).data('easypopupOut');

		if ( $('.easypopup').hasClass('easypopup-active') ) {
			
			easypopupOther = $('.easypopup-active');
			easypopupOtherOut = $(easypopupOther).data('easypopupOut');

			hidePopup(easypopupOther, easypopupOtherOut);

			setTimeout(function(){
				showPopup(easypopup, easypopupIn, easypopupOut); // Show popup
			}, 1000);

		} else {
			showPopup(easypopup, easypopupIn, easypopupOut); // Show popup
		}

	}

	// Start in effects

	function showPopup(easypopup, easypopupIn, easypopupOut) {

		$(easypopup).wrap('<div class="easypopup-container"></div>');
		$(easypopup).addClass('easypopup-active');
		$('.easypopup-container').before('<a href="javascript:" class="easypopup-black"></a>');
		$('.easypopup-black').fadeIn(100);
        $(easypopup).append('<a href="javascript:" class="easypopup-close"></a>');

		switch(easypopupIn) {
			case "slideleft":
				slideInLeft(easypopup);
				break;
			case "slideright":
				slideInRight(easypopup);
				break;
			case "slidetop":
				slideInTop(easypopup);
				break;
			case "slidein":
				slideIn(easypopup);
				break;
			case "slidebottom":
				slideInBottom(easypopup);
				break;
			default:
				slideIn(easypopup);
				break;
		}

		$(document).keydown(function(e) {
		    if( e.keyCode === 27 ) {
		        hidePopup(easypopup, easypopupOut);
		    }
		});

		$('.easypopup-close, .easypopup-black, .easypopup-hide').on('click', function() {
			hidePopup(easypopup, easypopupOut);
		}); // Catch the click on close button.

	} // Show popup

	function slideIn(easypopup) {
		$(easypopup).fadeIn(200).animate({
			opacity: "1"
		}, 500);
	} // slideIn

	function slideInLeft(easypopup) {

		$(easypopup).css({
			left: "30%",
		});

		$(easypopup).fadeIn(200).animate({
			left: "50%",
			opacity: "1"
		}, 500);

	} // slideInLeft

	function slideInRight(easypopup) {

		$(easypopup).css({
			left: "70%",
		});

		$(easypopup).fadeIn(200).animate({
			left: "50%",
			opacity: "1"
		}, 500);

	} // slideInRight

	function slideInTop(easypopup) {

		$(easypopup).css({
			top: "5%",
		});

		$(easypopup).fadeIn(200).animate({
			top: "10vh",
			opacity: "1"
		}, 500);

	} // slideInTop

	function slideInBottom(easypopup) {

		$(easypopup).css({
			top: "15%",
		});

		$(easypopup).fadeIn(200).animate({
			top: "10%",
			opacity: "1"
		}, 500);

	} // slideInBottom

	// Start out effects

	function hidePopup(easypopup, easypopupOut, easypopupOther, easypopupOtherOut) {

		switch(easypopupOut) {
			case "slideleft":
				slideOutLeft(easypopup);
				break;
			case "slideright":
				slideOutRight(easypopup);
				break;
			case "slidetop":
				slideOutTop(easypopup);
				break;
			case "slidebottom":
				slideOutBottom(easypopup);
				break;
			default:
				slideOut(easypopup);
				break;
		}

		$('.easypopup-black').fadeOut();

		setTimeout(function(){
			cancelPopup(easypopup);
		}, 1000);

	} // Hide popup

	function cancelPopup() {

		$('.easypopup').css({
			left:"50%", 
			top:"10vh", 
			display: "none"
		});

		$('.easypopup-active').unwrap();
		$('.easypopup-active').removeClass('easypopup-active');
		$('a').remove('.easypopup-close, .easypopup-black');
	} // cancel

	function slideOutLeft(easypopup) {
		$(easypopup).animate({
			left:"30%", 
			opacity: "0"
		}, 500, function(){
			$('.easypopup-active').fadeOut(500);
		});
	} // slideOutLeft 

	function slideOutRight(easypopup) {
		$(easypopup).animate({
			left:"70%", 
			opacity: "0"
		}, 500, function(){
			$('.easypopup-active').fadeOut(500);
		});
	} // slideOutRight 

	function slideOutTop(easypopup) {
		$(easypopup).animate({
			top:"5%", 
			opacity: "0"
		}, 500, function(){
			$('.easypopup-active').fadeOut(500);
		});
	} // slideOutTop 

	function slideOutBottom(easypopup) {
		$(easypopup).animate({
			top:"15%", 
			opacity: "0"
		}, 500, function(){
			$('.easypopup-active').fadeOut(500);
		});
	} // slideOutBottom 

	function slideOut(easypopup) {
		$(easypopup).animate({
			opacity: "0"
		}, 500, function(){
			$('.easypopup-active').fadeOut(500);
		});
	} // sli, fundeOut 

})();


	