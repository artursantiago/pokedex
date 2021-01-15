import React from 'react';

import './style.css'

const PokemonCard: React.FC = () => {
  return (
    <div>
      <h2>Pokedex</h2>
      <div className="form-wrapper">
        <form>
          <input className="input-search" type="text" placeholder="Search for a pokémon..." />
          <button className="input-button" type="submit">Search</button>
        </form>
      </div>
    </div>
    );
}

export default PokemonCard;