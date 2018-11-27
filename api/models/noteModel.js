'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NotesSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the note'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Notes', NotesSchema);