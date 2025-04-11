// Preloader

    setTimeout(() => {
        document.getElementById("preloader").style.display = 'none'
        document.getElementById("content").style.display = "block"
    }, 5000);

// first method
const firstPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`task 1`);
        resolve();
    },1000)
})

firstPromise.then(function(){
    return console.log("task 1 resolve");
});

// second method

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2")
        resolve();
    },2000)
}).then(function(){
    return console.log("task 2 resolve")
})

// third method with reslove parameters
// then chaining as much as needed

const thirdPromise = new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("task 3")
        reslove({
            username:"gaurav",
            password:"Gaurav@123"
        })
    },3000)
})
thirdPromise.then(function(user){
    console.log(user)
    // return console.log("third promise reslove")
    return user.username
}).then(username=>console.log("calling username: ",username, "and task 3 reslove"))

// fourth method // with if and not operator (login or not)

const fourthPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let isTrue = false
        if(!isTrue){
            console.log("task 4")
            resolve({
                username:"raj",
                password:"raj@123"
            })
        }else{
            reject("ERROR: something want wrong")
        }
        resolve();
    },4000)
})
fourthPromise.then(function(user){
    console.log(user)
    return user.username
}).then(username=>console.log("calling username: ",username, "and task 4 reslove"))
.catch(function(error){
    console.log(error)
    return error.error
}).catch(error=>console.log(error))


//fifth method // with async await


const fifthPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let isTrue = false
        if(!isTrue){
            console.log("task 5")
            resolve({
                username:"nitro@google.com",
                password:"Nitro@123"});
        }else{
            console.log("task 5 rejected")
            reject("Error: ERR Something Went Wrong")
        }
    },5000)
});

async function finalOutput(){
    try{
        let result = await fifthPromise
        console.log(result)
    }catch (error){
        console.log(error)
    }
}
finalOutput();