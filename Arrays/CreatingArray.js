//*Array literals
let empty = [];
let primes = [2, 3, 5, 7, 11];
let mix = [1.1, true, "a"];
let Exp = [2 + 5, 1 + 1];
let arrObj = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];
let count = [1, , 3];
// console.log(count.length);

//*Spread Operator
let a = [1, 2, 3];
let b = [0, ...a, 4];
console.log(b);
let digits = [..."0123456789ABCDEF"];
console.log(digits);

//*Constructor
let a = new Array();
let a = new Array(10);

//*Array.of() when we have create single numeric array constructor fails
let single = Arrray.of(10);

//*Reading and Writing
let a = ["world"];
let value = a[0];
a[1] = 3.14;
