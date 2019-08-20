'use strict';

const model = require('./index');

// const Categories = (Categories) => {
//     this.name = name;
//     this.status = status;
// };
module.exports = {
  getAllActiveCategory: () => {
    try {
      const test = model.Category.findAll({});

      return test;
    } catch (e) {
      console.log("== hdgfgjds == ", e);
    }
  }




  // sql.query("select * from categories where status = 1", (err, res) => {
  //     if (err) {
  //         result(err);
  //     } else {
  //         result(null, res);
  //     }
  // });
};
// Categories.getCategoryById = (categoryId) => {
//   return new Promise((resolve, reject) => {
//     sql.query("select * from categories where id = ?", categoryId, (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// }
// Categories.deleteCategoryById = (categoryId, result) => {
//   sql.query("delete from categories where id= ?", categoryId, (err, res) => {
//     if (err) {
//       result(err);
//     } else {
//       result(null, result);
//     }
//   });
// }
// Categories.createCategory = (data) => {
//   return new Promise((resolve, reject) => {
//     sql.query("insert into categories set ?", data, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//
//     });
//   });
// }
// Categories.updateCategoryById = (categoryId, data, result) => {
//   sql.query("update categories set ? where id = ?", [{name: data}, categoryId], (err, res) => {
//     if (err) {
//       result(err);
//     } else {
//       result(null, res);
//     }
//   });
// }
//
// module.exports = Categories;