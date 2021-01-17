import React, { useState } from 'react';

import './style.css'
import { getSpecificPokemon } from '../../services/pokemon';

const PokemonCard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return;

    const pokemonFounded = await getSpecificPokemon(searchQuery);

    if (pokemonFounded) {

    }
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