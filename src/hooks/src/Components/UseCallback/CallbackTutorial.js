import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Child from './Child'

const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState('random data')

  const returnComment = useCallback(
    (name) => {
      return data + name
    },
    [data]
  )

  return (
    <div className='App'>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        {''}
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default CallbackTutorial
