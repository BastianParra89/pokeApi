import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreeen from './components/pokedex/PokedexScreeen'
import PokeInfoScreen from './components/pokeInfo/PokeInfoScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/pokedex' element={<PokedexScreeen/>} />
      <Route path='/pokemon/:id'  element={<PokeInfoScreen/>} />  
     </Routes>
    </div>
  )
}

export default App
