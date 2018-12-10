'use strict';

const UserModel = require('../../model/userModel');
const Validator = require('validatorjs');
const middleware = require('../../middleware/middleware');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    getRegister: (req, res) => {
        res.render('auth/register');
    },
    postRegister: (request, response) => {
        // check email unique or not
        var email = request.body.email;
        checkEmailRes = module.exports.checkEmail(email, (err));
        if (checkEmailRes) {
            return response.status(400).send({
                error: true,
                message: 'Email Exist'
            });
        }
        // do validation
        var validation = module.exports.doRegistrationValidation(request.body);
        if (validation.fails()) {
            return response.status(400).send({
                error: true,
                message: middleware.parseErrorMsg(validation.errors.all())
            });
        }

        var salt = bcrypt.genSaltSync(saltRounds);
        var hashPassword = bcrypt.hashSync(request.body.password, salt);
        var data = {
            'first_name': request.body.firstName,
            'last_name': request.body.lastName,
            'email': email,
            'phone': request.body.phone,
            'city': request.body.city,
            'password': hashPassword,
            'role_id': 3
        }
        UserModel.createUser(data, (err, res) => {
            if (err) {
                console.log('error in saving data');
            } else {
                return response.status(200).send({
                    error: false,
                    message: 'Record saved successfully'
                });
            }
        });
    },
    doRegistrationValidation: (params) => {
        var data = {
            'first_name': params.firstName,
            'last_name': params.lastName,
            'email': params.email,
            'phone': params.phone,
            'city': params.city,
            'password': params.password,
            'confirm_password': params.confPassword
        }
        var rules = {
            first_name: 'required|min:2|max:10',
            last_name: 'required|min:2|max:10',
            email: 'required|min:4|max:20|email',
            phone: 'required|numeric|min:8',
            password: 'required|min:6|max:20|required_with:confirm_password|same:confirm_password'
        }

        var message = {}

        // var message = {
        //     'first_name.required': 'First Name Is Required',
        //     'first_name.min': 'First Name Min Value Should be 2',
        //     'first_name.max': 'First Name Max Value Should be 10',
        //     'lastName.required': 'Last Name Is Required',
        //     'lastName.min': 'Last Name Min Value Should be 2',
        //     'lastName.max': 'Last Name Max Value Should be 10',
        //     'email.required': 'Email Is Required',
        //     'email.min': 'Email Min Value Should be 4',
        //     'email.max': 'Email Max Value Should be 20',
        //     'email.email': 'Email Should be Proper',
        //     'phone.required': 'Phone Is Required',
        //     'phone.min': 'Phone Min Value Should be 8',
        //     'phone.max': 'Phone Max Value Should be 10',
        //     'password.required': 'Password Is Required',
        //     'password.min': 'Password Min Value Should be 6',
        //     'password.max': 'Password Max Value Should be 20',
        //     'password.required_with': 'check this mg',
        //     'password.same': 'same check'
        // }

        return new Validator(data, rules, message);
    },
    checkEmail: (email) => {
        UserModel.checkEmail(email, (err, res) => {
            if (err) {
                console.log('error');
            } else {
                if (res) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }
}