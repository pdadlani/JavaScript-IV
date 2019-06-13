// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  };
  speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
  };
};


class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.speciality;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  };
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  };
  grade(studentObj, subjectStr) {
    `${studentObj.name} receives a perfect score on ${subjectStr}.`;
  };
};


class Students extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  };
  listsSubjects() {
    return `${this.name} likes ${[...this.favSubjects]}.`;
  };
  PRAssignments(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  };
  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  };
};


class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  };
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  };
  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}\'s code on ${subject}.`;
  }
}