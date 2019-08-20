'use strict';

const categoryModel = require('../../repository/CategoryRepository');
const async = require('async');

module.exports = {
    getAddCategory: (request, response) => {
        response.render('category/addCategory');
    },
    createCategory: (request, response) => {
        async.parallel({
            insertCat : (callback) => {
                categoryModel.createCategory(request.body)
                .then((result) => {
                    callback(null, result);
                }).catch((err) => {
                    callback(err);
                });
            }
        }, (err, result) => {
            if (err) { console.log(err); }
            response.redirect('/all/categories');
        });
    },
    getAllCategories: (request, response) => {
        categoryModel.getAllActiveCategory((err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('category/viewCategories', {
                    'categories': JSON.parse(JSON.stringify(result))
                });
            }
        });
    },
    getCategoryById: (request, response) => {
        async.parallel({
            getCategoryById: (callback) => {
                categoryModel.getCategoryById(request.params.id)
                .then((result) => {
                    callback(null, result);
                })
                .catch((err) => {
                    callback(err);
                });
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
            }
            response.render('category/editCategory', {
                'categoryData': result.getCategoryById[0]
            });
        });
    },
    deleteCategoryById: (request, response) => {
        categoryModel.deleteCategoryById(request.params.id, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/categories');
            }
        });
    },
    postCategoryById: (request, response) => {
        categoryModel.updateCategoryById(request.body.id, request.body.name, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/categories');
            }
        });
    }
}