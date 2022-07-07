
import React from 'react'
import './Search.css'

const Search = ({setSearchLocation}) => {

    

    const   searchLocation  =   e   =>  {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)

    }
  return (
    <div className='searchbar-container'>
    <form className='form-search' onSubmit={searchLocation} >
        <input className='input-form-search' type="text"  placeholder="Search for pokemon..." />
        <button className='button-form-search' >Search</button>
    </form>
    </div>
  )
}

export default Search 

