import Person from "./person.js";

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
    this.basicInfo = `${super.introduce()} I am a Teacher.`;
  }

  introduce() {
    if (this.klass) {
      return `${this.basicInfo} I teach ${this.klass.getDisplayName()}.`;
    } else {
      return `${this.basicInfo} I teach No Class.`
    }
  }

  introduceWith(student) {
    if (student.klass.number === this.klass.number) {
      return `${this.basicInfo} I teach ${student.name}.`
    } else {
      return `${this.basicInfo} I don't teach ${student.name}.`
    }
  }
}

export default Teacher;
