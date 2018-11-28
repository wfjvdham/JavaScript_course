'use strict'

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.fullName = first + ' ' + last;
  }

  bio() {
    let result = 'I am ' + this.name.first + '. I am a ' + this.male + ' of ' + this.age + ' years old. '
    result += 'My hobbies are: ';
    result += this.interests.reduce(function(accumulator, currentValue, currentIndex, array) {
      if (currentIndex + 1 == array.length) {
        return accumulator + ' and ' + currentValue + '.';
      } else {
        return accumulator + ', ' + currentValue;
      }
    })
    console.log(result);
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };
}

let p = new Person('Wim', 'van der Ham', 32, 'male', ['dancing', 'board games', 'JavaScript']);
p.bio();
console.log(Object.getPrototypeOf(p));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(p)));

Person.prototype.farewell = function() {
  console.log('Bye!')
};

p.farewell();

console.log(p.fullName);

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }

  greeting() {
    console.log(`Hello in a formal way! I'm ${this.name.first}`);
  }
}

let t = new Teacher('Bas', 'de Boer', 31, 'male', ['biking', 'hiking', 'JavaScript'], 'programming', 'high');
p.greeting();
t.greeting();