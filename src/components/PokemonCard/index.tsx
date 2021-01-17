import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import favoriteIcon from '../../assets/heart.svg';
import favoriteIconShape from '../../assets/heart2.svg';
import { pokemonTypeColors } from '../global';
import { pad, capitalizeFirstLetter } from '../../services/utils';
import { Pokemon } from '../../store/types';
import { handleFavoritePokemon } from '../../store/actions/favoritePokemonsActions';
import { AppState } from '../../store';

interface PokemonCardProps {
  pokemon: Pokemon,
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {

  const { favoritePokemons } = useSelector((state: AppState)  => state.favoritePokemonReducer);
  const dispatch = useDispatch();

  const isAFavoritePokemon = (id: number) => {
    return !!favoritePokemons.find(pokemon => pokemon.id === id);
  }

  const handleFavorite = (pokemon: Pokemon) => {
    dispatch(handleFavoritePokemon(pokemon));
  }

  const pokemonBackgroundColor = (pokemonType: string, colorType = 'medium') => {
    const pokemonColors = Object.entries(pokemonTypeColors).filter(teste => teste[0] === pokemonType)[0][1];
    return {
      backgroundColor: colorType === 'medium' ? pokemonColors.medium : pokemonColors.light,
    }
  }

  return (
    <div className="pokemon-card">
      <div className="card-header" style={pokemonBackgroundColor(pokemon.types[0])}>
        <div className="card-image">
          <img src={pokemon.imageUrl} alt=""/>
        </div>
        <div className="card-actions" style={pokemonBackgroundColor(pokemon.types[0], 'light')}>
          <button className="btn-favorite"
            onClick={() => handleFavorite(pokemon)}
            title={isAFavoritePokemon(pokemon.id) ? 
              `Remove ${capitalizeFirstLetter(pokemon.name)} from the favorite list.`
              : `Add ${capitalizeFirstLetter(pokemon.name)} to the favorite list.`}
          >
            <img src={isAFavoritePokemon(pokemon.id) ? favoriteIcon : favoriteIconShape} alt=""/>
          </button>
        </div>
      </div>
      <div className="card-info">
        <span className="card-number">#{pad(pokemon.id, 3)}</span>
        <h4 className="card-name">{capitalizeFirstLetter(pokemon.name)}</h4>
        <ul className="card-types">
          {pokemon.types.map(type => {
            return  <li key={type} className="type" style={pokemonBackgroundColor(type)}>{type.toUpperCase()}</li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default PokemonCard;