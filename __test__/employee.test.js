const Employee = require("../lib/Employee");

const empName = "Jon Gregory";
const id = "1234";
const email = "jongregory75@hotmail.com";
const role = "Employee";

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, employee ID, employee email, employee role", () => {
      const employee = new Employee(
        "Jon Gregory",
        "1234",
        "jongregory75@hotmail.com",
        "Employee"
      );

      expect(employee.empName).toEqual(empName);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
      expect(employee.role).toEqual(role);
    });

    //CASE: no args
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();
      expect(cb).toThrow();
    });

    //CASE: name is empty
    it("should throw an error if 'name' is empty", () => {
      const cb = () => new Employee("", id, email, role);
      const err = new Error("Employee name is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: ID is empty
    it("should throw an error if 'id' is empty", () => {
      const cb = () => new Employee(empName, "", email, role);
      const err = new Error("Employee id is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Email not empty
    it("should throw an error if 'email' is empty", () => {
      const cb = () => new Employee(empName, id, "", role);
      const err = new Error("Employee email is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Role Engineer
    it("should throw an error if 'role' is empty", () => {
      const cb = () => new Employee(empName, id, email, "");
      const err = new Error("Employee role is empty");

      expect(cb).toThrowError(err);
    });
  });
});
