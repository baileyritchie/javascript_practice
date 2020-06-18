false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // true --> 3
true && (1 + 2); // true --> 3
false && (1 + 2); // false
(1 + 2) && true; //true
(32 * 4) >= 129; // false
false !== !true; // true
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // false || true || false --> true

function evenOrOdd(num) {
  if (Number.isInteger(num)){
    if (num % 2 === 0){
      //even number
      console.log('even')
    }
    else {
      console.log('odd')
    }
  }
  else {
    console.log('Please pass an integer')
  }
  
}
