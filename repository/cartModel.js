'use strict';

// const sql = require('./index');

// var Carts = (carts) => {
//     this.user_id = user_id;
//     this.product_id = product_id;
//     this.quantity = quantity;
// }

// Carts.getCartByUserId = (userId) => {
//     return new Promise((resolve, reject) => {
//         sql.query("Select * from carts where user_id = ?", userId, (err, res) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         });
//     });
// }
// Carts.deleteCartById = (cartId, result) => {
//     sql.query("Delete from carts where id = ?", cartId, (err, res) => {
//         if (err) {
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// }
// Carts.updateCartById = (cartId, quantity, result) => {
//     sql.query("Update carts set quantity = ?", quantity, " where id = ?", cartId, (err, res) => {
//         if (err) {
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// }
// Carts.saveCarts = (data, result) => {
//     sql.query("Insert into carts set ?", data, (err, res) => {
//         if (err) {
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// }

// module.exports = Carts;