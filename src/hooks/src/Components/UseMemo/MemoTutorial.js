import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

const MemoTutorial = () => {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments/')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  const findLongesNames = (comments) => {
    if (!comments) return null

    let longestName = ''
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name
      if (currentName.length > longestName.length) {
        longestName = currentName
      }
    }

    console.log('longest name was computed')
    return longestName
  }

  const getLongestName = useMemo(() => findLongesNames(data), [data])

  return (
    <div className='App'>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default MemoTutorial
