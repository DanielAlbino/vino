const { src, dest } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));

compileSass.compiler = require("node-sass");

const bundleSass = () => {
  return src("./sass/*.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(dest("./dist/vino/css/"));
};

exports.bundleSass = bundleSass;
