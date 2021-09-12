import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import API from '../API'
//components
import Button from './Button'
//styles
import { Wrapper } from './Login.styles'
//context
import { Context } from '../context'

const Login = () => {

  const handleSubmit = () => {}
  
  const handleInput = (e) => {}

  return (
    <Wrapper>
      <label>Username:</label>
      <input
        type='text'
        value='state value'
        name='username'
        onChange={handleInput}
      />
      <input
        type='password'
        value='state value'
        name='password'
        onChange={handleInput}
      />
      <Button text='Login' callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login
