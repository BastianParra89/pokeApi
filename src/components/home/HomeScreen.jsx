import React from 'react'
import InputHome from './InputHome'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='contenedor'>
      <main>
        <img className="logo-index" src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg" alt="" />
        <h2 className='welcome-text'>¡Hello Pokemon Trainer!</h2>
        
        <InputHome/>
      </main>

      <footer>
            <div className='barra-roja'>

            </div>
            <div className='barra-negra'>

            </div>
        </footer>
    </div>
  )
}

export default HomeScreen