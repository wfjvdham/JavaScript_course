Asynchronous
========================================================

> By default functions are not blocking, meaning that the process will continue even if the function did not return a value yet.

- **ECMA 5** - Callbacks
- **ECMA 6** - Promises
- **ECMA 7** - `async` and `await`

Callbacks
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

Promises
========================================================

> Object that will have a result later.

Good basic explanation about promises can be found [here](https://scotch.io/tutorials/javascript-promises-for-dummies)

## States

A promise is an object that can have three states:

1. **pending:** Initial Case where promise instantiated.
1. **fulfilled:** Success Case which means promise resolved.
1. **rejected:** Failure Case which means promise rejected.

`async` and `await`
========================================================

> Keywords that make working with Promises easier

## `async`

```
async function f() {
  return 1;
}
```

Putting `async` before a function ensures that the function will return a Promise. If no promise is defined in the function the return value will be wrapped by a Promise.

## `await`

```
// works only inside async functions
let value = await promise;
```

Waits until the promise resolve before it continues. Is similar to the `.then()` function

**Note** `await` does not work in the top level code, only in async functions.

Normal `try..catch` can be used in combination with `async` and `await` and usually looks more convenient. 