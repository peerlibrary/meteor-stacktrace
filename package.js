Package.describe({
  summary: "Meteor package for getting uniform stack traces in all web browsers and server",
  version: '0.1.3',
  name: 'mrt:stacktrace',
  git: 'https://github.com/peerlibrary/meteor-stacktrace.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:stacktrace@0.1.3');
});
