Package.describe({
  name: 'peerlibrary:stacktrace',
  summary: "Meteor package for getting uniform stack traces in all web browsers and server",
  version: '1.3.1_3',
  git: 'https://github.com/peerlibrary/meteor-stacktrace.git'
});

Npm.depends({
  'stacktrace-js': '1.3.1'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  // Core dependencies.
  api.use([
    'modules',
    'promise'
  ]);

  api.export('StackTrace');

  api.addFiles([
    'stacktrace.js'
  ]);
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  // Core dependencies.
  api.use([
    'tinytest',
    'test-helpers',
    'underscore'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:stacktrace',
  ]);

  api.addFiles([
    'tests.js'
  ]);
});
