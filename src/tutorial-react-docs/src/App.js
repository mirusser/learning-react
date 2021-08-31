import React from 'react'
import Clock from './Components/clock'
import Toggle from './Components/toggle'
import NameForm from './Components/nameForm'

function App() {
  return (
    <div className='container'>
      <Clock />
      <Toggle />
      <NameForm />
    </div>
  )
}

export default App
