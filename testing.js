let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(byteSequence.includes('x'));


let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
}

console.log(jane.location.country);

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};



let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);

console.log(keys);

let nestedArray = Object.entries(vehicle);
console.log(nestedArray);

function sum (num1, num2){
  return num1+num2;
}
function brendanEichQuote(){
  console.log('Always bet on JavaScript.');
}
function compareByLength(str1,str2){
  if (str1.length<str2.length){
    return -1;
  } else if (str1.length===str2.length){
    return 0;
  }else{
    return 1;
  }
}
let scores = [96, 47, 113, 89, 100, 102];
let count = 0;
for(let i=0;i<scores.length;i++){
  if(scores[i]>=100){
    count+=1
  }
}
console.log(count);

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
for (let i=0;i<vocabulary.length;i++){
  for (let j=0; j<vocabulary[i].length;j++){
    console.log(vocabulary[i][j]);
  }
}
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

Array.isArray(someValue1); // true
Array.isArray(someValue2); // false

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

function removeGroceries(lst){
  while(lst.length > 0){
    console.log(lst.shift());
  }
  
}

removeGroceries(groceryList);

function removeLastChar(string) {
  // returns string from beginning to end - 1 position
  return string.substring(0, string.length - 1);
}

const template = 'I VERB NOUN.';

let sentence = (verb,noun)=>template
  // don't use curly braces here because you will need a return...
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));


let p;

for (p = 0; p <= 10; p += 2) {
  console.log(p);
}

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for(let i = 0; i<cities.length; i+=1){
  if (cities[i] === null){
    continue;
  } else{
    console.log(cities[i].length);
  }
}

let num = 1;
while( num <= 40 ){
  if (num % 2 === 0){
    // if even
    num +=1
    continue;
  }
  console.log(num);
  num +=1
}