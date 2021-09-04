import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'TOGGLESHOWTEXT':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

const ReducerTutorial = () => {
  // const [count, setCount] = useState(0)
  // const [showText, setShowText] = useState(true)
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'TOGGLESHOWTEXT' })
        }}
      >
        Click here
      </button>
      {state.showText && <p>this is a text</p>}
    </div>
  )
}

export default ReducerTutorial
