const fs = require("fs");

let rawdata = fs.readFileSync("schools.json");
let schools = JSON.parse(rawdata);
