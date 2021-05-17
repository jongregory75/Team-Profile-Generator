const Engineer = require("../lib/Engineer");
const empName = "Jon Gregory";
const id = "1234";
const email = "jongregory75@hotmail.com";
const role = "Engineer";
const gitHubName = "https://github.com/jongregory75";

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, employee ID, employee email, employee role, employee GitHub", () => {
      const engineer = new Engineer(
        "Jon Gregory",
        "1234",
        "jongregory75@hotmail.com",
        "Engineer",
        "https://github.com/jongregory75"
      );

      expect(engineer.empName).toEqual(empName);
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(email);
      expect(engineer.role).toEqual(role);
      expect(engineer.gitHubName).toEqual(gitHubName);
    });

    //CASE: no args
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer();

      expect(cb).toThrow();
    });

    //CASE: name is empty
    it("should throw an error if 'empName' is empty", () => {
      const cb = () => new Engineer("", id, email, role, gitHubName);
      const err = new Error("Employee name is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: ID is empty
    it("should throw an error if 'ID' is empty", () => {
      const cb = () => new Engineer(empName, "", email, role, gitHubName);
      const err = new Error("Employee id is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: EMAIL is empty
    it("should throw an error if 'email' is empty", () => {
      const cb = () => new Engineer(empName, id, "", role, gitHubName);
      const err = new Error("Employee email is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Role != Engineer
    it("should throw an error if 'role' is empty", () => {
      const cb = () => new Engineer(empName, id, email, "", gitHubName);
      const err = new Error("Employee role is empty");

      expect(cb).toThrowError(err);
    });

    //CASE: Git Hub name !empty
    it("should throw an error if 'gitHubName' is empty", () => {
      const cb = () => new Engineer(empName, id, email, role, "");
      const err = new Error("Engineer GitHub is empty");

      expect(cb).toThrowError(err);
    });
  });
});
