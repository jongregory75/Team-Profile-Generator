const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

var name;
var id;
var dynHtml = "";
var indexHtml = "";

//function that renders html for the array of objects passed
function renderHtmlObj(htmlObj) {
  console.log("Init Start String");
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

  console.log("ABOVE FOR LOOP: ");
  for (var i = 0; i < htmlObj.length; i++) {
    console.table(htmlObj[i]);
    console.log("Length " + htmlObj.length);

    console.table(`Employee name: ${htmlObj[i].getName()}`);
    console.table(`ID: ${htmlObj[i].getID()}`);
    console.table(`Email: ${htmlObj[i].getEmail()}`);
    console.table(`Role ${htmlObj[i].getRole()}`);

    if (htmlObj[i].getPhone()) {
      console.table(`Phone: ${htmlObj[i].getPhone()}`);
    } else if (htmlObj[i].getGitHubName()) {
      console.table(`GITHUB: ${htmlObj[i].getGitHubName()}`);
    } else if (htmlObj[i].getSchoolName()) {
      console.table(`SCHOOLNAME: ${htmlObj[i].getSchoolName()}`);
    }
    console.log("BUILDING CARD: ");
    var cardHtml = `<div class="card" style="width: 200px;">
      <div class="card-body">
        <h2 class="card-title"></h2> ${htmlObj[i].getName()}
        <h3 class="card-text">ID: </h3> ${htmlObj.getID()}
        <pathh3 class="card-text">ID: </h3> ${htmlObj.getEmail()}
        // <h3 class="card-text">ID: </h3> ${htmlObj.getRole()}
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;

    dynHtml = dynHtml + cardHtml;
  }

  console.log("dynHTML :" + dynHtml);

  console.log("In generateHTML FUNCTION:");

  //writeFile
  indexHtml = `${startHtmlString} ${dynHtml} ${endHtmlString}`;
  console.log(indexHtml);

  fs.writeFile("./index.html", indexHtml, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

//Function exports
module.exports = renderHtmlObj;
