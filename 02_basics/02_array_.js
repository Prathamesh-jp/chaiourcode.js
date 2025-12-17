const marvalheros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvalheros.push(dc_heros)

// console.log(marvalheros);

const allHeros = marvalheros.concat(dc_heros);   // use of concat
//console.log(allHeros);

const all_the_herose = [...marvalheros,...dc_heros]  // use of spread
//console.log(allHeros);

const a = [1,2,3,[4,5],[7,8,[10,11,12]]] // solve array inside the array in short imp for interview

const solveArr = a.flat(Infinity)
// console.log(solveArr);



// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({name:"hitesh"})); // it can get confuse so it just give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


