'use strict';

const CartModel = require('../../model/cartModel');

module.exports = {
    getAllCarts: (request, response) => {
        var userId = 1;
        CartModel.getCartByUserId(userId, (err, res) => {
            if (err) {
                return response.status(400).send({
                    error: true,
                    message: 'Error in Getting Cart'
                });
            } else {
                return response.status(200).send({
                    error: false,
                    message: res
                });
            }
        });
    },
    deleteCart: (request, response) => {
        CartModel.deleteCartById(request.params.id, (err, res) => {
            if (err) {
                return response.status(400).send({
                    error: true,
                    message: 'Error in Deleting Cart'
                });
            } else {
                return response.status(200).send({
                    error: false,
                    message: 'Cart Deleted Successfully'
                });
            }
        });
    },
    checkoutCart: (request, response) => {
        var requestData = request.body;

    },
    checkoutCart: (request, response) => {
        var data = request.body;
        CartModel.updateCartById(cartId, quantity, (err, res) => {
            if (err) {
                return response.status(200).send({
                    error: false,
                    message: 'Cart Deleted Successfully'
                });
            } else {
                module.exports.getAllCarts();
            }
        })
    }
}