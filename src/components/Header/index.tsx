import React from 'react';

import './style.css';
import pokedexIcon from '../../assets/pokeball-icon.png';
import favoriteIcon from '../../assets/heart-white.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="pokedex">
        <img src={pokedexIcon} height="32" alt=""/>
      </div>
      <div className="favorites">
        <img src={favoriteIcon} height="32" alt=""/>
      </div>
    </header>
  );
}

export default Header;