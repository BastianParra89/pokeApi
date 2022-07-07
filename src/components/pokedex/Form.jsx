import React from "react";
import "./Form.css";

const Form = ({ setPokeSearch, typeList, setFilterType }) => {
  const changeInputText = (e) => {
    setPokeSearch(e.target.value);
  };

  const changeSelect = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <form className="form-search">
      <select onChange={changeSelect}>
        <option value="All Pokemons">All Pokemons</option>
        {typeList?.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <div className="search">
        <input
          type="text"
          placeholder="Busca tu pokemon aqui"
          onChange={changeInputText}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default Form;
