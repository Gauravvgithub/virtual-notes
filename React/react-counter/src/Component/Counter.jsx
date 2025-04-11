import React, { useState } from 'react'

export const Counter = () => {

    let [count, setCount] = useState(0)
    let [userDetails, setUserDetails] = useState({name: "Gaurav", id: 1})

    
    function increment(){
        // setCount(count+1)
        if(count < 10){
            setCount(count + 1)
            
        }else{
            count === 10
            confirm("bas 10 hi last ha ")
        }
    }
    function updateId(){
        setUserDetails({...userDetails, id: userDetails.id + 1})
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <h1>{userDetails.name}{userDetails.id}</h1>
        <button onClick={updateId}>Update User</button>
    </div>
  )
}
