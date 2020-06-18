let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let j = 0; j< myArray.length;j+=1){
  for (let i=0; i <myArray[j].length; i+=1 ){
    let val = myArray[j][i];
    if (val % 2 === 0){
      // if even
      console.log(val);
    }
  }
}
