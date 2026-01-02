function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)// we use call function hold the referance beacause of that we can not get the out put
           //beacuse the we seclare the value of username take from setusername and also we have to us this in her 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);