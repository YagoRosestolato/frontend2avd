import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Criacao from '../pages/Criacao';
import DetalhesCriacao from '../pages/DetalhesCriacao';
import Detalhes from '../pages/Detalhes';
import Inicio from '../pages/Inicio';
import Listar from '../pages/Listar';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicio} />
    <Route path="/lista" component={Listar} />
    <Route path="/create" component={Criacao} />
    <Route path="/detalhes/criacao/:id" exact component={DetalhesCriacao} />
    <Route path="/detalhes/:id" component={Detalhes} />
  </Switch>
);

export default Routes;
