'use strict';

const sql = require('./index');

const Roles = (roles) => {
    this.name = name;
    this.status = status;
}

Roles.getAllRoles = () => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from roles", (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
}
Roles.getRolesById = (roleId) => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from roles where id = ?", roleId, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
Roles.deleteRolesById = (roleId, result) => {
    sql.query('Delete from roles where id = ?', roleId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Roles.getUsedRoleById = (roleId, result) => {
    sql.query("Select count(*) from users where role_id = ?", roleId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Roles.createRoles = (data, result) => {
    sql.query("Insert into roles set ?", data, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Roles.updateRoleById = (roleId, data, result) => {
    sql.query("Update roles set ?", data, " where id = ?", roleId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Roles;