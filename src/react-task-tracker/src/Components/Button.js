import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className='btn'
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  text: 'Button placeholder text',
  color: 'steelBlue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
}

export default Button
