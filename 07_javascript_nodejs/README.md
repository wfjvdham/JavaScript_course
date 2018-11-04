[NodeJS](https://nodejs.org/en/)
========================================================

> Run-time environment used for server side JavaScript

- Initial release 2009
- Is asynchronous (!)

[`npm`](https://www.npmjs.com/)
========================================================

> Package manager for JavaScript

- Command line client
- On line database of packages

[`nvm`](https://github.com/creationix/nvm)
========================================================

> Node Version Manager is a useful package if you need different versions of node for different projects

To install the latest version:

```
nvm install node
```

To use a specific version:

```
nvm use node
```

To see all the versions installed:

```
nvm ls
```

## Create new project

```
npm init
```

Install a new package that you can call in your JavaScript file using `require`

```
npm install --save express
```

[`express`](https://expressjs.com/)
========================================================

> The default web application framework for NodeJS. 

- Minimalistic with many optional plug-ins

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
- `app.listen(...` creates a server that listens to a specific port

Start the server by running 

```
node server.js
```
and go to `localhost:3000` in your browser

continue the tutorial [here](https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b)

Using separate files
========================================================

When your project starts to grow it is wise to put your code in separate files. These files can be used by other files using the `require()` function. The require functions imports the `exports` object of that file. So if you want to use functions from that file you have to assign them to the `exports` object.