'use strict';
const marked = require('marked');
const fs = require('fs');
const hljs   = require('highlight.js');
const style1 = fs.readFileSync('./node_modules/highlight.js/styles/railscasts.css', "utf8");
// // const style1 = fs.readFileSync('./node_modules/highlight.js/styles/solarized-dark.css', "utf8");
// console.log("style1", style1)

exports.convertMarkdownFormat = function (req, res) {
  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const html = marked(req.body.markdowm);

  res.json({
    html
  });

};