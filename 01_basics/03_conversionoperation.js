let score = "33" // output of undefine = nan , 33abc=nan , null = 0, boolean true = 1

// console.log(typeof score);

// console.log(typeof (score));

let valueNumber = Number (score);

// console.log(typeof valueNumber);

// console.log(valueNumber);

let valueoff = 1
let convertboolean = Boolean (valueoff)  // if empty string "" = false, if "prathamesh"= true,

// console.log(convertboolean);


let someNumber= 23;

convertNumber = String (23); // this can print 23 but the typeof this number is coverted as String
// console.log(typeof convertNumber);
// console.log(convertNumber);


// ************************************operations***************************************** //



let value = 3
let negValue = -value

// console.log(negValue);

let str1 = "hello"
let str2 = " prathamesh"

let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(2 + "1");
// console.log("1" + 2 + 2);
// console.log(2 + 1 + "2");

console.log(true);
console.log(+true);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"