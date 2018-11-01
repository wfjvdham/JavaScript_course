
1. Make an `person` object that contains the following attributes and functions:
  - `name` array with a first and last name
  - `age`  
  - `gender`
  - `interests` array with hobbies
  - `bio` a function that prints all the information of the person as a nicely readable string and correctly formatted
  - `greeting` a function that let the person introduce himself telling you his name
1. Replace the array in `name` by an object containing `first` and `last` and make sure your functions keep on working
1. Replace your `person` object by a constructor function and create two persons with different parameters.
1. Check what the prototype is of a person you created. ANd what is the prototype of the prototype?
1. Add a new function tot the Person prototype like this: 

```
Person.prototype.farewell = function() {
  // print something
};
```

1. See if your persons can use this function now.
1. Add a new attribute `fullName` that combines the first and last name on the Person prototype.
1. See if you can access the attribute in your person objects.
1. Make some Teachers that inherit from the person class.
1. 