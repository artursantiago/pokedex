import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css'
import pokeball from '../../assets/pokeball.svg'
import Header from '../../components/Header';
import GridPokemons from '../../components/GridPokemons';
import { getPokemonsDynamically, getSpecificPokemon } from '../../services/pokemon';
import { Pokemon } from '../../store/types';
import { AppState } from '../../store';
import { setPokemons } from '../../store/actions/pokedexActions';


const Dashboard: React.FC = () => {
  const {pokemons} = useSelector((state: AppState) => state.pokedexReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function loadPokemons(limit: number, offset?: number) {
      const newPokemons =  await getPokemonsDynamically(limit, offset);
      dispatch(setPokemons(newPokemons));
    }
    loadPokemons(20);
  }, [])

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <h2>Pokedex</h2>
          <GridPokemons pokemons={pokemons} />
        </main>
        <img className="pokeball" src={pokeball} alt=""/>
      </div>
    </>
  );
}

export default Dashboard;