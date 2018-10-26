
$(document).ready(function() {


    var accepted = ['visa', 'master', 'discover'];
    var classes = accepted.join(' ');

    $(function() {

        $('#card-number input').validateCreditCard(function(result) {

            // valid card number
            if (result.length_valid && result.luhn_valid == true) {
                $('#card-number').addClass('is-valid');
                $('#card-number').removeClass('not-valid');
            }
            else {
                $('#card-number').removeClass('is-valid');
                $('#card-number').addClass('not-valid');
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

    $("input:checkbox[name=billing_same_as_shipping]").click(function() {
        var billing_fields = $('.billing-fields');
        if (!$(this).is(':checked') ){
            billing_fields.slideDown();
        } else {
            billing_fields.slideUp();
        }
    });


    $('#billing_city, #billing_state, #billing_zip').parent().addClass('address-field');
    initAutoComplete({
        fieldId: 'billing_street_address',
        updateMap: {
            billing_city: 'locality',
            billing_state: 'administrative_area_level_1',
            billing_postcode: 'postal_code'
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