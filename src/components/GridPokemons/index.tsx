import React from 'react';

import './style.css'
import PokemonCard from '../PokemonCard';
import { Pokemon } from '../../store/types';

interface GridPokemonsProps {
  pokemons: Pokemon[],
}

const GridPokemons: React.FC<GridPokemonsProps> = ({pokemons}) => {
  const pokemon = {
    id: 1,
    name: 'Bulbasur',
    imageUrl: 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png',
    types: ['grass', 'poison']
  }

  return (
    <div className="grid-pokemons">
      {pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}

export default GridPokemons;