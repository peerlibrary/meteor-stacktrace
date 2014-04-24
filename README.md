stacktrace package
==================

Meteor package for getting stack traces in all web browsers and server. It packages
[stacktrace.js](https://github.com/stacktracejs/stacktrace.js).

Adding this package to your [Meteor](http://www.meteor.com/) application adds `StackTrace` object into the global scope.
`StackTrace` object has two functions, `printStackTrace` as defined by stacktrace.js, and `getCaller` which returns a
line in stack trace corresponding to the current caller location in the code, by default. You can modify `skip` argument
 to decide which entry in the stack trace should be returned.
