import { useState } from 'react'
import Pokemon from './Pokemon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pokemon/>
      <Pokemon/>
      <Pokemon/>
      <Pokemon/>
      <Pokemon/>
      <Pokemon/>
    </div>
  )
}

export default App
