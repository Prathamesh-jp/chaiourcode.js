//array

const myArr = [0,1,2,3,4,5,6]
const myHerose = ["shaktiman","superhero"]

// console.log(myArr[1]);

//Array methods
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr)

myArr.includes(6)
//console.log(myArr);

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

const mna1 = [1,2,3,4,5,6]

const mna2 = mna1.slice(1,2);  // it can not manipualte origanal array (interview question)
console.log("A: ",mna2);
console.log("origanal: ",mna1);

const man3 = mna1.splice(1,2); // it can manipualate origanal array
console.log("B: ",man3);
console.log("origanal",mna1);
