import React, { useRef } from 'react'

const RefTutorial = () => {
  const inputRef = useRef(null)

  const onClick = () => {
    // console.log(inputRef.current.value)
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>Name</h1>
      <input type='text' placeholder='Write name here...' ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </div>
  )
}

export default RefTutorial
