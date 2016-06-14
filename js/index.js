$(document).ready(function () {

    // EVENT HANDLERS

    $('.clickForContactForm').on('click', function(){
        console.log('click for contact form');
        waitThenDoSomething(0, 'displayPopup');
    });

    $('.slideanim').hover(
        function () { $(this).addClass('fadeIn') },
        function () { $(this).removeClass('fadeIn') });


    // AUTO FUNCTIONS

    waitThenDoSomething(60000, "displayPopup"); //this function waits 60000milliseconds before displaying a popup.

    $(function () {
        var LoopIntervalsInMilliseconds = 2000;

        var numberOfTestimonials = 6;
        var divs = $('#testimonials-text-1, #testimonials-text-2, #testimonials-text-3, #testimonials-text-4, #testimonials-text-5, #testimonials-text-6');
        divs.hide();

        setTimeout(function () {
            showDiv();
        }, LoopIntervalsInMilliseconds);

        var currentDivIndex = 0;
        
        function showDiv()
        {
            //Reset div container's position
            $('.testimonials-slider').animate({
                left: -1800
            });

            $('.testimonials-slider').animate({
                left: '+=1800'
            });

            divs.hide().animate({
                opacity: 0
            });


            divs.filter(function (index) {
                return index == currentDivIndex % numberOfTestimonials;
            })
                .show().animate({
                opacity: 1.0
            });
            currentDivIndex++;

            $('.testimonials-slider').delay(5000).animate({
                left: '+=1800'
            }, function(){
                setTimeout(showDiv(), 3000)
            });
        }
    });


    function waitThenDoSomething(waitTimeInMS, myAction) {
        setTimeout(function () {
            if (myAction == "displayPopup") {
                $('#myModalPopUpContact').modal('show');
            }
        }, waitTimeInMS); //time in ms to wait before modal dialog box shows up.
    }

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
    $("navText").click(function () { $(this).removeClass("navText")});
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
