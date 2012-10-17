var assert = require('assert')
  , replace = require('./index')

assert.equal(replace("{id:\033[1;32m'1'}"), "{id:'1'}")
