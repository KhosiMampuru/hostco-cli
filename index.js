#!/usr/bin/env node

import inquirer from "inquirer";

const VALID_USERNAME = "OrangeDevelopment";
const VALID_PASSWORD = "Fizzpop40";

console.log("\nHostCo Hosting CLI Login\n");

const questions = [
  {
    type: "input",
    name: "username",
    message: "Username:",
  },
  {
    type: "password",
    name: "password",
    message: "Password:",
    mask: "*",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { username, password } = answers;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
  console.log("\nLogin Successful\n");
  console.log("Project Name: Orange Fuels");
  console.log("Description: Take full control of your VPS hosting. Access all the tools you need to run your online business smoothly.");
  console.log("Project ID: 670937XHFTYR6278DTR-ODHbtd6833-dIHFBIjuf");
  console.log("Domain: https://Orangefuels.co.za");
  console.log("Environment: Production");
  console.log("Backend: PHP 8.2 (REST API)");
  console.log("Frontend: React & React Native");
  console.log("Storage: MySQL Driver");
  console.log("Cache Layer: Redis");
  console.log("Authentication: JWT Tokens");
  console.log("Hosting: Cloudflare + Nginx");
  console.log("Dashboard: https://147.93.180.80/\n");
  console.log("\x1b[31m\nDevelopment mode is unavailable on this device.\n\x1b[0m");
  } else {
    console.log("\x1b[31m\nInvalid credentials. Access denied.\n\x1b[0m");
    process.exit(1);
  }
});
