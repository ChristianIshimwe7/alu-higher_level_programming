#!/usr/bin/node
exports.converter = function (base) {
  return (nm = 0) => nm.toString(base);
};
