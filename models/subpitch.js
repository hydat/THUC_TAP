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
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  },
  subpitch_type: {
    type: Number,
    require: true
  }, // 1: san 5, 2: san 7 
  pitch_id: {
    type: Schema.ObjectId,
    require: true,
    ref: 'Pitch'
  },
  active:{
    type: Boolean,
    require: true
  },// true : active, false : diactive
  time:{
    type:Array
  }
})

module.exports = mongoose.model('Subpitch',schema)