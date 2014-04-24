Tinytest.add('meteor-stacktrace', function (test) {
  var isDefined = false;
  try {
    StackTrace;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "StackTrace is not defined");
  test.isTrue(Package.stacktrace.StackTrace, "Package.stacktrace.StackTrace is not defined");

  test.isTrue(_.isArray(StackTrace.printStackTrace()));

  test.isTrue(StackTrace.getCaller());
});
