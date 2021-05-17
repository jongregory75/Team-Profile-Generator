const Intern = require("../lib/Intern");
const empName = "Jon Gregory";
const id = "1234";
const email = "jongregory75@hotmail.com";
const role = "Intern";
const school = "University of Denver";

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, employee ID, employee email, employee role, school name", () => {
      const intern = new Intern(
        "Jon Gregory",
        "1234",
        "jongregory75@hotmail.com",
        "Intern",
        "University of Denver"
      );

      expect(intern.empName).toEqual(empName);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.role).toEqual(role);
      expect(intern.schoolName).toEqual(school);
    });

    //CASE: no args
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });

    //CASE: name is empty
    it("should throw an error if 'empName' is empty", () => {
      const cb = () => new Intern("", id, email, role);

      const err = new Error("Employee name is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: ID is empty
    it("should throw an error if 'ID' is empty", () => {
      const cb = () => new Intern(empName, "", email, role, school);
      const err = new Error("Employee id is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Email not a string
    it("should throw an error if 'email' is empty", () => {
      const cb = () => new Intern(empName, id, "", role, school);
      const err = new Error("Employee email is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Role Intern
    it("should throw an error if 'role' is not 'Intern/Empty'", () => {
      const cb = () => new Intern(empName, id, email, "", school);
      const err = new Error("Employee role is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: School name
    it("should throw an error if 'schoolName' is empty", () => {
      const cb = () => new Intern(empName, id, email, role, "");
      const err = new Error("Intern school is empty");
    });
  });
});
