import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState('value use state')[0]
  // const handler = useState('value use state')[1]
  const [text, setText] = useState('Random Title')
  const handlerClick = () => {
    if (text == 'Random title') {
      setText('Hello world')
    } else {
      setText('Random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
