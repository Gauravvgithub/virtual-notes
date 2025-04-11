// this shows current context

// const user = {
//     username: "gaurav",
//     id:1,
//     greet:function(){
//         console.log(`hello ${this.username}`)
//     }
// }
// user.greet()


// function User(username,isLoggedIn){
//     this.username = username
//     this.isLoggedIn = isLoggedIn
// }

// const firstUser = new User("Gaurav", true)
// console.log(firstUser)

// const secondUser = new User("Raj", false)
// console.log(secondUser)


// function User(username,isLoggedIn, trimSpace = 'Null', wordLength = ''){
//     this.username = username.trim()
//     this.isLoggedIn = isLoggedIn
//     this.trimSpace = trimSpace.trim()
//     this.wordLength = wordLength.length
// }

// User.prototype.printMe = function (){
//     console.log(`hello ${this.username}`)
// }

// User.prototype.trimName = function (){
//     console.log(`${this.trimSpace}`)
// }

// User.prototype.showLength = function (){
//     console.log(`${this.wordLength}`)
// }

// const firstUser = new User("Gaurav          ", true);
// console.log(firstUser);

// const trimUserSpace = new User("Gaurav          ", true, "Raj         ", " raj@google.com       ");
// console.log(trimUserSpace);

// const wordLengthShow = new User("Gaurav ", true, "raj ", "gaurav@123456");
// console.log(wordLengthShow);

// firstUser.printMe();
// trimUserSpace.trimName();
// wordLengthShow.showLength();


String.prototype.trueLength = function(){
    console.log(this.trim())
    console.log(this.length)
}

const userProfile = "   23       "
userProfile.trueLength();


Object.prototype.value = function(key){
    console.log(this[key] || `key "${key}" not found`)
}

const userData = {
    username: "Gaurav",
    id: "01",
    mailId: "gaurav@google.com"
}
userData.value("username")



Array.prototype.findIndex = function(value){
    console.log(this.indexOf(value) && `value "${value}" not found`)
}

const UserArray = ["ironman", "batman", "superman", "shaktiman", "Gaone"]
UserArray.findIndex("asdkfjn")

for (let i = 1; i <= 20; i++) {
    console.log(`\nTable of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}