import React from 'react'
import Clock from './Components/clock'
import Toggle from './Components/toggle'
import NameForm from './Components/nameForm'
import Calculator from './Components/tempCalculator'

function App() {
  return (
    <div className='container'>
      <Clock />
      {/* <Toggle />
      <NameForm /> */}
      <Calculator />
    </div>
  )
}

export default App
