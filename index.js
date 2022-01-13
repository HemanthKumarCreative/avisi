#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
// clear the console

welcome({
  title: pkgJSON.name,
  tagLine: "Welcome",
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: "#FADC00",
  color: "#000000",
  bold: true,
  clear: true,
});
console.log(`
Avisi Hemanth Kumar

Super Good Developer dedicated to satisfy  end user requirements without compromise.
`);
