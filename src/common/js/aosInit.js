import AOS from "libs/aos/aos";

$(function(){
    AOS.init({
        offset: 0,
        duration: 300,
        easing: "ease",
        delay: 0,
        anchor: 'body',
        disable: "mobile",
        once: false
    });
});

$(window).on('scroll', function() {
    AOS.refreshHard();
})