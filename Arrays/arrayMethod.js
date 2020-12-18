//* Iterator Methods

//*forEach()
// let data = [1, 2, 3, 4, 5],
//   sum = 0;
// data.forEach((value) => (sum += value));
// console.log(sum);
// data.forEach((v, i, a) => (a[i] = v + 1));
// console.log(data);

//*map() it returns an new array
// let a = [1, 2, 3];
// let result = a.map((x) => x * x);
// console.log(a);
// console.log(result);

//*filter  it take predicate a function that returns true or false
// let a = [5, 4, 3, 2, 1];
// let result = a.filter((x) => x < 3);
// console.log(result);

//* find() and findIndex()
// let a = [1, 2, 3, 4, 5];
// console.log(a.findIndex((x) => x === 3));
// console.log(a.find((x) => x % 2 === 0));

//*  every() and some()
/*
 * every() method is like the mathematical "for all" :
 * it returns true if and only if predicate return true for all the elements in the array
 */
// let a = [1, 2, 3, 4, 5];
// console.log(a.every((x) => x < 10));
// console.log(a.every((x) => x % 2 === 0));

/*
 * the some() method is like the mathematical "there exists":
 * it returns true if there exists at least one element in the array  for which the predicate returnd true and returns false
 *  if and only  if the predicate returns false for all elements of the array
 */
// let a = [1, 2, 3, 4, 5];
// console.log(a.some((x) => x % 2 === 0));

//* reduce()
/* the reduce() takes two  arguments ,first is function that performs the reduction operation. The function combines the two values
   the second (optional) argument is an initial value to pass to the function
*/
// let a = [1, 2, 3, 4, 5];
// console.log(a.reduce((x, y) => x + y, 0));
// console.log(a.reduce((x, y) => x * y, 1));
// console.log(a.reduce((x, y) => (x > y ? x : y)));

//* flat()
// console.log([1, [2, 3]].flat());
// console.log([1, [2, [3, [4]]]].flat(1));

//* concat()
/* This method creates and returns a new array that contains the elements of the original
 array  on which concat() was invoked followed by each of the arguments to concnat() */
// let a = [1, 2, 3];
// console.log(a.concat([4, 5], [6, 7]));
// console.log(a.concat(4, [5, [6, 7]]));

//* push()
/* The push () methods appends one or more new elements to the end of  an array and 
 returns the new length of the array */
let stack = [];
// console.log(stack.push(1, 2));

//* pop()
/* The  pop() method  deletes the last element of  an array, decrements the array  length, and returns the value
 that it removed */
// console.log(stack.pop());

//* unshift()
/* The unshift () methods appends one or more new elements to the beginning of  an array and 
 returns the new length of the array */
console.log(stack.unshift(0.5, 0));
console.log(stack);

//* shif()
/* The  pop() method  deletes the first element of  an array, decrements the array  length, and returns the value
 that it removed */
console.log(stack.shift());
