const fs = require("fs");
const path = require("path");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

var name;
var id;
var indexHtml = "";
var dynHtml = "";
var cardHtml = "";

const startHtmlString = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Team Members</title>
    </head>
    <body>
    <header class="jumbotron header d-flex justify-content-center">
      <h1 class="display-3">My Team</h1>
    </header><main class="mainSection row container d-flex justify-content-evenly">`;
const endHtmlString = `</main</body></html>`;

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
        cardHtml = `          
        <div class="card mb-3 ml-3 cardStyle" style="width: 18rem;">
          <h3 class="card-header"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>  ${card.getName()}</h3>
          <div class="card-body">
            <h5 class="card-title">${card.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${card.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${card.getEmail()}">${card.getEmail()}</a></li>
            <li class="list-group-item">Phone: ${card.getPhone()}</li>
          </ul>
        </div>`;
        console.log("CARDHTML: " + cardHtml);
        dynHtml = dynHtml + cardHtml;
        console.info(`DYNHTML: ${dynHtml}`);
        console.error(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Engineer":
        console.log("INSIDE ENGINEER CASE: -->");
        cardHtml = `          
        <div class="card mb-3 ml-3 cardStyle" style="width: 18rem;">
          <h3 class="card-header"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
          <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"/>
        </svg>  ${card.getName()}</h3>
          <div class="card-body">
            <h5 class="card-title">${card.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${card.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${card.getEmail()}">${card.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${card.getGitHubName()}">${card.getGitHubName()}</a></li>
          </ul>
        </div>`;
        console.log("CARDHTML: " + cardHtml);

        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Intern":
        console.log("INSIDE INTERN CASE: -->");
        cardHtml = `          
        <div class="card mb-3 ml-3 cardStyle" style="width: 18rem;">
          <h3 class="card-header"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>  ${card.getName()}</h3>
          <div class="card-body">
            <h5 class="card-title">${card.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${card.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${card.getEmail()}">${card.getEmail()}</a></li>
            <li class="list-group-item">School: ${card.getSchoolName()}</li>
          </ul>
        </div>`;
        console.log("CARDHTML: " + cardHtml);

        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
    }
    return dynHtml;
  });

  //writeFile
  console.log("STARTING WRITE");
  console.log(dynHtml);

  indexHtml = `${startHtmlString} ${dynHtml} ${endHtmlString}`;

  const OUTPUT_DIR = path.resolve(__dirname, "../output/");
  const outputPath = path.join(OUTPUT_DIR, "index.html");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, indexHtml, "utf-8");

  return indexHtml;
}

//Function exports
module.exports = renderHtmlObj;
