$("#register-form").click(function (event) {
    event.preventDefault();
    var data = {
        firstName: $("#first_name").val(),
        lastName: $("#last_name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        city: $("#city").val(),
        password: $("#password").val(),
        confPassword: $("#conf_password").val()
    };
    if (doRegisterValidation(data)) {
        return;
    }
console.log(baseurl);
    $.ajax({
        url: baseurl + "/register",
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
 * Do Register Validation
 * 
 * @param {Array} data 
 */
function doRegisterValidation(data) {
    var error = false;
    if(data.firstName == '') {
        var error = true;
        $("#first_name").css({'border': '1px solid red'});
    } else {
        $("#first_name").css({'border': '1px solid green'});
    }
    if (data.lastName == '') {
        var error = true;
        $("#last_name").css({'border': '1px solid red'});
    } else {
        $("#last_name").css({'border': '1px solid green'});
    }
    if (data.email == '') {
        var error = true;
        $("#email").css({'border': '1px solid red'});
    } else {
        $("#email").css({'border': '1px solid green'});
    }
    if (data.phone == '') {
        var error = true;
        $("#phone").css({'border': '1px solid red'});
    } else {
        $("#phone").css({'border': '1px solid green'});
    }
    if (data.city == '') {
        var error = true;
        $("#city").css({'border': '1px solid red'});
    } else {
        $("#city").css({'border': '1px solid green'});
    }
    if (data.password == '') {
        var error = true;
        $("#password").css({'border': '1px solid red'});
    } else {
        $("#password").css({'border': '1px solid green'});
    }
    if (data.confPassword == '' || data.password != data.confPassword) {
        var error = true;
        $("#conf_password").css({'border': '1px solid red'});
    } else {
        $("#conf_password").css({'border': '1px solid green'});
    }

    return error;
}