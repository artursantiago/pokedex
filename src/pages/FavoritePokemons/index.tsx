import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import './style.css'
import pokeball from '../../assets/pokeball.svg'
import Header from '../../components/Header';
import NotFound from '../../components/NotFound';
import GridPokemons from '../../components/GridPokemons';
import { AppState } from '../../store';

const FavoritePokemons: React.FC = () => {

  const { favoritePokemons } = useSelector((state: AppState) => state.favoritePokemonReducer);

  const emptyListStyle: React.CSSProperties = {
    paddingTop: '10rem',
    alignItems: 'center',
    fontSize: '2.4rem',
    textAlign: 'center',
  }

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <h2>Favorite List</h2>
          {favoritePokemons.length == 0 ?
            <h4 style={emptyListStyle}>You don't have any favorite pokemon yet.</h4>
            : <GridPokemons pokemons={favoritePokemons}/>}
        </main>
        <img className="pokeball" src={pokeball} alt=""/>
      </div>
    </>
  );
}

export default FavoritePokemons;