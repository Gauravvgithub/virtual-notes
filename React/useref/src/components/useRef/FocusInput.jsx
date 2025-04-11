import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    console.log(inputRef)

    useEffect(()=>{
        inputRef.current.focus()
    })
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default FocusInput