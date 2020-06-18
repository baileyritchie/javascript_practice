let rlSync = require('readline-sync');
let current = Number(rlSync.question('What is your age?\n'));

for (let future = 10;future <= 40; future += 10){
  console.log(`In ${future} years, you will be ${current + future} years old.`);
}


function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
