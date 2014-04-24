StackTrace = {
  printStackTrace: printStackTrace,
  getCurrentLocation: function (skip) {
    skip = skip || 2;
    var lines = printStackTrace();
    var i = 0;
    for (; skip > 0 && i < lines.length; skip--) {
      var thisFile = (lines[i].match(/@(.*\/.+\.(coffee|js)).*$/))[1];
      for (i++; i < lines.length; i++) {
        if (lines[i].indexOf(thisFile) === -1) {
          break;
        }
      }
    }
    return lines[i] || '<code_minimized>';
  }
};
