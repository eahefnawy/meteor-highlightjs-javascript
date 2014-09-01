Package.describe({
  summary: "JavaScript Syntax highlighter for your browser - Packed for Meteor",
  version: "1.0.0",
  git: "https://github.com/eahefnawy/meteor-highlightjs-javascript.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('monokai_sublime.css', "client");
  api.addFiles('highlight.pack.js', "client");
});

