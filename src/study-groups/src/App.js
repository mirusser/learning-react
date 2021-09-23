import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import CreateGroup from './Components/CreateGroup'

const App = () => {
  return (
    <div className='App'>
      <h2>Study Groups</h2>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Upload new</Accordion.Header>
          <Accordion.Body>
            <CreateGroup />
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
