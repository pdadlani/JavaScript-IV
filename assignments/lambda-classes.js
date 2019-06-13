// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
  }
}


class Instructor extends Person {
  constructor(iAttributes) {
    super(iAttributes);
    this.speciality = iAttributes.speciality;
    this.favLanguage = iAttributes.favLanguage;
    this.catchPhrase = iAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(studentObj, subjectStr) {
    return `${studentObj.name} receives a perfect score on ${subjectStr}.`;
  }
  changeGrade(studentObj) {
    return studentObj.grade = studentObj.grade + Number(((Math.random() * 10) - 5).toFixed(2));
  }
}


class Student extends Person {
  constructor(sAttributes) {
    super(sAttributes);
    this.previousBackground = sAttributes.previousBackground;
    this.className = sAttributes.className;
    this.favSubjects = sAttributes.favSubjects;
    this.grade = sAttributes.grade;
  }
  listsSubjects() {
    return `${this.name} likes ${[...this.favSubjects].join(', ')}.`;
  }
  PRAssignments(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congratulations, ${this.name}! You graduated with a final score of ${this.grade}%!`
    } else {
      return `Unfortunately, ${this.name}, you need to revise your projects to bring your final grade above 70%.`;
    }
  }
}


class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}\'s code on ${subject}.`;
  }
}


//Objects for Person
const mom = new Person({
  name: 'Mom',
  age: 50,
  location: 'Sacramento'
});

const brother = new Person({
  name: 'Brother',
  age: 23,
  location: 'San Jose'
});


//Objects for Instructor
const fred = new Instructor({
  name: 'Fred',
  age: 37,
  location: 'Bedrock',
  speciality: 'Front-end',
  favLanguage: 'JavaScript',
  catchPhrase: `Don't forget the homies`
});

const josh = new Instructor({
  name: 'Josh',
  age: 35,
  location: 'Utah',
  speciality: 'Web Development',
  favLanguage: 'JavaScript',
  catchPhrase: `That's awesome!!!`
});


//Objects for Students
const pri = new Student({
  name: 'Pri',
  age: 21,
  location: 'San Francisco',
  previousBackground: 'Chemistry Teacher',
  className: 'WEB21',
  favSubjects: ['Chemistry', 'Web Development', 'Math'],
  grade: 92,
});

const sarah = new Student({
  name: 'Sarah',
  age: 26,
  location: 'Chicago',
  previousBackground: 'Mechanical Engineer',
  className: 'WEB18',
  favSubjects: ['Physics', 'Computer Science', 'Electrical Engineering'],
  grade: 55,
});

const ryan = new Student({
  name: 'Ryan',
  age: 45,
  location: 'Bay Area',
  previousBackground: 'Military',
  className: 'WEB21',
  favSubjects: ['Science', 'Full-stack'],
  grade: 96,
});


//Objects for ProjectManager
const marguel = new ProjectManager({
  name: 'Marguel',
  age: 'Maybe 26',
  location: 'California',
  specialty: 'React',
  favLanguage: 'JavaScript, Python, Elm etc.',
  catchPhrase: "Practice Flex Zombies !!!",
  gradClassName: 'WEBPT2',
  favInstructor: 'Me?',
});

const brandon = new ProjectManager({
  name: 'Brandon',
  age: '34',
  location: 'Maine',
  specialty: 'Redux',
  favLanguage: 'JavaScript, C++, Python.',
  catchPhrase: "You shall not pass!",
  gradClassName: 'WEB18',
  favInstructor: 'Professor Lambda',
});

const mary = new ProjectManager({
  name: 'Mary',
  age: '24',
  location: 'New York',
  specialty: 'Express and Node.js',
  favLanguage: 'Javascript',
  catchPhrase: "That looks AWESOME",
  gradClassName: 'WEB18',
  favInstructor: 'Josh Knell',
});

const christian = new ProjectManager({
  name: 'Christian',
  age: '32',
  location: 'Seattle, WA',
  specialty: 'Data Structures & Algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: 'Dont forget your daily commit.',
  gradClassName: 'WEB18',
  favInstructor: 'Every Instructor in Lambda',
});


// //Tests to see code works as expected
console.log(brother.name); //Brother
console.log(mom.age); //50
console.log(brother.speak()); //Hello, my name is Brother, and I am from San Jose.
console.log(fred.speciality); //Front-end
console.log(josh.favLanguage); //JavaScript
console.log(josh.demo('HTML')); //Today we are learning about HTML.
console.log(sarah.previousBackground); //Mechanical Engineer
console.log(ryan.className); //WEB21
console.log(pri.listsSubjects()); //Pri likes Chemistry, Web Development, Math.
console.log(sarah.PRAssignments('Advanced CSS')); //Sarah has submitted a PR for Advanced CSS.
console.log(ryan.sprintChallenge('JavaScript Fundamentals')); //Ryan has begun sprint challenge on JavaScript Fundamentals.
console.log(marguel.gradClassName); //WEBPT2
console.log(brandon.favInstructor); //Professor Lambda
console.log(mary.standUp('web_21_mary')); //Mary announces to web_21_mary, @channel standy times!
console.log(christian.debugsCode(ryan, 'prototypes')); //Christian debugs Ryan's code on prototypes.
console.log(marguel.grade(pri, 'OOP')); //Pri receives a perfect score on OOP.
console.log(mary.catchPhrase); //That looks AWESOME
console.log(pri); //entire object, with grade = 92
console.log(fred.changeGrade(pri)); //new changed grade
console.log(pri); //entire object, with grade = new changed grade from line above
console.log(pri.graduate()); //Congratulations, Pri! You graduated with a final score of **NEW GRADE**%!
console.log(sarah.graduate()); //Unfortunately, Sarah, you need to revise your projects to bring your final grade above 70%.