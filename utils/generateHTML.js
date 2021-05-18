const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

var name;
var id;
//var dynHtml = "";
var indexHtml = "";
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
  console.log("ABOVE FOR LOOP: ");
  let dynHTML = "";

  htmlObj.forEach((card) => {
    switch (card.getRole()) {
      case "Manager":
        cardHtml = `<div class="card" style="width: 200px;">
        <div class="card-body">
          <h2 class="card-title"></h2> ${card.getName()}
          <h3 class="card-text">ID: </h3> ${card.getID()}
          <h3 class="card-text">ID: </h3> ${card.getEmail()}
          <h3 class="card-text">ID: </h3> ${card.getRole()}
          <h3 class="card-text">ID: </h3> ${card.getPhone()}
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        dynHtml = dynHtml + cardHtml;
        break;
      case "Engineer":
        cardHtml = `<div class="card" style="width: 200px;">
        <div class="card-body">
        <h2 class="card-title"></h2> ${card.getName()}
        <h3 class="card-text">ID: </h3> ${card.getID()}
        <h3 class="card-text">ID: </h3> ${card.getEmail()}
        <h3 class="card-text">ID: </h3> ${card.getRole()}
          <h3 class="card-text">ID: </h3> ${card.getGitHubName()}
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        dynHtml = dynHtml + cardHtml;
        break;
      case "Intern":
        cardHtml = `<div class="card" style="width: 200px;">
        <div class="card-body">
        <h2 class="card-title"></h2> ${card.getName()}
        <h3 class="card-text">ID: </h3> ${card.getID()}
        <h3 class="card-text">ID: </h3> ${card.getEmail()}
        <h3 class="card-text">ID: </h3> ${card.getRole()}
          <h3 class="card-text">ID: </h3> ${card.getSchoolName()}
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        dynHtml = dynHtml + cardHtml;
        break;
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
