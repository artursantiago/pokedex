import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './style.css'
import { getSpecificPokemon, getPokemonsDynamically } from '../../services/pokemon';
import { setPokemons } from '../../store/actions/pokedexActions';

const PokemonCard: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset Pokemon List
    if (!searchQuery) {
      const newPokemons = await getPokemonsDynamically(20);
      dispatch(setPokemons(newPokemons));
      return;
    }

    const pokemonFounded = await getSpecificPokemon(searchQuery.toLowerCase());
    if (pokemonFounded) {
      dispatch(setPokemons([pokemonFounded]));
      return;
    }

    // Pokemon Not Found
    dispatch(setPokemons([]));
  }

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={handleSearchSubmit}>
          <input onChange={handleQueryChange} className="input-search" type="text" placeholder="Search for a pokémon..." />
          <button className="btn-search" type="submit">Search</button>
        </form>
      </div>
    </div>
    );
}

export default PokemonCard;