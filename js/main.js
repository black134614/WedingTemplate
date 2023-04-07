(function ($) {
    "use strict";
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });

    // Countdown
//    (function () {
//        const second = 1000,
//            minute = second * 60,
//            hour = minute * 60,
//            day = hour * 24;
//        let birthday = "March 31, 2023 23:59:00",
//            countDown = new Date(birthday).getTime(),
//            x = setInterval(function () {
//                let now = new Date().getTime(),
//                    distance = countDown - now;
//                document.getElementById("days").innerText = Math.floor(distance / (day)), document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)), document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//                if (distance < 0) {
//                    let headline = document.getElementById("headline"),
//                        countdown = document.getElementById("countdown"),
//                        content = document.getElementById("content");
//                    headline.innerText = "It's our discount!";
//                    countdown.style.display = "none";
//                    content.style.display = "block";
//                    clearInterval(x);
//                }
//            }, 0)
//    }());
    
})(jQuery);
