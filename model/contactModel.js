'use strict';

const sql = require('./index');

var Contacts = (contacts) => {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.notes = notes;
}

Contacts.getAllContacts = (result) => {
    sql.query("Select * from contacts order by id desc", (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Contacts.saveContact = (data, result) => {
    sql.query('Insert into contacts set ?', data, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}