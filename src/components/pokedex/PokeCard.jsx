import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const clickCard = () => navigate(`/pokemon/${pokemon.id}`);

  return (
    <article onClick={clickCard} className="card-pokemon">
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt=""/>
      <p>Type: {pokemon?.types[0].type.name}</p>
      
    </article>
  );
};

export default PokeCard;
