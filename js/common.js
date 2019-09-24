$(document).ready(function () {
    // styling select
    $(function () {
        $('select').styler();
    });
    // left fixed nav
    if ($('.fixed-left-box').length > 0) {
        $(function () {
            $(document).scroll(function () {
                if ($(this).scrollTop() >= $('#hello').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(4)").addClass('active');
                }
                if ($(this).scrollTop() >= $('#rad').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(3)").addClass('active');
                }
                if ($(this).scrollTop() >= $('#app').offset().top - 50) {
                    $(".fixed-left-box ul li").removeClass('active');
                    $(".fixed-left-box ul li:nth-child(2)").addClass('active');
                }
            });
        });
    }


    // burger menu
    $('.phone-burger').click(function () {
        $('.header__nav').show();
    });
    $('.close-phone-menu').click(function () {
        $('.header__nav').hide();
    });

    // range slider
    if ($('.range-slider').length > 0) {
        $(function () {
            $(document).scroll(function () {
                var desiredHeight = $(window).height() - 100;
                if ($(this).scrollTop() >= $('#range-top').offset().top - desiredHeight) {
                    $(".range__linecontainer").addClass('active');
                    $('.range__point.red').addClass('pulse-anim');
                }

            });
        });
        $(function () {
            $(document).ready(function () {
                var desiredHeight = $(window).height() - 100;
                if ($(this).scrollTop() >= $('#range-top').offset().top - desiredHeight) {
                    $(".range__linecontainer").addClass('active');
                    $('.range__point.red').addClass('pulse-anim');
                }

            });
        });
    }





});

