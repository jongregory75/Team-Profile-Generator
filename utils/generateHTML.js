const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

var name;
var id;
//var dynHtml = "";
const indexHtml = "";
var dynHtml = "";
var cardHtml = "";

const startHtmlString = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Members</title>
    </head>
    <body>`;
const endHtmlString = `</body></html>`;

//function that renders html for the array of objects passed
function renderHtmlObj(htmlObj) {
  console.log("INSIDE renderHtmlObj() : ");

  console.log(`OBJECT TABLE`);
  console.table(htmlObj);

  htmlObj.forEach((card) => {
    console.log(`INSIDE FOREACH --> CURRENT ROLE: ${card.getRole()}`);
    let cardRole = card.getRole();
    switch (cardRole) {
      case "Manager":
        console.log("INSIDE MANAGER CASE: -->");
        console.log(`Name: ${card.getName()}`);
        console.log(`ID: ${card.getID()}`);
        console.log(`Email: ${card.getEmail()}`);
        console.log(`Role: ${card.getRole()}`);
        console.log(`Phone: ${card.getPhone()}`);

        cardHtml = `<div class="card" style="width: 200px;">
          <div class="card-body">
            <h2 class="card-title">${card.getName()}</h2> 
            <h3 class="card-text">ID: ${card.getID()}</h3> 
            <h3 class="card-text">Email: ${card.getEmail()}</h3> 
            <h3 class="card-text">Role: ${card.getRole()}</h3> 
            <h3 class="card-text">Phone: ${card.getPhone()}</h3>
          </div>
        </div>`;
        console.log("CARDHTML: " + cardHtml);

        dynHtml = dynHtml + cardHtml;
        console.info(`DYNHTML: ${dynHtml}`);
        console.error(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Engineer":
        console.log("INSIDE ENGINEER CASE: -->");
        console.log(`Name: ${card.getName()}`);
        console.log(`ID: ${card.getID()}`);
        console.log(`Email: ${card.getEmail()}`);
        console.log(`Role: ${card.getRole()}`);
        console.log(`GitHubName: ${card.getGitHubName()}`);

        cardHtml = `<div class="card" style="width: 200px;">
          <div class="card-body">
            <h2 class="card-title">${card.getName()}</h2> 
            <h3 class="card-text">ID: ${card.getID()}</h3> 
            <h3 class="card-text">Email: ${card.getEmail()}</h3> 
            <h3 class="card-text">Role: ${card.getRole()}</h3> 
            <h3 class="card-text">Git Hub: <a href="https://github.com/${card.getGitHubName()}">${card.getGitHubName()}</a></h3>
          </div>
        </div>`;
        console.log("CARDHTML: " + cardHtml);

        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Intern":
        console.log("INSIDE INTERN CASE: -->");
        console.log(`Name: ${card.getName()}`);
        console.log(`ID: ${card.getID()}`);
        console.log(`Email: ${card.getEmail()}`);
        console.log(`Role: ${card.getRole()}`);
        console.log(`School Name: ${card.getSchoolName()}`);

        cardHtml = `<div class="card" style="width: 200px;">
          <div class="card-body">
            <h2 class="card-title">${card.getName()}</h2> 
            <h3 class="card-text">ID: ${card.getID()}</h3> 
            <h3 class="card-text">Email: ${card.getEmail()}</h3> 
            <h3 class="card-text">Role: ${card.getRole()}</h3> 
            <h3 class="card-text">School Name: ${card.getSchoolName()}</h3>
          </div>
        </div>`;
        console.log("CARDHTML: " + cardHtml);

        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
    }
  });

  //writeFile
  indexHtml = `${startHtmlString} ${dynHtml} ${endHtmlString}`;
  console.log(indexHtml);

  fs.writeFile("./index.html", indexHtml, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

//Function exports
module.exports = renderHtmlObj;
