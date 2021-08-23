import React from 'react'

const ErrorExample = () => {
  let title = 'Random title'
  const handlerClick = () => {
    title = 'Hello people'
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handlerClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
