'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var NotesSchema = new Schema({
  modifiedTime: String,
  createdTime: String,
  category: {
      type: String,
      enum: ['article', 'vocabulary', 'note', 'idea', 'todo', 'term']
  },
  term: {
    term:String,
    source: String,
    link: String,
    explanation: String,
    bulletPoint: [
      {type:String}
    ],
  },
  article: {
    link: String,
    read: Boolean,
    title: String,
    memo: [
      {
        content: String,
        modifiedTime: String,
        createdTime: String,
      }
    ],
    article:{
      content: String,
    },
  },
  vocabulary: {
    word: String,
    translation: String,
    direction: Array
  },
  note: {
    source: String,
    note: {
      author: String,
      content: String,
    }
  },
  idea: {
    content: String
  },
  todo: {
    status: String,
    content: String
  },
  reminder: {
    time: String,
    latestRemind: String,
    remindedTime: Array, 
    nextRemindTime: String, 
  }
});


module.exports = mongoose.model('Notes', NotesSchema);