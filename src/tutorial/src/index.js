import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <>
      <div>
        <Person />
        <Message />
      </div>
    </>
  )
}

const Person = () => <h2>John doe</h2>
const Message = () => {
  return <p>this is my message</p>
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello world')
//   )
//}

ReactDom.render(<Greeting />, document.getElementById('root'))
