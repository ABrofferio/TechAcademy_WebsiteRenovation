/**
 * Created by Makali'i on 6/15/2016.
 * This file should be loaded in all html pages.
 * // TODO: 6.15.16 Makali'i - Everything in here is accessible globally. Place into modules once files are DRY and structure established.
 */

/**************************************************************************
 *
 *************************************************************************/

function waitThenDoSomething(waitTimeInMS, myAction) {
    setTimeout(function () {
        if (myAction == "displayPopup") {
            $('#myModalPopUpContact').modal('show');
        }
    }, waitTimeInMS); //time in ms to wait before modal dialog box shows up.
}



/**************************************************************************
 *  USEFUL CLASSES WITH EVENTS
 *************************************************************************/
$('.clickForContactForm').on('click', function(){
    console.log('click for contact form');
    waitThenDoSomething(0, 'displayPopup');
});

$('.slideanim').hover(
    function () { $(this).addClass('fadeIn') },
    function () { $(this).removeClass('fadeIn') });



/**************************************************************************
 * Reveals/fades in/slides up headers, containers, and text etc...
 *************************************************************************/

$(document).ready(function () {
    $("header").hide();
    $(".text-center").scrollTop(0);
    $(".container").hide();
    $("#coverPic").fadeOut(2000);
    $(".container").fadeIn(4000);
    $("header").fadeIn(4000);
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
});








