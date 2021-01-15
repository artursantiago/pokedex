import React from 'react';

import PokemonCard from '../PokemonCard';
import './style.css'

const GridPokemons: React.FC = () => {
  const pokemon = {
    id: 1,
    // generation?: string,
    name: 'Bulbasur',
    imageUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png',
    types: ['grass', 'poison']
  }

  return (
    <div className="grid-pokemons">
      <PokemonCard pokemon={pokemon} />
      <PokemonCard pokemon={pokemon} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default GridPokemons;