// 'use strict';

// const sql = require('./index');

// const SubCategories = (Categories) => {
//     this.category_id = category_id;
//     this.name = name;
//     this.status = status;
// }
// SubCategories.getActiveSubCategory = (result) => {
//     sql.query("select sc.id, c.name as category_name, sc.name as sub_cat_name, sc.created_at from sub_categories sc join categories c on sc.category_id = c.id", (err, res) => {
//         if (err) {
//             result(err);
//         } else {
//             result(null, res);
//         }
//     });
// }
// SubCategories.getSubCategoryById = (subcategoryId, result) => {
//     sql.query("select sc.id, c.name as category_name, sc.name as sub_cat_name, sc.created_at from sub_categories sc join categories c on sc.category_id = c.id where sc.id = ?", subcategoryId, (err, res) => {
//         if (err) {
//             result(err);
//         } else {
//             result(null, res);
//         }
//     });
// }
// SubCategories.deleteSubCategoryById = (subCategoryId, result) => {
//     sql.query("delete from sub_categories where id= ?", subCategoryId, (err, res) => {
//         if (err) {
//             result(err);
//         } else {
//             result(null, result);
//         }
//     });
// }
// SubCategories.createSubCategory = (data, result) => {
//     sql.query("insert into sub_categories set ?", data, (err, res) => {
//         if (err) {
//             result(err);
//         } else {
//             result(null, res);
//         }
        
//     });
// }
// SubCategories.updateSubCategoryById = (subCategoryId, data, result) => {
//     sql.query("update sub_categories set ? where id = ?", [{name: data}, subCategoryId], (err, res) => {
//         if (err) {
//             result(err);
//         } else {
//             result(null, res);
//         }
//     });
// }

// module.exports = SubCategories;