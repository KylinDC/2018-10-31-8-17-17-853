import Person from "./person.js";

class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce() {
    let basicInfo = `${super.introduce()} I am a Student.`;
    if (this.klass.leader === this) {
      return `${basicInfo} I am Leader of ${this.klass.getDisplayName()}.`;
    } else {
      return `${basicInfo} I am at ${this.klass.getDisplayName()}.`;
    }
  }
}

export default Student;
