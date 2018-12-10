$("#new-arrival-modal-div a i").click((event) => {
    event.preventDefault();
    $.ajax({
        url: baseurl + "/product/" + $("#new-arrival-id").val(),
        type: "GET",
        success: function (response) {
            
            $(".single-product-info").html("hdgfjkldsjhgfhjkhgfh");
            console.log(response);
        },
        error: function (error) {
            console.log('error');
            // $(".form-login-error").show();
            // $("#loginResponse").html(error.responseJSON.message);
        }
    });
});