$("#login-form").click((event) => {
    event.preventDefault();
    var data = {
        email: $("#email").val(),
        password: $("#password").val()
    };
    if (doLoginValidation(data)) {
        return;
    }
    $.ajax({
        url: baseurl + "/login",
        type: "POST",
        data: data,
        success: function (response) {
            console.log('response');
            console.log(response);
        },
        error: function (error) {
            $(".form-login-error").show();
            $("#loginResponse").html(error.responseJSON.message);
        }
    });
});

/**
 * Do Login Validation
 * 
 * @param {Array} data 
 */
function doLoginValidation(data) {
    var error = false;
    if(data.email == '') {
        var error = true;
        $("#email").css({'border': '1px solid red'});
    } else {
        $("#email").css({'border': '1px solid green'});
    }
    if (data.password == '') {
        var error = true;
        $("#password").css({'border': '1px solid red'});
    } else {
        $("#password").css({'border': '1px solid green'});
    }

    return error;
}