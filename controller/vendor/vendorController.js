'use strict';

const userModel = require('../../repository/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    getAllVendors: (request, response) => {
        userModel.getAllUsers(2, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('vendor/viewVendors', {
                    'vendors': JSON.parse(JSON.stringify(result))
                });
            }
        });
    },
    getVendorById: (request, response) => {
        userModel.getUserById(request.params.id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('vendor/editVendor', {
                    'vendorData': result[0]
                });
            }
        });
    },
    postVendorById: (request, response) => {
        var data = {
            first_name : request.body.first_name,
            last_name : request.body.last_name,
            email : request.body.email,
            phone : request.body.phone,
            city : request.body.city
        };
        userModel.updateUserById(request.body.id, data, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/vendors');
            }
        });
    },
    getAddVendor: (request, response) => {
        response.render('vendor/addVendor');
    },
    createVendor: (request, response) => {
        var salt = bcrypt.genSaltSync(saltRounds);
        var hashPassword = bcrypt.hashSync(request.body.password, salt);
        var data = {
            'first_name': request.body.first_name,
            'last_name': request.body.last_name,
            'email': request.body.email,
            'phone': request.body.phone,
            'city': request.body.city,
            'password': hashPassword,
            'role_id': 2
        }
        userModel.createUser(data, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/vendors');
            }
        });
    },
    deleteVendorById: (request, response) => {
        userModel.deleteUserById(request.params.id, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/vendors');
            }
        });
    }
}