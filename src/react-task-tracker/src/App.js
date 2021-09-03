import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Tasks from './Components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'First task',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Second task',
      day: 'Feb 58h at 6:30pm',
      reminder: false,
    },
  ])

  const deleteTask = (id) => {
    console.log(`delete: ${id}`)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks'
      )}
    </div>
  )
}

export default App
