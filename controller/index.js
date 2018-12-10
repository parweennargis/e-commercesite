'use strict';

const ProductModel = require('../model/productModel');
const CartModel = require('../model/cartModel');
const async = require('async');

module.exports = {
    index: (request, response) => {
        async.parallel({
            product: (callback) => {
                ProductModel.getAllProducts()
                    .then((result) => {
                        callback(null, result);
                    })
                    .catch((err) => {
                        callback(err);
                    });
            },
            cart: (callback) => {
                CartModel.getCartByUserId(1)
                    .then((result) => {
                        callback(null, result);
                    })
                    .catch((err) => {
                        callback(err);
                    });
            }
        }, function(err, result) {
            if(err) {
                console.log(err); 
            }
            // console.log(result);
            // console.log(JSON.parse(JSON.stringify(result.product)));
            response.render('index', {
                'urlPath': request.originalUrl,
                'newArrivals': JSON.parse(JSON.stringify(result.product)),
                'carts': result.cart
            });
        });
    }
}