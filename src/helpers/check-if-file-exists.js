const fs = require("fs");

async function anotherCheck() {
  console.log("another check");
}
async function justChecking() {
  console.log("justChecking");
  anotherCheck();
}

module.exports = { justChecking };
