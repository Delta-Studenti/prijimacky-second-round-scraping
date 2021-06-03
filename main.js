const fs = require("fs");
const https = require("https");

let rawdata = fs.readFileSync("schoolsRaw.json");
let schools = JSON.parse(rawdata);

const write = (d) => {
  console.log(d.toString());
};

https
  .get("https://www.delta-skola.cz", (res) => {
    res.on("data", (d) => {
      write(d);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
