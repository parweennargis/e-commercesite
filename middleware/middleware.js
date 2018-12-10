'use strict';

exports.setBaseUrl = (req, res, next) => {
    res.locals.HOST = req.protocol + '://' + req.get('host');
    res.locals.PATH = req.originalUrl;
    // console.log(req);
    console.log(res.locals.PATH);

    next();
}

exports.parseErrorMsg = (errors) => {
    var errorMessage = '';
    var keys = Object.keys(errors);
    if (keys.length) {
        keys.forEach(function (value) {
            errors[value].forEach(function (message) {
                errorMessage += message + "<br>";
            });
        });
    }

    return errorMessage;
};