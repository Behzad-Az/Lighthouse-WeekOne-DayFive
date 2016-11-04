/*
*   Exports an object that contains a function that
*   invokes a private function inside this module.
*   Do not export the private function itself.
*/

function inVokePrivateFcn() {
  return privateFcn();
}

function privateFcn() {
  return "PRIVATE!";
}

//console.log(privateFcn);
module.exports.inVokePrivateFcnInA = inVokePrivateFcn;