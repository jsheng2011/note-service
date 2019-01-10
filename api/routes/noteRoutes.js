'use strict';
module.exports = function(app) {
  var noteController = require('../controllers/noteController');
  var translationController = require('../controllers/translationController');
  var markdownController = require('../controllers/markdownController');


  // noteController Routes
  app.route('/notes')
    .get(noteController.list_all_notes)
    .post(noteController.create_a_note)
    .delete(noteController.delete_all_notes);


  app.route('/notes/:noteId')
    .get(noteController.read_a_note)
    .put(noteController.update_a_note)
    .delete(noteController.delete_a_note);

  // translation Routes
  app.route('/translation/:word')
    .get(translationController.getTranslation)

  // translation Routes
  app.route('/preview')
    .post(markdownController.convertMarkdownFormat)
};
