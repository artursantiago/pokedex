import React from 'react';

import PokemonCard from '../PokemonCard';
import './style.css'

interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: string[]
}

interface Props {
  pokemons: Pokemon[],
}

const GridPokemons: React.FC<Props> = ({pokemons}) => {
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