// Program that practices input and output
let rlSync = require('readline-sync');
let firstname = rlSync.question("What's your first name?\n");
let lastname = rlSync.question("What's your last name?\n");
console.log(`Hello, ${firstname} ${lastname}!`);
