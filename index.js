#!/usr/bin/env node



// references:
// https://bretkikehara.wordpress.com/2013/05/02/nodejs-creating-your-first-global-module/


require('colors')

const express = require('express')
const serveIndex = require('serve-index')
const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2).reduce((acc, arg) => {

	let [k, v] = arg.split('=')
	acc[k] = v === undefined ? true : /true|false/.test(v) ? v === 'true' : /\d+/.test(v) ? Number(v) : v
	return acc

}, {})

let [port = 8000] = process.argv.slice(2).filter(v => /\d+/.test(v)).map(parseFloat)
let [dir = '.'] = process.argv.slice(2).filter(v => /\.|\//.test(v))

dir = path.resolve(process.cwd(), dir)

if (!fs.existsSync(dir)) {

	console.log(`${dir.red} is not a valid folder`)
	process.exit()

}

console.log('quick-static:')

	

let app = express()

app.use('/', express.static(dir), serveIndex(dir, {'icons': true}))

function tryServer() {

	app.listen(port, () => {

		let localhost = `http://localhost:${port}`

		console.log(`    serving ${dir.blue}`)
		console.log(`    over ${localhost.red}`)

	}).on('error', e => {

		if (e.code === 'EADDRINUSE') {

			if (args.auto) {
				
				console.log(`    (auto) the port ${port} is already used...`)
				
				port++

				if (port < 65536)
					tryServer()

			} else {

				console.log(`    oups! the port ${port} is already in use!`.red)

			}

		} else {

			console.log(e)

		}

	})
	
}

tryServer()


