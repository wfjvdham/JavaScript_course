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

Callback
========================================================

> Some executable code that is passed to a function as a argument and that is expected to run after the function is finished

```
$('button').click(function(){
  console.log("One");
  $('.firstChild').show(function(){
    console.log("Two");
    $('.childofChild').show();
  });
  console.log("Three");
});
//“One”, “Three”, “Two” 
```

## Callback hell

When some functions are required to run asynchronous it is possible to nest a lot of callbacks. However, this becomes quickly unreadable:

```
var p_client = new Db('integration_tests_20', new Server("127.0.0.1", 27017, {}), {'pk':CustomPKFactory});
p_client.open(function(err, p_client) {
    p_client.dropDatabase(function(err, done) {
        p_client.createCollection('test_custom_key', function(err, collection) {
            collection.insert({'a':1}, function(err, docs) {
                collection.find({'_id':new ObjectID("aaaaaaaaaaaa")}, function(err, cursor) {
                    cursor.toArray(function(err, items) {
                        test.assertEquals(1, items.length);

                        // Let's close the db
                        p_client.close();
                    });
                });
            });
        });
    });
});
```

When you encounter this problem you have some solutions:

1. Name your callback functions and declare them elsewhere.
1. Put some code in a module and import the module.
1. Use a library like [async](caolan.github.io/async/)
1. Use [Promises](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)

**Note** starting from ES7 Promises can be combined with the `async` and `await` keywords 

### Promises

Good basic explanation about promises can be found [here](https://scotch.io/tutorials/javascript-promises-for-dummies)

A promise is an object that can have three states:

1. **pending:** Initial Case where promise instantiated.
1. **fulfilled:** Success Case which means promise resolved.
1. **rejected:** Failure Case which means promise rejected.

Using seperate files
========================================================

When your project starts to grow it is wise to put your code in separate files. These files can be used by other files using the `require()` function. The require functions imports the `exports` object of that file. So if you want to use functions from that file you have to assign them to the `exports` object.