#!/usr/bin/node
let nm = 0;
exports.logMe = function (item) {
  console.log(`${nm}: ${item}`);
  nm += 1;
};
