$(document).on('mousemove', function (event) {
    var scrollPosition = $(window).scrollTop();
    var hasClosed = !$('#exit-content').hasClass('closed-exit');
    var mousePositionY = ( event.pageY - scrollPosition);
    if((mousePositionY < 5) && hasClosed){
        // Show the exit popup
        $('#exit-bg').fadeIn();
        $('#exit-content').fadeIn();
    }
});
$(document).ready(function(){
    $('.exit-close').click(function(){
        $('#exit-content').fadeOut();
        $('#exit-content').addClass('closed-exit');
    });
    $('.exit-bg').click(function(){
        $('#exit-content').fadeOut();
    });
    $(".exit-button").click(function () {
        window.location.href = "payment-discount.php";
    });

});
