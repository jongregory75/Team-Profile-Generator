const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(empName, id, email, role, gitHubName) {
    console.log("ENGINEER CONSTRUCTOR");
    super(empName, id, email, role);
    this.gitHubName = gitHubName;

    if (!empName) {
      throw new Error("Engineer name is empty");
    } else if (!id) {
      throw new Error("Engineer id is empty");
    } else if (!email) {
      throw new Error("Engineer email is empty");
    } else if (!role) {
      throw new Error("Engineer role is empty");
    } else if (!gitHubName) {
      throw new Error("Engineer GitHub is empty");
    }
  }
  getRole() {
    return `Engineer`;
  }
  getGitHubName() {
    return this.gitHubName;
  }
}
module.exports = Engineer;
