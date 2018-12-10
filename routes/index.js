'use strict';

const express = require('express');
const routes = express.Router();
const loginController = require('../controller/auth/login');
const indexController = require('../controller/index');
const registerController = require('../controller/auth/register');
const adminDashboardController = require('../controller/admin/dashboard');
const cartController = require('../controller/cart/cart');
const productController = require('../controller/product/product');
const roleController = require('../controller/role/roleController');

// Home Page
routes.get('/', indexController.index);

// Login routes
routes.get('/login', loginController.getLogin);
routes.post('/login', loginController.postLogin);

// Register routes
routes.get('/register', registerController.getRegister);
routes.post('/register', registerController.postRegister);

// Cart routes
routes.get('/cart', cartController.getAllCarts);
routes.delete('/cart/delete/:id', cartController.deleteCart);
routes.post('checkout-cart', cartController.checkoutCart);

// Contacts Routes
// routes.get('/contact', );

// Product Routes
routes.get('/product/:id', productController.getProductDetailById);

// Admin Dashboard
routes.get('/admin/dashboard', adminDashboardController.getDashboard);

// Role Routes
routes.get('/add/category', roleController.getAddCategory);

module.exports = routes;