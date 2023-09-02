const gulp = require("gulp");
var browserSync = require("browser-sync").create();

// TOP LEVEL GULP FUNCTIONS
// https://www.youtube.com/watch?v=1rw9MfIleEg
// gulp.task - define tasks
// gulp.src - point to files to use
// gulp.dest - point to utput folder
// gulp.watch - folders and files to watch for changes
// .pipe()
// done();
// .watch(["style.css"]).on("change", console.log("RELOAD AFTER CSS CHANGE..."));

// Define a task to watch CSS files and refresh the browser
gulp.task("watch", () => {
  // Initialize BrowserSync with your project's base directory
  browserSync.init({
    server: "./", // Change this to your project's base directory if needed
  });

  // Watch CSS files and trigger a reload on change
  gulp.watch("./*.css").on("change", () => {
    // Reload the browser
    browserSync.reload();
  });
});

// Default task (run 'gulp' in the terminal to start watching)
gulp.task("default", gulp.series("watch"));
