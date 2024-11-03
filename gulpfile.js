const gulp = require("gulp");
var browserSync = require("browser-sync").create();
var { spawn } = require('child_process');

// https://www.youtube.com/watch?v=1rw9MfIleEg
// gulp.task - define tasks
// gulp.src - point to files to use
// gulp.dest - point to utput folder
// gulp.watch - folders and files to watch for changes
// .pipe()
// done();

gulp.task("watch", () => {
  browserSync.init({
    server: "./", // Change this to your project's base directory if needed
  });

  gulp
    .watch(["./*.html", "./styles/*.css", "./scripts/*.ts", "./scripts/*.js"])
    .on("change", () => {
      browserSync.reload();
    });
});

gulp.task('ls', function () {
  const executeLS = spawn('ls');
  executeLS.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  return executeLS;
});

gulp.task("default", gulp.series("watch", "ls"));
