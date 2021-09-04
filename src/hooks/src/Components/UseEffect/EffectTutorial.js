import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EffectTutorial = () => {
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments/')
      .then((response) => {
        setData(response.data[0].email)
        console.log('api was called')
      })
  }, [count])
  return (
    <>
      <div>data: {data}</div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
    </>
  )
}

export default EffectTutorial
