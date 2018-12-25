'use strict';

const roleModel = require('../../model/roleModel');
const async = require('async');

module.exports = {
    getAddRole: (request, response) => {
        response.render('role/addRole');
    },
    createRole: (request, response) => {
        roleModel.createRoles(request.body, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.redirect('/all/categories');
            }
        });
    },
    getAllRoles: (request, response) => {
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
    updateRoleById: (request, response) => {
        console.log('updateCategoryById');
    },
    postRoleById: (request, response) => {
        console.log('postCategoryById');
    }
}