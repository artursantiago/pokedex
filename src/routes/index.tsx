import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import FavoritePokemons from '../pages/FavoritePokemons';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/favorites" component={FavoritePokemons} />
  </Switch>
)

export default Routes;