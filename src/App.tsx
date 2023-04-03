import { useState } from 'react'
import Pokemon from './Pokemon'
import './App.css'

function App() {
  interface Pokemon {
    pokedexNumber: number;
    name: string;
  }
  

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
