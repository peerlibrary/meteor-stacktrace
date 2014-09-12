Package.describe({
  summary: "Meteor package for getting uniform stack traces in all web browsers and server",
  version: '0.1.3',
  name: 'peerlibrary:stacktrace',
  git: 'https://github.com/peerlibrary/meteor-stacktrace.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.export('StackTrace');

  api.add_files([
    'stacktrace/stacktrace.js',
    'export-stacktrace.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['peerlibrary:stacktrace', 'tinytest', 'test-helpers', 'underscore'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
