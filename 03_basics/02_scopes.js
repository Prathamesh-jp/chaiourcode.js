//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"   // her we can understand the basic example familiar with us that chiled can take icecream from  
                                // parent but parent can not icecream from chiled in given example the function two can take value from function 
    function two(){             // one so it can print username but it can not print website 
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ //but in this case this can print the value 6 beacuse we can acces this function anywhere
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // this give us error beacuse we use addTwo(5) upside before declare it 
    return num + 2
}