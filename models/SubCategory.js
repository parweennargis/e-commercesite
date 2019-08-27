const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Sub Category Schema
 *
 * @author  Nargis Parween <nargislife@gmail.com>
 * @version Grand Category
 * @since   27th August, 2019
 */

var options = {
  timestamps: true
};

const subCategorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    trim: true,
    unique: true,
    required: true
  },
  status: {
    type: Schema.Types.Number,
    default: 1
  }
}, options);

module.exports = mongoose.model('SubCategory', subCategorySchema);
