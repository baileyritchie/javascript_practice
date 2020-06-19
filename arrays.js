let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr = myArray.map(function(val){
  if (val % 2 ===0){
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArr);
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray = array.filter(val => Number.isInteger(val));

console.log(newArray);

let arr1 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });
  return filteredNumbersArray;
}
let numbers = [3, 5, 7];
function sumOfSquares(arr) {
  let newArr = arr.reduce((accumulator, number) => accumulator + number*number, 0);
  return newArr;
}
let newNumbers = sumOfSquares(numbers);
console.log(newNumbers);

let myArray1 = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

for (let i = 0; i < myArray1.length; i += 1) {
  console.log(myArray1[i]);
}

let obj1 = {
  b: 2,
  a: 1,
  c: 3,
};

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj);
newObj.qux = 3;
console.log(newObj);


function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}


