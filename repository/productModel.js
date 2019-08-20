'use strict';

const sql = require('./index');

var Products = (products) => {
    this.category_id = products.category_id;
    this.image = products.image;
    this.name = products.name;
    this.price = products.price;
    this.short_description = products.short_description;
    this.long_description = products.long_description;
    this.status = products.status;
}

Products.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from products where status = '1' order by id desc limit 10", (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    }); 
}
Products.getProductByCategoryId = (categoryId, result) => {
    sql.query("Select * from products where category_id = ?", categoryId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Products.saveProduct = (data, result) => {
    sql.query("Insert into products set ?", data, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Products.deleteProduct = (productId, result) => {
    sql.query("Delete from products where id = ?", productId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Products.getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from products where id = ?", productId, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = Products;