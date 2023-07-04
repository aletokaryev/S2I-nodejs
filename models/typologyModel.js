const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typologySchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Typology', typologySchema);