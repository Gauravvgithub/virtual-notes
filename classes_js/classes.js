// class Users{
//     constructor(username,age){
//         this.username = username,
//         this.age = age
//     }
//     printMe(){
//         console.log(`Hello! My name is ${this.username} and My age is ${this.age}`);
//     }
// }

// const userOne = new Users("Gaurav", 22)
// userOne.printMe();

function User(username, age){
    this.username = username
    this.age = age
}
User.prototype.printMe = function(){
    console.log(`Hello! My name is ${this.username} and My age is ${this.age}`)
}
const userOne = new User("Gaurav", 22);
console.log(userOne)
userOne.printMe()