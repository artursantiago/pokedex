import React, { useEffect, useState } from 'react';

import { getPokemonsDynamically } from '../../services/pokemon';
import './style.css'
import Header from '../../components/Header';
import Search from '../../components/Search';
import GridPokemons from '../../components/GridPokemons';
import pokeball from '../../assets/pokeball.svg'

interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: string[]
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons(limit: number, offset?: number) {
      const newPokemons =  await getPokemonsDynamically(limit, offset);
      setPokemons([...pokemons, ...newPokemons]);
    }
    loadPokemons(20);
  }, [])


  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <Search />
          <GridPokemons pokemons={pokemons} />
        </main>
        <img className="pokeball" src={pokeball} alt=""/>
      </div>
    </>
  );
}

export default Dashboard;