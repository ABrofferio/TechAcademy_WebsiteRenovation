$(document).ready(function () {
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