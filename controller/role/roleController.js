'use strict';

const roleModel = require('../../model/roleModel');

module.exports = {
    getAddCategory: (request, response) => {
        response.render('role/addRole');
    }
}