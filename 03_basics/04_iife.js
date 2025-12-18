// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // when we have write iifi we have add semicolan 

( (name) => { // the parameter is name 
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')