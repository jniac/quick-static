serve static files
===

Serve static files from Command Line Interface
Very small wrapper around [express](https://github.com/expressjs/express) & [serve-index](https://github.com/expressjs/serve-index)

usage
---
```js
$ npm i quick-static -g

$ quick-static 
// will serve the current directory on http://localhost:8000

$ quick-static ./public 12345 
// will serve the folder 'public' from the current directory on http://localhost:12345

$ quic-static /an/absolute/path 6666 
// will serve a absolute folder on http://localhost:6666
``


