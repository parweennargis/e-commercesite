'use strict';

const UserModel = require('../../model/userModel');
const bcrypt = require('bcrypt');

module.exports = {
    getLogin: (request, response) => {
        response.render('auth/login');
    },
    postLogin: (request, response) => {
        var email = request.body.email;
        var password = request.body.password;
        UserModel.getUserByEmail(email, (err, res) => {
            if (err) {
                console.log('error in finding users');
            } else {
                if (res.length > 0) {
                    console.log(res[0].password);
                    if (bcrypt.compareSync(password, res[0].password)) {
                        // make seesion active for user and redirect to dashboard

                    } else {
                        return response.status(401).send({
                            error: true,
                            message: "Invalid Lgin Credential"
                        });
                    }
                } else {
                    return response.status(401).send({
                        error: true,
                        message: "Invalid Lgin Credential"
                    });
                }
            }
        });
    }
}