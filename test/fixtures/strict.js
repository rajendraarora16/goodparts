var read = require('../read.js');

module.exports = {
  'strict': {
    fail: ['function foo () {}'],
    pass: ['function foo () {\'use strict\';}']
  }
};
