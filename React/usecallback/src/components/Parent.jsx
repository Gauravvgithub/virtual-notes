import React from 'react'
import { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'
import { useCallback } from 'react'

const Parent = () => {
    let [age, setAge] = useState(22)
    let [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 500)
    }, [salary])
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent