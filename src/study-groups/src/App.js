import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import CreateGroup from './Components/CreateGroup'
import axios from 'axios'

const App = () => {
  const BASE_URL = 'https://localhost:5001/StudyGroup'

  const createGroup = async (cards) => {
    try {
      await axios.post(BASE_URL, cards)
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

  return (
    <div className='App'>
      <h2>Study Groups</h2>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Upload new</Accordion.Header>
          <Accordion.Body>
            <CreateGroup createGroup={createGroup}/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Your group</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default App
