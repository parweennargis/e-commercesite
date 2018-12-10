'use strict';

const sql = require('./index');

const ProductImage = (productImage) => {
    this.product_id = product_id;
    this.image = image;
    this.status = status;
}
ProductImage.getProductImageById = (pImageId, result) => {
    sql.query("select * from product_images where id = ?", pImageId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
ProductImage.getProductImageByProductId = (productId) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from product_images where status = 1 and product_id = ?", productId, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
ProductImage.deleteProductImageById = (pImageId, result) => {
    sql.query("delete from product_images where id = ?", pImageId, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
ProductImage.saveProductImage = (data, result) => {
    sql.query("Insert into product_images set ?", data, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = ProductImage;