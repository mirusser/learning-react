import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit',
}

const toCelsius = (farenheit) => {
  return ((farenheit - 32) * 5) / 9
}

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32
}
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>
  } else {
    return <p>The water would not boil</p>
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: 'c', temperature })
  }

  handeFarenheitChange = (temperature) => {
    this.setState({ scale: 'f', temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const farenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={farenheit}
          onTemperatureChange={this.handeFarenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator
