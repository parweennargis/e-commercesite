'use strict';

const ProductModel = require('../../repository/productModel');
const productImageModel = require('../../repository/productImageModel');
const async = require('async');

module.exports = {
    getProductDetailById: (request, response) => {
        var productId = request.params.id;
        async.parallel({
            product: (callback) => {
                ProductModel.getProductById(productId)
                    .then((result) => {
                        callback(null, result);
                    })
                    .catch((err) => {
                        callback(err);
                    });
            },
            productImage: (callback) => {
                productImageModel.getProductImageByProductId(productId)
                .then((result) => {
                    callback(null, result);
                })
                .catch((err) => {
                    callback(err);
                })
            }
        }, function(err, result) {
            if(err) {
                console.log(err); 
            }
            return response.status(200).send({
                error: false,
                product: result.product[0],
                productImage: JSON.parse(JSON.stringify(result.productImage))
            });
        });
    }
}