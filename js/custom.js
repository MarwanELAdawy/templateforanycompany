
// add now class to li item when click
$(document).ready(function () {
    $('li').click(function () {
        $(this).addClass('now').siblings().removeClass('now');;

    })
})

// make smooth scroll 

$(document).ready(function () {
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});
// animation with woe .js

new WOW().init();

// nice scroll
$("html").niceScroll({
    cursorcolor: "#089b4a"

});