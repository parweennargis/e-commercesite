'use strict';

const sql = require('./index');

const Categories = (Categories) => {
    this.name = name;
    this.status = status;
}
Categories.getAllActiveCategory = (result) => {
    sql.query("select * from categories where status = 1", (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Categories.getCategoryById = (categoryId, result) => {
    sql.query("select * from categories where id = ?", categoryId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Categories.deleteCategoryById = (categoryId, result) => {
    sql.query("delete from categories where id= ?", categoryId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Categories.saveCategory = (data, result) => {
    sql.query("insert into categories set ?", data, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Categories.updateCategoryById = (categoryId, data, result) => {
    sql.query("update categories set ?", data, " where id = ?", categoryId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Categories;