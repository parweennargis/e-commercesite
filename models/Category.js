const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Category Schema
 *
 * @author  Nargis Parween <nargislife@gmail.com>
 * @version Category
 * @since   27th August, 2019
 */

var options = {
  timestamps: true
};

const categorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    trim: true,
    unique: true,
    required: true
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
    required: true
  }
}, options);

module.exports = mongoose.model('Category', categorySchema);
