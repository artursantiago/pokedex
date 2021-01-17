import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import pokeball from '../../assets/pokeball.svg';
import favoriteIcon from '../../assets/heart.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="pokedex">
        <Link to="/">
          <img src={pokeball} height="36" alt=""/>
        </Link>
      </div>
      <div className="favorites">
        <Link to="/favorites">
          <img src={favoriteIcon} height="36" alt=""/>
        </Link>
      </div>
    </header>
  );
}

export default Header;