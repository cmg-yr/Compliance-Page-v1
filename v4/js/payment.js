$(document).ready(function(){
    $('input:checkbox[name=billing_same_as_shipping]').change(function(){
        var billingFields = $('.billing-fields');
        var c = this.checked ? billingFields.slideUp()  :  billingFields.slideDown();
    });


    //ADDRESS
    var address = $('#billing_address');
    var form = $('#billing_state').closest('form');
    var masks = $('#billing_city, #billing_state, #billing_zip').parent();

    form.addClass('mask-address');
    masks.addClass('address-field');
    address.attr('placeholder', '');

    if (address.val())
        form.removeClass('mask-address');

    address.bind('blur keydown', function() {
        form.removeClass('mask-address');;
    });

    initAutoComplete({
        fieldId: 'billing_address',
        updateMap: {
            billing_city: 'locality',
            billing_state: 'administrative_area_level_1',
            billing_zip: 'postal_code'
        }
    });


    // // CREDIT CARD
    var accepted = ['visa', 'master','discover'];
    var classes = accepted.join(' ');

    $(function() {

        $('.credit-card-wrap input').validateCreditCard(function(result) {

            // valid card number
            if (result.length_valid && result.luhn_valid == true) {
                $('.credit-card-wrap').addClass('is-valid');
                $('.credit-card-wrap').removeClass('not-valid');
            }
            else {
                $('.credit-card-wrap').removeClass('is-valid');
                $('.credit-card-wrap').addClass('not-valid');
            }

            // no card type
            if (result.card_type == null) {
                $('.credit-cards').removeClass(classes);
                $('#card-error').html('');
                $('#card-type').val('visa');

            }

            // accepted card type
            else if (accepted.indexOf(result.card_type.name) !== -1) {
                $('.credit-cards').addClass(result.card_type.name);
                $('#card-type').val(result.card_type.name);
            }

            // unaccepted card type
            else {
                $('.credit-cards').removeClass(classes);
                $('#card-error').html('Invalid Card Type.');
                $('#card-type').val('visa');
            }
        });

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
