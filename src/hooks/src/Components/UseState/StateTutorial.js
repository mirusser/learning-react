import React, { useState } from 'react'

const StateTutorial = () => {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const handleInputValueChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
  }
  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => incrementCounter()}>Increment</button>
      <div>
        <input
          type='text'
          placeholder='enter something here...'
          onChange={(e) => handleInputValueChange(e)}
        />
        {inputValue}
      </div>
    </>
  )
}

export default StateTutorial
