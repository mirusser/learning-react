import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const handleClick = (e) => {
    console.log('clicked')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' color='green' handleClick={handleClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
