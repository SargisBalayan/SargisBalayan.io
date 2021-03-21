$(document).ready(function () {

    $('#homeForm').submit(function (e) {
        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;

        var hfFirstName = $('[name="hfFirstName"]')
        var hfLastName = $('[name="hfLastName"]')
        var hfDateOfBirth = $('[name="hfDateOfBirth"]')
        var zipCode = $('[name="zipCode"]')


        if (hfFirstName.val().length == 0) {
            var error = true;
            hfFirstName.addClass("validation");
        } else {
            hfFirstName.removeClass("validation");
        }
        if (hfLastName.val().length == 0) {
            var error = true;
            hfLastName.addClass("validation");
        } else {
            hfLastName.removeClass("validation");
        }

        if (hfDateOfBirth.val().length == 0) {
            var error = true;
            hfDateOfBirth.addClass("validation");
        } else {
            hfDateOfBirth.removeClass("validation");
        }


        // If there is no validation error, next to process the mail function
        if (error == false) {
            try {
            $.post("forms/homeForm.php", $("#homeForm").serialize(), function (result) {
                if (result) {
                    // $('#submitVM').attr({'enabled': 'enable', 'value': 'send'});
                    //Display the success message
                     $('#mail_success').fadeIn(500);
                } else {
                    //Display the error message
                    $('#mail_fail').fadeIn(500);
                    // Enable the submit button again
                    // $('#submitVM').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
            } catch(e) {
                console.log(e);
            }
        }
    });

});
