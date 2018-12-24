import Person from "./person.js";

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    let basicInfo = `${super.introduce()} I am a Teacher.`;
    if (this.klasses) {
      let klassseNumber = this.klasses.map(klass => klass.number);
      return `${basicInfo} I teach Class ${klassseNumber.join(', ')}.`;
    } else {
      return `${basicInfo} I teach No Class.`;
    }
  }

  isTeaching(student) {
    return this.klasses.some(klass => klass.isIn(student));
  }

  announceAssignLeader(student) {
    console.log(`I am ${this.name}. I know ${student.name} become Leader of ${student.klass.getDisplayName()}.`);
  }

  announceAppendMember(student) {
    console.log(`I am ${this.name}. I know ${student.name} has joined ${student.klass.getDisplayName()}.`);
  }
}

export default Teacher;
