$(document).ready(function () {
        
            /* TODO: makalii(6/7/16) each testimonial text needs, in turn, slide in from the right, and slight to the left Currently the testimonial text just fades in and out */
            // Testimonials Tile
            $(function () {
                var intervalsInSeconds = 6;
                var numberOfTestimonials = 6;
                var divs = $('#testimonials-text-1, #testimonials-text-2, #testimonials-text-3, #testimonials-text-4, #testimonials-text-5, #testimonials-text-6');
        
                $(".testimonials-slider").css("height: 600px;");
                var left = divs.offset().left;
        
                divs.hide();
        
                setInterval(function () {
                    showDiv();
                }, intervalsInSeconds * 1000);
        
                var currentDiv = 0;
                function showDiv () {
                    divs.hide().animate({
                        opacity: 0,
                        // paddingLeft: '-=80'
                    });
                    divs.filter(function (index) { return index == currentDiv % numberOfTestimonials; }) // filter selects the next dive
                        .show().animate({
                        opacity: 1.0,
                        // paddingLeft: '+=80'
                    });
                    currentDiv++;
                };
        
            })
    
            function waitThenDoSomething(waitTimeInMS, myAction) {
                setTimeout(function () {
                    if (myAction == "displayPopup") {
                        $('#myModalPopUp').modal('show');
                    }
                }, waitTimeInMS); //time in ms to wait before modal dialog box shows up.
            }
            function showContactForm(myAction) {
                $('#myModalPopUpContact').modal('show');
                $('#myModalPopUp').modal('hide');
            }
            waitThenDoSomething(60000, "displayPopup"); //this function waits 60000milliseconds before displaying a popup.
            $("a").click(function () { window.onbeforeunload = dontGiveMePopup; }); //don't make popup appear just because user clicked our site's hyperlink.
            document.getElementById("yes-modal-btn").onclick = function () { showContactForm(0,"displayPopup") };//this shows the contact form when yes is clicked on first popUp
            $("header").hide();
            $(".text-center").scrollTop(0);
            $(".container").hide();
            $("#coverPic").fadeOut(2000);
            $(".container").delay(2000);
            $("header").delay(2000);
            $(".container").fadeIn(200);
            $("header").fadeIn(200);
            $(".text-center").scrollTop(0);
            $("navText").click(function () { $(this).removeClass("navText")})
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


            $('.slideanim').hover(
                function () { $(this).addClass('fadeIn') },
                function () { $(this).removeClass('fadeIn') });

        });
            