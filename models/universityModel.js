const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courses: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  }
});

module.exports = mongoose.model('University', universitySchema);
