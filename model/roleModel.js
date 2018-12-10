'use strict';

const sql = require('./index');

const Roles = (roles) => {
    this.name = name;
    this.status = status;
}

Roles.getAllRoles = (result) => {
    sql.query("Select * from roles", (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Roles.getRolesById = (roleId, result) => {
    sql.query("Select * from roles where id = ?", roleId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
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
Roles.saveRoles = (data, result) => {
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