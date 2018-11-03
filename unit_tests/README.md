Unit Tests
========================================================

> Testing the smallest testable individual parts of the source code

There are many different frameworks and tools. A popular combination (which I used previously) is:

- **[Mocha](https://mochajs.org/)** for running the tests
- **[Chai](https://www.chaijs.com/)** or the built in **[assert](https://nodejs.org/api/assert.html)**
- **[Sinon](https://sinonjs.org/)** for test spies, stubs and mocks
- **[Istanbul](https://istanbul.js.org/)** for calculating code coverage

## Mocha

### Installation

Install as a dev dependency:

```
npm install --save-dev mocha
```

When someone later runs `npm install --dev` all the dev dependencies are installed as well.

Make a test folder with \*.js files in it.

```
mkdir test
$EDITOR test/test.js # or open with your favorite editor
```

Add some lines to your package.json file:

```
"scripts": {
  "test": "mocha"
}
```

Now you can run the tests defined in your test folder with:

```
npm test
```

### Assertion libraries

Assertion libraries are responsible for actually doing the validation of your test. Depending on which dialect you like the most you can choose one you like. For now we will continue with [Chai](https://www.chaijs.com/)

### Test structure

- One test file per JavaScript file
- One `describe()` function describing the file
- One or more `describe()` functions describing the functions in the file
- One or more `it()` functions per `describe()` to test the different cases of the function that is being tested
- If testing a function with a callback use the `done()` callback function
- Optionally `before()` and `beforeEach()` can be used to run some code before each or all tests
- Optionally `after()` and `afterEach()` can be used to run some code after each or all tests

#### Only and skip

`only` and `skip` can be put after a `describe` or `it` statement and will only run this test or will run all tests except this one.

## Sinon

### Stub

> A stub is a function with pregenerated behavior replacing the call to the actual function

- Use when you want to control the return of a function to force a test down to a specific path
- Prevent from actually calling some function that will trigger undesired behavior. For example that will call some external service.

### Mock

> Fake methods with preprogrammed behavior and preprogrammed expectations. 

- Using `expects(<method_name>).once()` you can define that you expect a method to be called once.
- Using `withExactArgs()` you can define the arguments with which you expect the function to be called.
- Using `mock.verify()` you can chweck if all the expectations are met.

## Istanbul

> A test coverage framework

```
npm install --save-dev nyc
```

In your package.json file add `nyc` before `mocha`:

```
{
  "scripts": {
    "test": "nyc mocha"
  }
}
```

https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/

https://stackoverflow.com/questions/16633246/code-coverage-with-mocha#16634823