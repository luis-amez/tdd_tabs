(function() {
  "use strict";

  desc("Default build");
  task("default", [ "version" ], function() {
    console.log("Hello, I'm the default task.");
    console.log("\n\nBUILD OK!");
  });
  
  desc("Pure ridiculosity");
  task("gooble", function() {
    console.log("Gooble, gooble!");
  });
  
  desc("Check Node version")
  task("version", function() {
    console.log("Checking Node version: .");
    
    const packageJson = require("./package.json");
    const expectedVersion = "v" + packageJson.engines.node;
    const actualVersion = process.version;

    if (actualVersion !== expectedVersion) {
      fail(`Incorrect Node version: expected ${expectedVersion}, but was ${actualVersion}.`);
    }
  });
}());