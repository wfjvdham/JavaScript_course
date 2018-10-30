'use strict'

console.log("Hello!");

//console.log('I'm awesome');
console.log("I'm awesome");

let x = 5;
console.log("This is a five: " + x);

let y = "five";
console.log("This is a 5: " + y);

let favoriteAnimals = ["cow", "cat"];
console.log("array:" + favoriteAnimals);

favoriteAnimals.push("dog");
console.log("array:" + favoriteAnimals);

favoriteAnimals.pop();
console.log("array:" + favoriteAnimals);

favoriteAnimals.unshift("dog");
console.log("array:" + favoriteAnimals);

favoriteAnimals.shift();
console.log("array:" + favoriteAnimals);

function isSameType(var1, var2) {
    return typeof var1 === typeof var2;
};
console.log(isSameType(x, y));
console.log(isSameType(5, 6));

let multiTypeArray = ["five", 5];
console.log("array:" + multiTypeArray);

let myString = "hello,this,is,a,difficult,to,read,sentence";
//let result = myString.replace("\,", " ");
let result = myString.split(",").join(" ");
console.log(result);

let moreAnimals = ['blowfish', 'capricorn', 'giraffe'];
moreAnimals.splice(1, 0, 'meerkat');
console.log("array: " + moreAnimals);

function sumAll(var1, var2, var3) {
  return var1 + var2 + var3;
}
console.log(sumAll(1, 2, 3));

function colorCar(color) {
  return "a " + color + " car"
}
console.log(colorCar("red"));

function printAll(object) {
  let result = "";
  for(let key in object) {
    result += key + " " + object[key] + ", ";
  }
  return result.substring(0, result.length - 2);
}
let car = {
  color: "red",
  size: "big"
}
console.log(printAll(car));

function vehicleType(color, code) {
  let result = "a " + color + " ";
  if (code == 1) {
    result += "car";
  } else {
    result += "moterbike"; 
  }
  return result;
}
console.log(vehicleType("red", 2));

let vehicles = ["motorbike", "caravan", "bike"];
function vehicleType2(color, code) {
  let result = "a " + color + " " + vehicles[code - 1];
  return result;
}
console.log(vehicleType2("green", 3));

function ad() {
  let result = "Amazing Joe's Garage, we service ";
  for(let i = 0; i < vehicles.length; i++) {
      if (vehicles.length == i + 1) {
        result += "and ";
      }
    result += vehicles[i] + "s, ";
  }
  return result.substring(0, result.length - 2) + ".";
}
console.log(ad());

let numbersArray = [1, 2, 3, 4, 5];
function doubleOrNothing(inputArray) {
  let resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 == 1) {
      resultArray.push(inputArray[i] * 2);
    }
  }
  return resultArray;
}
console.log("value: " + doubleOrNothing(numbersArray));

function doubleOrNothing2(inputArray) {
    return inputArray.filter((number) => {
        return number % 2 == 1;
    }).map((number) => {
        return number * 2;
    });
}
console.log("value: " + doubleOrNothing2(numbersArray));

const monday = [
{
    name: 'Write a summary HTML/CSS',
    duration: 180
},
{
    name: 'Some web development',
    duration: 120
},
{
    name: 'Fix homework for class10',
    duration: 20
},
{
    name: 'Talk to a lot of people',
    duration: 200
}
];
const tuesday = [
{
    name: 'Keep writing summary',
    duration: 240
},
{
    name: 'Some more web development',
    duration: 180
},
{
    name: 'Staring out the window',
    duration: 10
},
{
    name: 'Talk to a lot of people',
    duration: 200
},
{
    name: 'Look at application assignments new students',
    duration: 40
}
];
const tasks = monday.concat(tuesday);
let result2 = tasks.map((task) => {
    task.duration = task.duration / 60;
    return task;
});
console.log(JSON.stringify(result2));

let result3 = result2.filter((task) => {
    return task.duration > 2;
});
console.log(JSON.stringify(result3));

let result4 = result3.map((task) => {
    return task.duration * 10;
});
console.log(JSON.stringify(result4));