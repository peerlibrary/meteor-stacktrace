stacktrace package
==================

Meteor package for getting uniform stack traces in all web browsers and server. It packages
[stacktrace.js](https://github.com/stacktracejs/stacktrace.js).

Adding this package to your [Meteor](http://www.meteor.com/) application adds `StackTrace` object into the global scope.

In addition to official `StackTrace` functions, there is also a `getCaller` function which returns a
stack frame corresponding to the current caller location in the code, by default.
You can modify `skip` argument to decide which entry in the stack trace should be returned.

Both client and server side.

Installation
------------

```
meteor add peerlibrary:stacktrace
```
