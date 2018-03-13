(function() {
  "use strict";

  const EXPECTED_NODE_VERSION = "v8.5.0";

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

    const actualVersion = process.version;
    if (actualVersion !== EXPECTED_NODE_VERSION) {
      fail(`Incorrect Node version: expected ${EXPECTED_NODE_VERSION}, but was ${actualVersion}.`);
    }
  });
}());