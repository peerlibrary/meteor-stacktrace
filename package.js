Package.describe({
  summary: "Meteor package for getting uniform stack traces in all web browsers and server"
});

Package.on_use(function (api) {
  api.export('StackTrace');

  api.add_files([
    'stacktrace/stacktrace.js',
    'export-stacktrace.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['stacktrace', 'tinytest', 'test-helpers', 'underscore'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
