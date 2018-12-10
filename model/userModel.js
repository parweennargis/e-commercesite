'use strict';

const sql = require('./index');

var Users = (users) => {
    this.first_name = users.first_name;
    this.last_name = users.last_name;
    this.email = users.email;
    this.password = users.password;
    this.phone = users.phone;
    this.city = users.city;
    this.role_id = users.role_id;
    this.status = users.status;
}

Users.getAllUsers = (roleId, result) => {
    sql.query("Select * from users where role_id = ?", roleId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });   
};
Users.checkEmail = (email, result) =>  {
    sql.query("Select count(*) as count from users where email = ?",  email, (err, res) => {
        if (err) {
            result(err);
        } else {
            result(null, res[0].count);
        }
    });
}
Users.createUser = (users, result) => {
    sql.query("Insert into users set ?", users, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Users.getUserByEmail = (email, result) => {
    sql.query("Select * from users where email = ?", email, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Users.updateUserById = (userId, data, result) => {
    sql.query("Update users set ?", data, " where id = ?", userId, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Users.deleteUserById = (userId, result) => {
    sql.query("delete from users where id = ?", userId, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Users;