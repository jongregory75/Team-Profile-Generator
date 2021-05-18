const Employee = require("./Employee");

class Intern extends Employee {
  constructor(empName, id, email, role, schoolName) {
    console.log("INTERN CONSTRUCTOR");
    super(empName, id, email, role);
    this.schoolName = schoolName;

    if (!empName) {
      throw new Error("Intern name is empty");
    } else if (!id) {
      throw new Error("Intern id is empty");
    } else if (!email) {
      throw new Error("Intern email is empty");
    } else if (!role) {
      throw new Error("Intern role is empty");
    } else if (!schoolName) {
      throw new Error("Intern school is empty");
    }
  }

  getRole() {
    return `Intern`;
  }
  getSchoolName() {
    return this.schoolName;
  }
}

module.exports = Intern;
