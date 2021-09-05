import React, { useEffect } from 'react'

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log('function is called')
  }, [returnComment])
  return <div>{returnComment('random name')}</div>
}

export default Child
