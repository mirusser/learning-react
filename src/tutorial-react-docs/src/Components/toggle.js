import React, { useState, useContext } from 'react'

const ToggleContext = React.createContext()

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const handleClick = () => {
    setIsToggleOn((prevIsToggleOn) => !prevIsToggleOn)
  }

  return (
    <ToggleContext.Provider value={{ isToggleOn, handleClick }}>
      <ToggleButton />
    </ToggleContext.Provider>
  )
}

const ToggleButton = () => {
  const { isToggleOn, handleClick } = useContext(ToggleContext)
  let btnText = isToggleOn ? 'ON' : 'OFF'
  return <button onClick={() => handleClick()}>{btnText}</button>
}

export default Toggle