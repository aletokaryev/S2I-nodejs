const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courseType: {
    type: Schema.Types.ObjectId,
    ref: 'Typology',
    required: true
  },
  universities: [{
    type: Schema.Types.ObjectId,
    ref: 'University',
    required: true
  }]
});

module.exports = mongoose.model('Course', courseSchema);
