'use strict';

const sql = require('./index');

const Categories = (Categories) => {
    this.name = name;
    this.status = status;
}
Categories.getAllActiveCategory = () => {
    return new Promise((resolve, reject) => {
        sql.query("select * from categories where status = 1", (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
Categories.getCategoryById = (categoryId) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from categories where id = ?", categoryId, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}
Categories.deleteCategoryById = (categoryId, result) => {
    sql.query("delete from categories where id= ?", categoryId, (err, res) => {
        if (err) {
            result(err);
        } else {
            result(null, result);
        }
    });
    // return new Promise((resolve, reject) => {
    //     sql.query("delete from categories where id= ?", categoryId, (err, res) => {
    //         if (err) {
    //             reject(err);
    //         }
    //         resolve(res);
    //     });
    // });
}
Categories.createCategory = (data) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into categories set ?", data, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
            
        });
    });
}
Categories.updateCategoryById = (categoryId, data, result) => {
    sql.query("update categories set ? where id = ?", [{name: data}, categoryId], (err, res) => {
        if (err) {
            result(err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Categories;