import Person from "./person.js";

class Teacher extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce() {
    let basicInfo = `${super.introduce()} I am a Teacher.`;
    if (this.klass) {
      return `${basicInfo} I teach ${this.klass.getDisplayName()}.`
    } else {
      return `${basicInfo} I teach No Class.`
    }
  }
}

export default Teacher;
