import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'red' : 'green'}
          handleClick={() => onAdd()}
        />
      )}
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
