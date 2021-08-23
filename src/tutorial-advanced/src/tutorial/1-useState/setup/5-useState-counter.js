import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue((prevState) => 0)
  }
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1) //it's running asynchronous so if you call this couple of times it will increase the value that was at the beginning of the call, not the actual, current value (that could change after start of it)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => complexIncrease()}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
