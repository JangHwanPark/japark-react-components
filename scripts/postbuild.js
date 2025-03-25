import { writeFileSync } from "fs";

const content = `module.exports = require("./index.cjs.js");`;
writeFileSync("dist/index.js", content);
