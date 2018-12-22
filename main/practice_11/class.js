class Class {
  constructor(number) {
    this.number = number;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
      if (this.assignLeaderListener) {
        this.assignLeaderListener.announceAssignLeader(student);
      }
    } else {
      console.log(`It is not one of us.`);
    }
  }

  appendMember(student) {
    student.klass = this;
    if (this.joinListener) {
      this.joinListener.announceAppendMember(student);
    }
  }

  isIn(student) {
    return student.klass === this ? true : false;
  }

  registerAssignLeaderListener(assignLeaderListener) {
    this.assignLeaderListener = assignLeaderListener;
  }

  registerJoinListener(joinListener) {
    this.joinListener = joinListener;
  }
}

export { Class };
