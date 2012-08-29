var casper = require("casper").create({
  logLevel: "debug"
});

casper.start("http://speak.ignitebaltimore.com", function() {
  this.test.assertTitle("New Ignite Speaking Proposal", "title correct");
  this.fill("form#new_proposal", {
    "proposal[speaker_name]": "Jane Smith"
  },true);
});

casper.then(function() {
  this.test.assertUrlMatch(/http:\/\/speak.ignitebaltimore.com\/proposals/, "loaded error page");
  this.test.assertEval((function() {
      return __utils__.exists(".alert-error");
  }), "displays an error message");
});

casper.run(function() {
  this.test.renderResults(true);
});

// you can run echo $? to see the exit code of this test; great for a CI suite!
