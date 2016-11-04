var fileA = require('./requiringModulesA.js');

console.log("Export Obj is: " + fileA);
console.log("Output of private fcn in file A is: " + fileA.inVokePrivateFcnInA());