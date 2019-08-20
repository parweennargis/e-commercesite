'use strict';

const category = require('../models/Category');

module.exports = {
  index: async (request, response) => {
    const test1 = await category.find();
    console.log(test1);

    response.render('index', {});
  }
};
