$(document).ready(function() {
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w <657) {
				$(".form-control").removeAttr("placeholder");
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
		