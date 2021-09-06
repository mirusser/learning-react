import React from 'react'
//styles
import { GlobalStyle } from './GlobalStyle'
//components
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
