import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  let [counterOne, setCounterOne] = useState(0)
  let [counterTwo, setCounterTwo] = useState(0)

  const IncrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i= 0
    while ( i < 10000000000) {
      i++
    }
    return counterOne % 2 === 0
  },[counterOne])

  return (
    <>
    <div>
      <div>
        <button onClick={IncrementOne}>Increment One - {counterOne}</button>
        <span>{isEven? "EVEN" : "ODD"}</span>
      </div>
      <div>
        <button onClick={IncrementTwo}>Increment Two - {counterTwo}</button>
      </div>
    </div>
    </>
  )
}

export default App
