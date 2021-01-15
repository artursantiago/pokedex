import React from 'react';

import favoriteIcon from '../../assets/heart.svg';
import favoriteIconShape from '../../assets/heart2.svg';
import './style.css';
import { pokemonTypeColors } from '../global';
import { pad, capitalizeFirstLetter } from '../../services/utils';

interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: string[]
}

interface Props {
  pokemon: Pokemon,
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {

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
          <button className="btn-favorite">
            <img src={favoriteIconShape} alt=""/>
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