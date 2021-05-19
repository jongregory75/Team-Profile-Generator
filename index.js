// TODO: Include packages needed for this application

"use strict";
const inquireMgr = require("inquirer");
const inquireEng = require("inquirer");
const inquireInt = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
let htmlObj = [];
var anotherEmp = "";

const fs = require("fs");
//const generateHTML = require("./utils/generateHTML.js");
const renderHtmlObj = require("./utils/generateHTML");

const addEmployeeArr = ["Engineer", "Intern", "Finished"];
const managerArr = [
  {
    type: "input",
    message: "Enter the team manager's name:",
    name: "empName",
  },
  {
    type: "input",
    message: "Enter the team manager's ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the team manager's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the team manager's phone number (xxx-xxx-xxxx):",
    name: "phone",
  },
  {
    type: "list",
    name: "employeeArr",
    default: "Finished",
    choices: addEmployeeArr,
    message: "Add additional employees or select done with employees:",
  },
];
const engineerArr = [
  {
    type: "input",
    message: "Enter the engineer's name:",
    name: "empName",
  },
  {
    type: "input",
    message: "Enter the engineer's id:",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the engineer's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the engineer's Github username:",
    name: "gitHubName",
  },
  {
    type: "list",
    name: "employeeArr",
    choices: addEmployeeArr,
    default: "Finished",
    message: "Add additional employees or select finished:",
  },
];
const internArr = [
  {
    type: "input",
    message: "Enter the intern's name:",
    name: "empName",
  },
  {
    type: "input",
    message: "Enter the intern's id:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter your intern's email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your interns's school name:",
    name: "schoolName",
  },
  {
    type: "list",
    name: "employeeArr",
    choices: addEmployeeArr,
    default: "Finished",
    message: "Add additional employees or select finished:",
  },
];

function init() {
  inquireMgr
    .prompt(managerArr)

    .then((answers) => {
      console.log("MANAGER FUNCTION");
      const manager = new Manager(
        answers.empName,
        answers.id,
        answers.email,
        "Manager",
        answers.phone
      );

      // console.log("Finished manager constructor");
      let anotherEmp = answers.employeeArr;
      console.log(`Manager employeeArr = ${anotherEmp}`);

      console.log("ABOUT TO PUSH MANGER ARRAY");
      //ADD MANAGER Obj to htmlObj array
      htmlObj.push(manager);

      //INVOKE ADD ANOTHER EMPLOYEE
      isAnotherEmployee(anotherEmp);
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function inquireEngineer() {
  inquireEng
    .prompt(engineerArr)

    .then((answers) => {
      console.log("ENGINEER FUNCTION");
      const engineer = new Engineer(
        answers.empName,
        answers.id,
        answers.email,
        "Engineer",
        answers.gitHubName
      );

      anotherEmp = answers.employeeArr;
      console.log("Another EMP: " + anotherEmp);

      //add engineerAnswers to htmlObj
      console.log("ABOUT TO PUSH ENGINEER ARRAY");
      htmlObj.push(engineer);
      console.table(htmlObj);
      isAnotherEmployee(anotherEmp);
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function inquireIntern() {
  inquireInt
    .prompt(internArr)

    .then((answers) => {
      console.log("INTERN FUNCTION");
      const intern = new Intern(
        answers.empName,
        answers.id,
        answers.email,
        "Intern",
        answers.schoolName
      );

      anotherEmp = answers.employeeArr;
      console.log("Another EMP: " + anotherEmp);
      //create intern object
      //add internAnswers to htmlObj
      console.log("ABOUT TO PUSH INTERN ARRAY");
      htmlObj.push(intern);
      console.table(htmlObj);
      isAnotherEmployee(anotherEmp);
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  // return htmlObj;
}

//SWITCH STATEMENT EXECUTION TO CALL ADDITIONAL INQUIRE FUNCTIONS
function isAnotherEmployee(anotherEmp) {
  if (anotherEmp == "Engineer") {
    inquireEngineer();
    anotherEmp = "";
  } else if (anotherEmp == "Intern") {
    inquireIntern();
    anotherEmp = "";
  } else {
    console.log("Finished Adding Employees");
    anotherEmp = "";
    renderHtmlObj(htmlObj);
  }
}

init();
