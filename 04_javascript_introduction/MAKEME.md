JavaScript Exersices
========================================================

## Vriables and operators

1. Use `console.log()` to print some messages
1. Fix the next syntax error `console.log('I'm awesome');`
1. Declare a variable `x` and assign it a number. Print the number and the description in words
1. Declare a varibale `y` and assign it a string. Print the variable and a description of what it will be
1. Declare an array with your favourite animals. Use `push()` and `pop()` to remove and add some animals. Use `shift()` and `unshift()` to do the same.
1. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

## Arrays

1. Show in code if: you can store multiple types in an array? 
1. Find a way to make the next string more readable `let myString = "hello,this,is,a,difficult,to,read,sentence";`
1. Add `meerkat` to the next array between blowfish and capricorn `let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];`

## Functions

1. Create a function that takes 3 arguments and returns the sum of the these arguments.
1. Create a function named `colorCar` that receives a color, and prints out, 'a red car' for example.
1. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
1. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as `vehicleType("blue", 2)`
1. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
1. Change the function vehicle to use the list of the previous question. So that `vehicle("green", 3)` prints "a green bike".
1. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.) The output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
1. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

## Debugging

1. try to debug the program found [here](https://github.com/HackYourFuture/debugging/blob/master/Debugging2/homework/train-stations-complete.js)

## `map` & `filter`

1. Write a program that doubles the odd numbers in an array and throws away the even number. Use a `for` loop.
1. Now write it using the `map` and `filter` funtions

```
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
```

1. Map the tasks to durations in hours.
1. Filter out everything that took less than two hours (i.e., remove from the collection)
1. Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should earn per hour) and sum it all up.