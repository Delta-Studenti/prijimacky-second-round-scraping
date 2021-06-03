const fs = require("fs");
const https = require("https");

let schools = JSON.parse(fs.readFileSync("schoolsRaw.json"));

var websiteContent;

schools.map((x) => {
  const getHrefs = (d) => {
    const regex = /href=["']([^"']*)["']/g;
    const content = d.toString();
    const found = content.match(regex);
    console.log(found);
  };

  https
    .get("https://" + x.www.split(",")[0], (res) => {
      console.log("statusCode:", res.statusCode);
      console.log("headers:", res.headers);

      res.on("data", (d) => {
        getHrefs(d);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
});
console.log("done");
