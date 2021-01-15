import React from 'react';

import './style.css'

const PokemonCard: React.FC = () => {
  
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Pokedex</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSearchSubmit}>
          <input className="input-search" type="text" placeholder="Search for a pokémon..." />
          <button className="btn-search" type="submit">Search</button>
        </form>
      </div>
    </div>
    );
}

export default PokemonCard;