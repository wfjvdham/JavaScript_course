'use strict'

function C() {
  return 'C';
}

function D(arg) {
  if (typeof arg == 'number') {
    return 'D'
  } else {
    throw 'arg is not a number';
  }
}

function A(callback) {
  setTimeout(function(){
    callback(null, 'A');
  }, 2000);  
}

function B(arg, callback) {
  setTimeout(function(){
    if (typeof arg == 'number') {
      callback(null, 'B')
    } else {
      callback('arg is not a number', null)
    }
  }, 1000);
}

function E() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve('E');
    }, 1500);  
  });
}

function F(arg) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      if (typeof arg == 'number') {
        resolve('F')
      } else {
        reject('arg is not a number')
      }
    }, 500);
  });
}

async function G() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve('E');
    }, 1500);  
  });
}

async function H(arg) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      if (typeof arg == 'number') {
        resolve('F')
      } else {
        reject('arg is not a number')
      }
    }, 500);
  });
}

//you are not allowed to change the functions above
//-------------------------------------------------

// Use the first 4 functions to print ABCD

let result;

// This does not work because JavaScript is asynchronous
A(function(err, result) {
  console.log(result);
})

B(1, function(err, result) {
  console.log(result);
})

result = C();
console.log(result);

result = D(1);
console.log(result);

// This does work but can lead to callback hell
A(function(err, result) {
  console.log(result);
  B(1, function(err, result) {
    console.log(result);
    result = C();
    console.log(result);
    result = D(1);
    console.log(result);
  })
})

// Now use the async package

let async = require('async');

async.waterfall([
  function(callback) {
    A(callback);
  },
  function(result, callback) {
    console.log(result);
    B(1, callback);
  }
], function (err, result) {
  console.log(result);
  result = C();
  console.log(result);
  result = D(1);
  console.log(result);
});

// Print EFCD

E()
  .then(function(result){
    console.log(result);
    return F(1)
  })
  .then(function(result) {
    console.log(result);
    result = C();
    console.log(result);
    result = D(1);
    console.log(result);
  });

// Print GHCD using the async and await keyword

async function run() {
  let value = await G();
  console.log(value);
  value = await H(1);
  console.log(value);
  result = C();
  console.log(result);
  result = D(1);
  console.log(result);
}
run()