NodeJS
========================================================

> Run-time environment used for server side JavaScript

[NodeJS](https://nodejs.org/en/)

- Initial release 2009
- Is asynchronous (!)

`npm`
========================================================

> Package manager for JavaScript

[npm](https://www.npmjs.com/)

- Command line client
- Online database of packages

## Create new project

```
npm init
```

Instal a new package that you can call in your javascript file using `require`

```
npm install --save express
```

`express`
========================================================

> The default web application framework for NodeJS. 

[Express](https://expressjs.com/)

- Minimalistic with many optional plugins

## Hello, World

```
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

- `require` includes the express package
- Create an `app` instance by invoking `express()`
- `app.get('/'...` what happens if you go to the root of the page
- `app.listen(...` creates a server that lsitens to a specific port

Start the server by running 

```
node server.js
```
and go to `localhost:3000` in your browser


