import logo from './logo.svg'
import './App.css'
import StateTutorial from './Components/UseState/StateTutorial'
import ReducerTutorial from './Components/UseReducer/ReducerTutorial'
import EffectTutorial from './Components/UseEffect/EffectTutorial'
import RefTutorial from './Components/UseRef/RefTutorial'
import LayoutEffectTutorial from './Components/UseLayoutEffect/LayoutEffectTutorial'
import ImperativeHandle from './Components/UseImperativeHandle/ImperativeHandle'

function App() {
  return (
    <div className='App'>
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <RefTutorial /> */}
      {/* <LayoutEffectTutorial /> */}
      <ImperativeHandle />
    </div>
  )
}

export default App
