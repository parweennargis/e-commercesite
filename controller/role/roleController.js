'use strict';

const roleModel = require('../../model/roleModel');
const async = require('async');

module.exports = {
    getAddCategory: (request, response) => {
        response.render('role/addRole');
    },
    createCategory: (request, response) => {
        roleModel.createRoles(request.body, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.redirect('/all/categories');
            }
        });
    },
    getAllCategories: (request, response) => {
        async.parallel({
            roles: (callback) => {
                roleModel.getAllRoles()
                    .then((result) => {
                        callback(null, result);
                    })
                    .catch((err) => {
                        callback(err);
                    });
            }
        }, (err, result) => {
            if(err) {
                console.log(err); 
            }
            response.render('role/viewRoles', {
                'roles': JSON.parse(JSON.stringify(result.roles))
            });
        });
    },
    getRoleById: (request, response) => {
        async.parallel({
            getRoleById: (callback) => {
                roleModel.getRolesById(request.params.id)
                .then((result) => {
                    callback(null, result);
                })
                .catch((err) => {
                    callback(err);
                });
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
            }
            // console.log('====');
            console.log(JSON.parse(JSON.stringify(result.getRoleById)));
            // console.log('*****');
            response.render('role/editRole', {
                'roleData': JSON.parse(JSON.stringify(result.getRoleById))
            });
        });
    },
    updateCategoryById: (request, response) => {
        console.log('updateCategoryById');
    },
    postCategoryById: (request, response) => {
        console.log('postCategoryById');
    }
}