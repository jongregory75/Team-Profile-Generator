class Employee {
  constructor(empName, id, email, role) {
    this.empName = empName;
    this.id = id;
    this.email = email;
    this.role = role;

    if (!empName) {
      throw new Error("Employee name is empty");
    } else if (!id) {
      throw new Error("Employee id is empty");
    } else if (!email) {
      throw new Error("Employee email is empty");
    } else if (!role) {
      throw new Error("Employee role is empty");
    }
  }
  getName() {
    return this.empName;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return `Employee`;
  }
  printInfo() {
    return console.log(
      `EMPNAME: ${this.empName} ID: ${id} EMAIL: ${email} ROLE: ${role}`
    );
  }
}

module.exports = Employee;
