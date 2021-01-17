import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import './style.css'
import pokeball from '../../assets/pokeball.svg'
import Header from '../../components/Header';
import Search from '../../components/Search';
import GridPokemons from '../../components/GridPokemons';
import { AppState } from '../../store';

const FavoritePokemons: React.FC = () => {

  const { favoritePokemons } = useSelector((state: AppState) => state.favoritePokemonReducer);

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <h2>Pokedex</h2>
          <GridPokemons pokemons={favoritePokemons}/>
        </main>
        <img className="pokeball" src={pokeball} alt=""/>
      </div>
    </>
  );
}

export default FavoritePokemons;