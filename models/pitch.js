var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    require: true
  },
  desc: {
    type: String
  },
  address: {
    type: String,
    require: true
  },
  district: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  phone_number: {
    type: String,
    require: true
  },
  pitch_type: {
    type: Number,
    require: true
  }, // 1: san 5, 2: san 7 , 3: ca 2,
  owner_id: {
    type: Schema.ObjectId,
    require: true,
    ref: 'User'
  },
  image_url: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Pitch',schema)