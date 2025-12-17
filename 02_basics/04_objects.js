//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "Prathamesh"
tinderUser.isLoggine = false

// console.log(tinderUser);

const regularUser = {
    email : "prathamesh@gmail.com",
    fullname : {
        userfullName:{
        firstName : "Prathamesh",
        lastName : "Mhettar"
    }
    }
}

//console.log(regularUser.fullname.userfullName.firstName);

obj1 = {1:"a",2:"b"}
obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2} 
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]