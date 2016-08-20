StackTrace = require('stacktrace-js');

StackTrace.getCaller = function (skip, options) {
  skip = skip || 1;
  return StackTrace.get(options).then(function (stackframes) {
    var i = 0;
    for (; skip > 0 && i < stackframes.length; skip--) {
      var thisFile = stackframes[i].fileName;
      for (i++; i < stackframes.length; i++) {
        if (stackframes[i].fileName !== thisFile) {
          break;
        }
      }
    }
    return stackframes[i] || null;
  });
};