import Person from "./person.js";

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
    this.basicInfo = `${super.introduce()} I am a Teacher.`;
  }

  introduce() {
    if (this.klass) {
      return `${this.basicInfo} I teach Class ${this.klass}.`;
    } else {
      return `${this.basicInfo} I teach No Class.`
    }
  }
}

export default Teacher;
