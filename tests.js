Tinytest.add('stacktrace', function (test) {
  var isDefined = false;
  try {
    StackTrace;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "StackTrace is not defined");
  test.isTrue(Package['peerlibrary:stacktrace'].StackTrace, "Package.peerlibrary:stacktrace.StackTrace is not defined");

  test.isTrue(_.isArray(StackTrace.printStackTrace()));

  test.isTrue(StackTrace.getCaller());
});
