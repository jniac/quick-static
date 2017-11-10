# serve static files
Serve static files over http from Command Line Interface  

Very small wrapper around [express](https://github.com/expressjs/express) & [serve-index](https://github.com/expressjs/serve-index)  
Colored logs powered by [colors](https://www.npmjs.com/package/colors)  

For a more powerfull static server, able to compile and deliver pug & sass on the fly, see [super-quick-static](https://github.com/jniac/super-quick-static) [(@npm)](https://www.npmjs.com/package/super-quick-static)

### install
	$ npm i quick-static -g

### usage
	$ quick-static 
	// serve the current directory on http://localhost:8000
	
	$ quick-static ./public 12345 
	// serve the folder 'public' from the current directory on http://localhost:12345
	
	$ quick-static /an/absolute/path 6666 
	// serve a absolute folder on http://localhost:6666

	$ quick-static . 4000 auto
	// serve current directory on http://localhost:4000
	// if the port 4000 is not available, 
	// will search for the next available port

![screenshot](https://raw.githubusercontent.com/jniac/quick-static/master/public/img/screen-log-auto.png)




