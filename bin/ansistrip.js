var through2 = require('through2')

var ansiStrip = require('../index.js')

function throughStrip(chunk, enc, callback) {
	enc = enc === 'buffer' ? undefined : enc

	this.push(ansiStrip(chunk.toString(enc)))

	callback()
}

process.stdin.pipe(through2(throughStrip)).pipe(process.stdout)