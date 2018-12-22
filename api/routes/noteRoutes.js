'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/noteController');

  // todoList Routes
  app.route('/notes')
    .get(todoList.list_all_notes)
    .post(todoList.create_a_note)
    .delete(todoList.delete_all_notes);


  app.route('/notes/:noteId')
    .get(todoList.read_a_note)
    .put(todoList.update_a_note)
    .delete(todoList.delete_a_note);
};
