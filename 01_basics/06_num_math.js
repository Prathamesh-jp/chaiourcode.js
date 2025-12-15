//**********************************//number//********************************************* */
const num = 400

const number = new Number (100)

// console.log(num)
// console.log(number);

// console.log(number.toString().length);
// console.log(number.toFixed(2));

const numbers = 123.47

// console.log(numbers.toPrecision(3));

const hundred = 1000000

// console.log(hundred.toLocaleString('en-In'));//default it show in american standard value

//*************************************number******************************************** */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.round(4.8));

// console.log(Math.min([1,2,3,4]));
// console.log(Math.max([4,5,7]));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);
