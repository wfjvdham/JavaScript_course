Object-oriented programming
========================================================

> Objects are just another form of code reuse

- **Attribute** a variable in an object
- **Method** a function in an object
- `this` is a keyword used inside the object to reference itself

## Concepts

- **Composition** *has-a* relationship
- **Inheritance** *is-type-of* relationship, using the `prototype` it can use the functions from other objects
- **Delegation** attributes and methods are accessible by a child object
- **Polymorphism** when multiple object types implement the same functionality

## Constructor function

- Function that takes some arguments and set them to the attributes of `this`
- Starts with a capital letter by convention
- Does not return anything

```
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

Initiating a instance using this function:

```
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

Getting the parent class of an object:

```
Object.getPrototypeOf(new Person())

Person.__proto__
```

## Inheritance

A teacher is a type of person so when constructing a teacher you call the `Person` constructor and inheritance the attributes **but not the methods of `Person`**

```
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

To get the methods as well use this:

```
Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
```

This way is not clean at all. New functionality is described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) but not yet supported by IE...

### The clean way (not supported by IE)

```
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

## Getters and Setters

Some of the advantages of using getters and setters are:
 - Validation can be added later
 - Internal representation can be different than external
 - Public interface should stay as constant as possible

To change or get the value of an attribute in a class you can use getters and setters. the keywords **get** and **set** are used and the original attribute has to be prefixed with `_`.

```
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```