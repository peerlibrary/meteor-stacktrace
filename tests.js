Tinytest.add('stacktrace - definition', function (test) {
  var isDefined = false;
  try {
    StackTrace;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "StackTrace is not defined");
  test.isTrue(Package['peerlibrary:stacktrace'].StackTrace, "Package.peerlibrary:stacktrace.StackTrace is not defined");
});

Tinytest.addAsync('stacktrace - stackframes', function (test, onComplete) {
  StackTrace.get().then(function (stackframes) {
    test.isTrue(_.isArray(stackframes));
    onComplete();
  }).catch(function (error) {
    test.fail(error);
    onComplete();
  });
});

Tinytest.addAsync('stacktrace - get caller', function callerNameTest(test, onComplete) {
  StackTrace.getCaller().then(function (caller) {
    test.isTrue(caller);
    test.include(caller, 'callerNameTest');
    onComplete();
  }).catch(function (error) {
    test.fail(error);
    onComplete();
  });
});
