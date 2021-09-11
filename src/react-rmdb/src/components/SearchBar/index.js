import React, { Component } from 'react'
import PropTypes from 'prop-types'
//image
import searchIcon from '../../images/search-icon.svg'
//styles
import { Wrapper, Content } from './SearchBar.styles'

//function component:
// const SearchBar = ({ setSearchTerm }) => {
//   const [state, setState] = useState('')
//   const initial = useRef(true)

//   useEffect(() => {
//     if (initial.current) {
//       initial.current = false
//       return
//     }
//     const timer = setTimeout(() => {
//       setSearchTerm(state)
//     }, 500)

//     return () => clearTimeout(timer)
//   }, [setSearchTerm, state])

//   return (
//     <Wrapper>
//       <Content>
//         <img src={searchIcon} alt='search-icon' />
//         <input
//           type='text'
//           placeholder='Search movie'
//           onChange={(e) => setState(e.currentTarget.value)}
//           value={state}
//         />
//       </Content>
//     </Wrapper>
//   )
// }

//class component:
class SearchBar extends Component {
  state = { value: '' }
  timeout = null

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props

      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        const { value } = this.state
        setSearchTerm(value)
      }, 500)
    }
  }

  render() {
    const { value } = this.state

    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt='search-icon' />
          <input
            type='text'
            placeholder='Search movie'
            onChange={(e) => this.setState({ value: e.currentTarget.value })}
            value={value}
          />
        </Content>
      </Wrapper>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func,
}

export default SearchBar
