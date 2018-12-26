'use strict';

const express = require('express');
const routes = express.Router();
const indexController = require('../controller/index');
const cartController = require('../controller/cart/cart');
const loginController = require('../controller/auth/login');
const registerController = require('../controller/auth/register');
const productController = require('../controller/product/product');
const roleController = require('../controller/role/roleController');
const vendorController = require('../controller/vendor/vendorController');
const categoryController = require('../controller/category/categoryController');
const adminDashboardController = require('../controller/admin/dashboardController');
const subCategoryController = require('../controller/category/subCategoryController');

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

// Sub Category Routes
routes.get('/all/sub-categories', subCategoryController.getAllSubCategories);
routes.get('/sub-category/:id', subCategoryController.getSubCategoryById);
routes.post('/sub-category/:id', subCategoryController.postSubCategoryById);
routes.get('/add/sub-category', subCategoryController.getAddSubCategory);
routes.post('/sub-category', subCategoryController.createSubCategory);
routes.get('/sub-category/delete/:id', subCategoryController.deleteSubCategoryById);

// Vendor Routes
routes.get('/all/vendors', vendorController.getAllVendors);
routes.get('/vendor/:id', vendorController.getVendorById);
routes.post('/vendor/:id', vendorController.postVendorById);
routes.get('/add/vendor', vendorController.getAddVendor);
routes.post('/vendor', vendorController.createVendor);
routes.get('/vendor/delete/:id', vendorController.deleteVendorById);

module.exports = routes;