const Manager = require("../lib/Manager");
const empName = "Jon Gregory";
const id = "1234";
const email = "jongregory75@hotmail.com";
const role = "Manager";
const phone = "303-909-1532";

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, employee ID, employee email, employee role", () => {
      const manager = new Manager(
        "Jon Gregory",
        "1234",
        "jongregory75@hotmail.com",
        "Manager",
        "303-909-1532"
      );

      expect(manager.empName).toEqual(empName);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.role).toEqual(role);
      expect(manager.phone).toEqual(phone);
    });

    //CASE: no args
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager();

      expect(cb).toThrow();
    });

    //CASE: name is empty
    it("should throw an error if 'name' is empty", () => {
      const cb = () => new Manager("", id, email, role, phone);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrow();
    });

    //CASE: ID is empty
    it("should throw an error if ID is empty", () => {
      const cb = () => new Manager(empName, "", email, role, phone);
      const err = new Error("Employee id is empty");
      expect(cb).toThrowError(err);
    });

    //CASE: Email not a string
    it("should throw an error if 'email' is empty", () => {
      const cb = () => new Manager(empName, id, "", role, phone);
      const err = new Error("Employee email is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Role is ! Manager
    it("should throw an error if 'role' is empty", () => {
      const cb = () => new Manager(empName, id, email, "", phone);
      const err = new Error("Employee role is empty");

      expect(cb).toThrowError(err);
    });
    //CASE: Phone is !empty
    it("should throw an error if 'role' is empty", () => {
      const cb = () => new Manager(empName, id, email, role, "");
      const err = new Error("Manager phone is empty");

      expect(cb).toThrowError(err);
    });
  });
});
