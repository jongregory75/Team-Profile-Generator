const Employee = require("./Employee");

class Manager extends Employee {
  constructor(empName, id, email, role, phone) {
    console.log("Manager Constructor");
    super(empName, id, email, role);
    this.phone = phone;
    console.log(role);

    if (!empName) {
      throw new Error("Manager name is empty");
    } else if (!id) {
      throw new Error("Manager id is empty");
    } else if (!email) {
      throw new Error("Manager email is empty");
    } else if (!role) {
      throw new Error("Manager role is empty");
    } else if (!phone) {
      throw new Error("Manager phone is empty");
    }
  }

  getPhone() {
    return this.phone;
  }
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
