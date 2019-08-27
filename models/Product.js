const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Product Schema
 *
 * @author  Nargis Parween <nargislife@gmail.com>
 * @version Product Category
 * @since   27th August, 2019
 */

var options = {
  timestamps: true
};

 /**
  * Grand Category Schema
  */
const grandCategorySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'GrandCategory'
  },
  name: {
    type: Schema.Types.String,
    required: true,
    trim: true
  }
});

/**
 * Category Schema
 */
const categorySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  },
  name: {
    type: Schema.Types.String,
    required: true,
    trim: true
  }
});

/**
 * Sub Category Schema
 */
const subCategorySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'SubCategory'
  },
  name: {
    type: Schema.Types.String,
    required: true,
    trim: true
  }
});

/**
 * Product image
 */
const productImageSchema = new Schema({
  image: {
    type: Schema.Types.String,
    required: true,
    trim: true
  },
  is_main: {
    type: Schema.Types.Boolean,
    required: true
  }
});

const productSchema = new Schema({
  sub_category: {
    type: grandCategorySchema,
    required: true
  },
  category: {
    type: categorySchema,
    required: true
  },
  sub_category: {
    type: subCategorySchema,
    required: true
  },
  name: {
    type: Schema.Types.String,
    trim: true,
    required: true
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
    required: true
  },
  real_price: {
    type: Schema.Types.Number,
    required: true
  },
  discounted_price: {
    type: Schema.Types.Number
  },
  main_image: {
    type: productImageSchema,
    required: true
  },
  description: {
    type: Schema.Types.String,
    trim: true
  },
  is_available: {
    type: Schema.Types.Boolean,
    required: true,
    default: true
  }
}, options);

module.exports = mongoose.model('Product', productSchema);
