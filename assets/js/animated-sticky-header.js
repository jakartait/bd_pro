$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
        $('.text').addClass("sticky");
     } else {
        $('header').removeClass("sticky");
        $('.text').removeClass("sticky");
     }
});
