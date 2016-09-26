/* 1 задание
Write a function which will return you first two times 1, then 2, then 3, then 5 and so on (Fibonacci numbers). 
Don’t use any global variables. */

function calcfibonacciNumbers() {
  var i,
      nm = [];

  nm[0] = 0;
  for(i=1; i<10; i++) {
    if(i==1) {
      nm[i] = nm[i-1] + 1;
      console.log (nm[i]);
    } else {
      nm[i] = nm[i-1] + nm[i-2];
      console.log (nm[i]);
    }

  }
}
calcfibonacciNumbers();


/* 3 задание
Make this syntax possible: var a = (5).plus(3).minus(6); //2
*/

Number.prototype.plus = function(i) {
  return this + i; 
};

Number.prototype.minus = function(i) {
  return  this - i; 
};

var a = (5).plus(3).minus(6);
console.log(a);


/* 2 задание
Make this syntax possible: var a = add(2)(3); //5
*/

function add(i) {
  return function(j) {
    return i+j;
  }
}

var a = add(2)(3);
console.log(a);