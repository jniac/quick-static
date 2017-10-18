#!/usr/bin/env node



// references:
// https://bretkikehara.wordpress.com/2013/05/02/nodejs-creating-your-first-global-module/



const express = require('express')
const serveIndex = require('serve-index')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

let [port = 8000] = process.argv.slice(2).filter(v => /\d+/.test(v)).map(parseFloat)
let [dir = '.'] = process.argv.slice(2).filter(v => /\.|\//.test(v))

dir = path.resolve(process.cwd(), dir)

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

