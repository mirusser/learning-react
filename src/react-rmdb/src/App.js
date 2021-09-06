import React from 'react'
//styles
import { GlobalStyle } from './GlobalStyle'
//components
import Header from './components/Header'

const App = () => {
  return (
    <div className='App'>
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  )
}

export default App
