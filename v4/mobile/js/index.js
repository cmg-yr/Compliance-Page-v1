$(document).scroll(function() {
    var anchor = $('#section5').offset().top;
    var y = $(this).scrollTop();
    if (y > anchor){
        $('.legal-footer').slideDown("fast");
    } else {
        $('.legal-footer').slideUp("fast");
    }
});