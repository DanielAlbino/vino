const fs = require("fs");

var uglifycss = require("uglifycss");

var uglified = uglifycss.processFiles(["./dist/vino/css/vino.min.css"], {
  maxLineLen: 500,
  expandVars: true,
});

fs.writeFile("./dist/vino/css/vino.min.css", uglified, (err) => {
  if (err) throw err;
});
