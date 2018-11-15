Asynchronous
========================================================

For the following exercises we are going top use the `app.js` file present in this directory. In there the functions names A till H are defined. You can check how they look but you are not allowed to change them.

1. Use the return values of the functions to print in this order: `ABCD`
1. Try the same but use the [`async`](http://caolan.github.io/async/) package
1. Now use some other functions to print `EFCD`
1. Finally print `GHCD` using the `async` and `await` keywords. Note that `await` can not be used on the root level so you have to write an `async` function to run your script.

**Bonus** Give a wrong argument so that an error is thrown. See how the different answers handle errors