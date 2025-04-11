import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RefTimer = () => {
    let [timer, setTimer] = useState(0)

    let timerRef = useRef(null)

    useEffect(()=>{
        timerRef.current = setInterval(()=>{
            setTimer((prevState)=>prevState + 1)
        },1000)

        return () => clearInterval(timerRef.current)
    },[])

    const stopTimer = () => {
        clearInterval(timerRef.current)
    }
  return (
    <div>
        <h1>Timer - {timer}</h1>
        <div>
            <button style={{marginBottom:"10px"}} onClick={stopTimer}>Stop Me</button>
        </div>
        <div>
            <button onClick={() => {
          if (timerRef.current !== true) {
            timerRef.current = setInterval(() => {
              setTimer((prevState) => prevState + 1);
            },1000);
          }
        }}>Continue Me</button>
        </div>
    </div>
  )
}

export default RefTimer