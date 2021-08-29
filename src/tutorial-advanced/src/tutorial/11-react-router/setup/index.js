import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
// navbar
import Navbar from './Navbar'

const ReactRouterSetup = () => {
  return (
    <Router>
      <h2>react router</h2>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/people'>
        <People />
      </Route>
    </Router>
  )
}

export default ReactRouterSetup
