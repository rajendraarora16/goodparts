var read = require('../read.js');

module.exports = {
  'valid-jsdoc': {
    fail: [
      read('./valid-jsdoc.fail')
    ],
    pass: [
      read('./valid-jsdoc.pass')
    ]
  },

  'no-irregular-whitespace': {
    fail: [
      read('./no-irregular-whitespace.fail')
    ]
  },

  'no-func-assign': {
    fail: [
      'function foo () {}; foo = 1;'
    ]
  },

  "no-extra-boolean-cast": {
    fail: [
      '!!!foo',
      'Boolean(!!foo)',
      'if (!!foo) {console.log(foo);}'
    ]
  },

  "no-empty": {
    fail: [
      'if (true) {}',
      'while (1) {}',
      'for (var i = 0; i < 2; i++) {}'
    ]
  },

  "no-duplicate-case": {
    fail: [
      read('./no-duplicate-case.fail')
    ]
  },

  "no-dupe-args": {
    fail: [
      'function (a, a) {};'
    ]
  },

  "no-control-regex": {
    fail: [
      'var x = /\x1f/',
      'var x = new RegExp("/\x1f/")'
    ]
  },

  "no-constant-condition": {
    fail: [
      'while (1) {}'
    ]
  },

  "no-cond-assign": {
    fail: [
      'if (foo = 1) { foo++; }'
    ]
  },
  'no-console': { fail: ['console.log("not allowed")'] },
  'no-debugger': { fail: ['debugger;'] },
  'no-dupe-keys': { fail: ['var x = {a:1, a: "repeat"'] },
  'no-empty-character-class': { fail: ['/^abc[]/.test("abcdefg");'] },
  'no-ex-assign': { fail: ['try { var x; } catch (e) { e = 10; }'] },
  'no-extra-parens': null,
  'no-extra-semi': { fail: ['var x;;'] },
  'no-inner-declarations': { fail: [
    'if (test) {function func () { return; }}',
    'if (test) { var x; }'
  ] },
  'no-invalid-regexp': { fail: ['RegExp(\'[\')']},
  'no-obj-calls': { fail: ['var math = Math();'] },
  'no-prototype-builtins': null,
  'no-sparse-arrays': { fail: ['[1, ,3]'] },
  'no-unexpected-multiline': { fail: ['var foo = bar\n(1 || 2).baz();'] },
  'no-unsafe-finally': { fail: [read('no-unsafe-finally.fail')] },
  'use-isnan': { fail: ['if (NaN == x) { x = 0; }'] },
  'valid-typeof': { fail: ['var x; if (typeof x == "jack") { x = "OMG"} '] }
};
