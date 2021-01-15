import React, { useEffect, useState } from 'react';

// import { getPokemonsDynamically } from '../../services/pokemon';
import './style.css'
import Header from '../../components/Header';
import Search from '../../components/Search';
import PokemonCard from '../../components/PokemonCard';
import GridPokemons from '../../components/GridPokemons';

interface Pokemon {
  id: number,
  // generation?: string,
  name: string,
  imageUrl: string,
  types: string[]
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  return (
    <>
      <Header />
      <main>
        <Search />
        <GridPokemons />
      </main>
    </>
  );
}

export default Dashboard;