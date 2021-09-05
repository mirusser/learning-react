import React, { useLayoutEffect, useEffect, useRef } from 'react'

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    // console.log(`UseLayoutEffect: ${divRef.current.value}`)
    console.log(inputRef.current.value)
  }, [])

  useEffect(() => {
    inputRef.current.value = 'hello'
    console.log('UseEffect')
  }, [])

  return (
    <div className='App'>
      <input type='text' ref={inputRef} value='123' />
    </div>
  )
}

export default LayoutEffectTutorial
