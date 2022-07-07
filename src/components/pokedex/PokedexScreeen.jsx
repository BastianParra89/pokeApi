import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import "./PokedexScreeen.css";
import Footer from "../Footer/Footer";
import Form from "./Form";

const PokedexScreeen = () => {

  
  const nameUser = useSelector((state) => state.nameUser)
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [typeList, setTypeList] = useState()
  const [filterType, setFilterType] = useState('All Pokemons')

  useEffect(() => {
  if (filterType === 'All Pokemons') {
    const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
    axios.get(URL_POKEMONS)
      .then(res => {
        console.log(res.data.results)
        setPokemons(res.data.results)
      })
        
      .catch(err => console.log(err));

  } else {
    const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
    axios.get(URL)
     .then(res => {
      console.log(res.data.pokemon)
      const array = res.data.pokemon.map(e => e.pokemon)
      setPokemons(array)
     })
     .catch(err => console.log(err))
  }
  }, [filterType]);
 

  useEffect(() => {
    const URL= 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
     .then(res => setTypeList(res.data.results))
     .catch(err => console.log(err))
  }, [])
  

 useEffect(() => {
   setFilterPokemon(pokemons?.filter(e => e.name.includes(pokeSearch.toLowerCase())))
 }, [pokeSearch])
 
  

  return (
    <div>
      <header>
        <div className="container-logo">
          <img
            className="image-logo"
            src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
            alt=""
          />
        </div>
        <div className="box-red"></div>
        <div className="box-black"></div>
      </header>

      <p className="welcome-text">
        <span className="welcome-text-red">Welcome {nameUser}! </span>
      </p>
      <Form 
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setFilterType={setFilterType}
        />
      <div className="card-container">
      {
        filterPokemon ? 
        filterPokemon?.map(pokemon => (
          <PokeCard
           key={pokemon.url}
           url={pokemon.url}
           />
        ))
      :
        pokemons?.map((pokemon) => (
          <PokeCard
            key={pokemon.url}
            url={pokemon.url}
          />
        ))
      }
      </div>
    <Footer />
    </div>
  );
};

export default PokedexScreeen;
