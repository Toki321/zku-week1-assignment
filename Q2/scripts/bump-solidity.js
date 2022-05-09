const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.4');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

const fs2 = require("fs");
const solidityRegex2 = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex2 = /contract Verifier/

let content2 = fs2.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped2 = content2.replace(solidityRegex2, 'pragma solidity ^0.8.4');
bumped2 = bumped2.replace(verifierRegex2, 'contract Multiplier3Verifier');

fs2.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped2);



const fs3 = require("fs");
const solidityRegex3 = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex3 = /contract Verifier/

let content3 = fs3.readFileSync("./contracts/_plonkMultiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped3 = content3.replace(solidityRegex3, 'pragma solidity ^0.8.4');
bumped3 = bumped3.replace(verifierRegex3, 'contract _plonkMultiplier3Verifier');

fs3.writeFileSync("./contracts/_plonkMultiplier3Verifier.sol", bumped3);