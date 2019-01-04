'use strict';
const https = require('https');
const env = require('../../env/env.js');

exports.getTranslation = function (req, res) {
  const key = process.env.TRANSLATION_API_KEY || env.TRANSLATION_API_KEY;

  https.get('https://translation.googleapis.com/language/translate/v2?q=' + req.params.word + '&target=zh&format=text&source=en&key=' + key, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data);
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.err(err);
  });

};