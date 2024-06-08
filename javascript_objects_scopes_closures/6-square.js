#!/usr/bin/node
module.exports = class Square extends require('./5-square') {
  charPrint(c) {
    const char = (typeof c === 'string' && c.length === 1) ? c : 'X';
    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
};
