import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

//short explanation: short-circuit evaluation return the last evaluated expression (which doesn't need to be bool)
//if one of the operands in short-circuit isn't a boolean type it will be converted to bool for the time of evaluation

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h2>short circuit</h2>
      {/* <h1>first value: {firstValue}</h1>
      <h1>second value: {secondValue}</h1> */}
      {/* <h1>text: {text || 'default text'}</h1>
      <h1>text: {text && 'default text'}</h1> */}

      {/* same as 'text && 'default text'' */}
      {/* <h1>
        {() => {
          if (text) {
            return 'default text'
          }
        }}
      </h1> */}

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h1>{isError && 'Error...'}</h1>
      {isError ? <p>Error</p> : <p>There is no error</p>}
    </>
  )
}

export default ShortCircuit
