$(document).ready(function() {
            $('#tour-container').fadeIn(2000);      
        });

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


            $('.slideanim').hover(
                function () { $(this).addClass('fadeIn') },
                function () { $(this).removeClass('fadeIn') });
        
        $(document).ready(function(){
                $('.your-class').slick({
                dots: true,
                infinite: true,
                speed: 1500,
                fade: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
            });     
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