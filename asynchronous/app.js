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
