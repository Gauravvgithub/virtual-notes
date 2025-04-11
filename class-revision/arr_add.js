// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr3 = arr1.concat(arr2)
// console.log(arr3)


const asyncCode = new Promise(function(reslove,reject){
    console.log("please wait for 5 seconds")
    setTimeout(function(){
        let isLogged = true
        if (!isLogged) {
            reslove("i am loggedIn")
        }else{
            reject("error-logging")
        }
    },5000)
})
async function finalOutput(){
    try{
        let result = await asyncCode 
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
finalOutput();