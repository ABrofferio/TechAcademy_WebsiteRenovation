$(document).ready(function () {


    /**************************************************************************
     * 
     *************************************************************************/

    waitThenDoSomething(60000, "displayPopup"); //this function waits 60000milliseconds before displaying a popup.


    /**************************************************************************
     * Testimonials Slider. Used only on this page.
     *************************************************************************/
    
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


    /**************************************************************************
     *
     *************************************************************************/


});
