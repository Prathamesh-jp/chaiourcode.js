// singleton

// object litrals

const mySym = Symbol("key1")   // ask in interview how to add and symobol in object

const bio = {
    name : "prathamesh",
    "fullname" : "Prathamesh Mhettar",
    age : 21,
    [mySym]:"mysymbol",   // we can declare likt htis
    location : "kolhapur",
    email : "prathamesh@gmail.com",
    isloggin : false,
    lastloggin: ["monday","sunday"]
}

//console.log(bio.fullname);
//console.log(bio["fullname"]);
// console.log(bio);
// console.log(typeof bio[mySym]);


bio.email= "prathmesh1@gmail.com"

// Object.freeze(bio)  //used to freeze the object

bio.email= "anushka@gmail.com"
//console.log(bio);

let name = "Prathamesh"

bio.greeting = function(){
    console.log("hellow my name is ",`${name}`);
}

bio.greetingtwo = function(){
    console.log(`hellow bio users, ${this.name}`);
}

console.log(bio.greeting());
console.log(bio.greetingtwo());



