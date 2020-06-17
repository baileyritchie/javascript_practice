let rlSync = require('readline-sync');

let current = Number(rlSync.question('What is your age?'));
console.log(`In 10 years, you will be ${current + 10} years old.`);
console.log(`In 20 years, you will be ${current + 20} years old.`);
console.log(`In 30 years, you will be ${current + 30} years old.`);