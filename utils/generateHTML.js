const fs = require("fs");
const path = require("path");
var name;
var id;
var dynHtml = "";

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
    console.log(htmlObj[i]);
    console.log(htmlObj[i].empName);
    console.log(htmlObj[i].id);
    console.log(htmlObj[i].email);
    console.log(htmlObj[i].role);
    if (htmlObj[i].phone) {
      console.log(htmlObj[i].phone);
    } else if (htmlObj[i].gitHubName) {
      console.log(htmlObj[i].gitHubName);
    } else if (htmlObj[i].schoolName) {
      console.log(htmlObj[i].schoolName);
    }
    console.log("BUILDING CARD: ");
    // var cardHtml = `<div class="card" style="width: 200px;">
    //   <div class="card-body">
    //     <h2 class="card-title"></h2> ${empName}
    //     <h3 class="card-text">ID: </h3> ${htmlId}
    //     <pathh3 class="card-text">ID: </h3> ${htmlEmail}
    //     <h3 class="card-text">ID: </h3> ${htmlRole}
    //     <h3 class="card-text">ID: </h3> ${htmlEmail}
    //     <h3 class="card-text">ID: </h3> ${htmlPhone}
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>`;

    dynHtml = dynHtml + cardHtml;
  }

  console.log("dynHTML :" + dynHtml);

  console.log("In generateHTML FUNCTION:");

  //writeFile
  indexHtml = `${startHtmlString} ${dynHtml} ${endHtmlString}`;
  console.log(indexHtml);

  //   fs.writeFile("./index.html", indexHtml, (err) =>
  //     err ? console.error(err) : console.log("Success!")
  //   );
}

//Function exports
module.exports = renderHtmlObj;
