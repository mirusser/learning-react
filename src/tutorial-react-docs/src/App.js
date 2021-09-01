import React from 'react'
import Clock from './Components/clock'
import Toggle from './Components/toggle'
import NameForm from './Components/nameForm'
import Calculator from './Components/tempCalculator'
import SignUpDialog from './Components/Composition/signUpDialog'

function App() {
  return (
    <div className='container'>
      <Clock />
      {/* <Toggle />
      <NameForm /> */}
      <Calculator />
      <SignUpDialog />
    </div>
  )
}

export default App
