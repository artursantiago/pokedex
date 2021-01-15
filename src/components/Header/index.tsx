import React from 'react';

import './style.css';
import pokeball from '../../assets/pokeball.svg';
import favoriteIcon from '../../assets/heart.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="pokedex">
        <img src={pokeball} height="32" alt=""/>
      </div>
      <div className="favorites">
        <img src={favoriteIcon} height="32" alt=""/>
      </div>
    </header>
  );
}

export default Header;