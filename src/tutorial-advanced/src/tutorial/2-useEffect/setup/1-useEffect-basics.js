import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function

//second parameter,
//not providing second parameter makes that useEffect hook runs every time after render
//providing [] (empty array) makes that useEffect hook runs only on initial render
//providing an value to the dependency list (for example [value]) triggers useEffect to run (afeter render) every time the dependency list changes
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect - every time value changed')
    if (value > 0) {
      document.title = `New messages (${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('hello world - only on initial render')
  }, [])

  console.log('render component')

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue((prevValue) => prevValue + 1)
        }}
      >
        increase value
      </button>
    </>
  )
}

export default UseEffectBasics
