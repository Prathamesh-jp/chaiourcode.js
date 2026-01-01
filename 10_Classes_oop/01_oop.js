// const user = {
//     username : "hitesh",
//     loginCont : 8,
//     SignIn : true,

//     getUserdetails : function () {
//         //console.log("got user details");
//         //console.log(`my username is : ${this.username}`);// we need to define the username beacuse our node envirment can not understand this
//         console.log(this);
        
        
//     }
// }

// console.log(user.username)
// console.log(user.getUserdetails())
// console.log(user.getUserdetails())
// console.log(user.getUserdetails())


function user (username,loginCount,SignIn){
      this.username = username
      this.loginCount = loginCount
      this.SignIn = true

      return this
}

const userOne = new user("hitesh",12,true) 
const userTwo = new user("chai our code",10,false) 
// if we can not use new constructor the value will be ovrewrite
console.log(userOne);
 //if we print userOne the we get the value of usertwo because we can use NEW keyword 
 
//  steps when we use new keyword
//  1. when we use new keyword this gernrate an empty object know as instance
//  2. constructor function get called pack with arrguments
//  3. arrguments get injected in this keyword
//  4. after tha we get in function

