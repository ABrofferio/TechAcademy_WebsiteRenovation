$(document).ready(function() {

	$('.clickForContactForm').on('click', function(){
		console.log('click for contact form');
		waitThenDoSomething(0, 'displayPopup');
	});


	$('#about-container').fadeIn(2000);
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (w <657) {
		$('#img_1').insertBefore('#location_1');
	}

	function waitThenDoSomething(waitTimeInMS, myAction) {
		console.log(waitTimeInMS);
		setTimeout(function () {
			if (myAction == "displayPopup") {
				$('#myModalPopUpContact').modal('show');
			}
		}, waitTimeInMS); //time in ms to wait before modal dialog box shows up.
	}

	if (document.referrer == "https://learncodinganywhere.com/index.html" || document.referrer == "https://learncodinganywhere.com/") {
		waitThenDoSomething(0, "displayPopup");
	}

	$(window).ready(function () { $(window).scroll() });

	$(window).scroll(function () {
		$(".slideanim").each(function () {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + $(window).height()) {
				$(this).addClass("slide");
			}
		});
	});



});
