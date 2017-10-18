serve static files
===

Serve static files from Command Line Interface
Very small wrapper around [express](https://github.com/expressjs/express) & [serve-index](https://github.com/expressjs/serve-index)

usage
---
	$ npm i quick-static -g
	
	$ quick-static 
	<span style="color:#ccc">// serve the current directory on http://localhost:8000</span>
	
	$ quick-static ./public 12345 
	<span style="color:#ccc">// serve the folder 'public' from the current directory on http://localhost:12345</span>
	
	$ quic-static /an/absolute/path 6666 
	<span style="color:#ccc">// serve a absolute folder on http://localhost:6666</span>


