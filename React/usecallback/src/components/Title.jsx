import React from 'react'

const Title = () => {
    console.log(' i am title')
  return (
    <h1>
        UseCallback
    </h1>
  )
}

export default React.memo(Title)