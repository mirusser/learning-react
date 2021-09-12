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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [_user, setUser] = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError(false)
    try {
      const requestToken = await API.getRequestToken()
      const sessionId = await API.authenticate(requestToken, username, password)
      console.log(sessionId)
      setUser({ sessionId: sessionId.session_id, username })

      navigate('/') //after login navigate(go to) home page
    } catch (error) {
      setError(true)
    }
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    if (name === 'username') setUsername(value)
    else if (name === 'password') setPassword(value)
  }

  return (
    <Wrapper>
      {error && <div className='error'>There was an error</div>}
      <label>Username:</label>
      <input
        type='text'
        value={username}
        name='username'
        onChange={handleInput}
        placeholder='Enter name here...'
      />
      <label>Password:</label>
      <input
        type='password'
        value={password}
        name='password'
        onChange={handleInput}
        placeholder='Enter password here...'
      />
      <Button text='Login' callback={handleSubmit} />
    </Wrapper>
  )
}

export default Login
