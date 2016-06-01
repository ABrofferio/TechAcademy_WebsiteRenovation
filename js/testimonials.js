$(document).ready(function() {
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w <657) {
				$('#img_1').insertBefore('#location_1');
				$('#img_2').insertBefore('#location_2');
				$('#img_3').insertBefore('#location_3');
				$('#img_4').insertBefore('#location_4');
				$('#img_5').insertBefore('#location_5');
				$('#img_6').insertBefore('#location_6');
				$('#img_7').insertBefore('#location_7');
			}
			
			function waitThenDoSomething(waitTimeInMS, myAction) {
			    setTimeout(function () {
			        if (myAction == "displayPopup") {
			            $('#myModalPopUp').modal('show');
			        }
			    }, waitTimeInMS); //time in ms to wait before modal dialog box shows up.
			}
			if (document.referrer == "https://learncodinganywhere.com/index.html" || document.referrer == "https://learncodinganywhere.com/") {
			    waitThenDoSomething(0, "displayPopup"); //this function waits 0 milliseconds before displaying a popup.
			    //I left the wait function here so that if you change your mind and decide you want to wait before showing 
			    //the modal dialog box, it's as easy as changing the 0 above to a different number, rather than recoding 
			    //all of it again.
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