(function() {
  "use strict";

  desc("Default build");
  task("default", function() {
    console.log("Hello, I'm the default task.");
    console.log("\n\nBUILD OK!");
  });

  desc("Pure ridiculosity");
  task("gooble", function() {
    console.log("Gooble, gooble!");
  });
}());