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
const categoryController = require('../controller/category/categoryController')

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
routes.get('/add/role', roleController.getAddRole);
routes.post('/role', roleController.createRole);
routes.get('/all/roles', roleController.getAllRoles);
routes.get('/role/:id', roleController.getRoleById);
routes.put('/role/:id', roleController.updateRoleById);
routes.post('/role/:id', roleController.postRoleById);

// Category Routes
routes.get('/add/category', categoryController.getAddCategory);
routes.post('/category', categoryController.createCategory);
routes.get('/all/categories', categoryController.getAllCategories);
routes.get('/category/:id', categoryController.getCategoryById);
routes.post('/category/:id', categoryController.postCategoryById);
routes.get('/category/delete/:id', categoryController.deleteCategoryById);

module.exports = routes;