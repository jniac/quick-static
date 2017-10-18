#!/usr/bin/env node

const express = require('express')
const serveIndex = require('serve-index')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const args = process.argv.slice(2).reduce((acc, arg) => {

    let [k, v = true] = arg.split('=')
    acc[k] = v
    return acc

}, {})

let [port = 8000] = process.argv.slice(2).filter(v => /\d+/.test(v)).map(parseFloat)
let [dir = '.'] = process.argv.slice(2).filter(v => /\.|\//.test(v))

dir = path.join(process.cwd(), dir)

if (!fs.existsSync(dir)) {

	console.log(`${chalk.red(dir)} is not a valid folder`)
	process.exit()

}
	

let app = express()

app.use('/', express.static(dir), serveIndex(dir, {'icons': true}))

app.listen(port, () => {

	let localhost = `http://localhost:${port}`

	console.log('quick-static:')
	console.log(`    serving ${chalk.blue(dir)}`)
	console.log(`    over ${chalk.red(localhost)}`)

}).on('error', e => {

	if (e.code === 'EADDRINUSE') {

		console.log(chalk.red(`oups! the port ${port} is already in use!`))

	} else {

		console.log(e)

	}

})

