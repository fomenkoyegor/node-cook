const benchmark = require("benchmark");
const slow = require("./slow");
const loop = require("./loop");
const suite = new benchmark.Suite();
const maxNumber = 100; // number to pass through to
// sumOfSquares();
suite.add("slow", function () {
  slow(maxNumber);
});
suite.add("loop", function () {
  loop(maxNumber);
});
suite.on("complete", printResults);
suite.run();
function printResults() {
  this.forEach((benchmark) => {
    console.log(benchmark.toString());
  });
  console.log("Fastest implementation is", this.filter("fastest")[0].name);
}

// node benchmark.js
// slow x 74,517 ops/sec ±6.64% (73 runs sampled)
// slow x 247,958 ops/sec ±1.17% (90 runs sampled)
// loop x 7,337,014 ops/sec ±0.86% (94 runs sampled)
// Fastest implementation is loop

//npx 0x benchmark.js
