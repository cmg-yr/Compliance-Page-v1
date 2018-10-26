$(document).ready(function() {

    $('a[href^="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    $('a.to-form').click(function(){
        $('input#first_name').focus();
    });


    //ADDRESS
    var address = $('#address');
    var form = $('#state').closest('form');
    var masks = $('#city, #state, #zip').parent();

    form.addClass('mask-address');
    masks.addClass('address-field');
    address.attr('placeholder', 'Address');

    if (address.val())
        form.removeClass('mask-address');

    address.bind('blur keydown', function() {
        form.removeClass('mask-address');;
    });

    initAutoComplete({
        fieldId: 'address',
        updateMap: {
            city: 'locality',
            state: 'administrative_area_level_1',
            zip: 'postal_code'
        }
    });

    // Number Only Fields
    $(".number-field input").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            // $(this).parent().children(".error-message").html("Numbers Only").show().fadeOut("slow");
            return false;
        }
    });

});