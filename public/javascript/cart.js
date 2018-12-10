$('#delete-cart').click((event) => {
    event.preventDefault();
    // TODO : get cart Id
    var cartId = 12;

    $.ajax({
        url: baseurl + "/cart/delete/" + cartId,
        type: "DELETE",
        success: function (response) {
            console.log('response');
            console.log(response);
            // TODO : show msg in Green
            $(".form-login-error").show();
            $("#loginResponse").html(error.responseJSON.message);
        },
        error: function (error) {
            $(".form-login-error").show();
            $("#loginResponse").html(error.responseJSON.message);
        }
    });
});

$("#input_quantity").keyup(function() {
    // multiply here
    alert("keyup");
});