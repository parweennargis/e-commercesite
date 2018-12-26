'use strict';

const subCategoryModel = require('../../model/subCategoriesModel');
const categoryModel = require('../../model/categoriesModel');

module.exports = {
    getAllSubCategories: (request, response) => {
        subCategoryModel.getActiveSubCategory((err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('subcategory/viewSubCategories', {
                    'subcategories': JSON.parse(JSON.stringify(result))
                });
            }
        });
    },
    getSubCategoryById: (request, response) => {
        subCategoryModel.getSubCategoryById(request.params.id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('subcategory/editSubCategory', {
                    'subcategoryData': result[0]
                });
            }
        });
    },
    postSubCategoryById: (request, response) => {
        subCategoryModel.updateSubCategoryById(request.body.id, request.body.name, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/sub-categories');
            }
        });
    },
    getAddSubCategory: (request, response) => {
        categoryModel.getAllActiveCategory((err, result) => {
            if (err) {
                console.log(err);
            } else {
                response.render('subcategory/addSubCategory', {
                    'categories': JSON.parse(JSON.stringify(result))
                });
            }
        });
    },
    createSubCategory: (request, response) => {
        subCategoryModel.createSubCategory(request.body, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/sub-categories');
            }
        });
    },
    deleteSubCategoryById: (request, response) => {
        subCategoryModel.deleteSubCategoryById(request.params.id, (err, result) => {
            if (err) { 
                console.log(err);
            } else {
                response.redirect('/all/sub-categories');
            }
        });
    }
}