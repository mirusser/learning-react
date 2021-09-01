import React from 'react'
import './dialog.css'

const FancyBorder = (props) => {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  )
}

const Dialog = (props) => {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>{props.title}</h1>
      <p className='Dialog-message'>{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: '' }
  }

  handleChange = (e) => {
    this.setState({ login: e.target.value })
  }

  handleSingUp = () => {
    alert(`Welcome, ${this.state.login}`)
  }

  render() {
    return (
      <Dialog title='Placeholder title' message='Placeholder message'>
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSingUp}>Sing up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog
