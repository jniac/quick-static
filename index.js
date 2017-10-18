#!/usr/bin/env node

const express = require('express')
const serveIndex = require('serve-index')
const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2).reduce((acc, arg) => {

    let [k, v = true] = arg.split('=')
    acc[k] = v
    return acc

}, {})

let [port = 8000] = process.argv.slice(2).filter(v => /\d+/.test(v)).map(parseFloat)
let [dir = __dirname] = process.argv.slice(2).filter(v => /\.|\//.test(v)).map(v => path.join(__dirname, v))

if (!fs.existsSync(dir)) {

	console.log(`${dir} is not a valid folder`)
	process.exit()

}
	

let app = express()

// console.log(process.argv)
// console.log(args)
// console.log(dir)

app.use('/', express.static(dir), serveIndex(dir, {'icons': true}))

app.listen(port, () => {

	console.log(`serving ${dir} over http://localhost:${port}`)

})

