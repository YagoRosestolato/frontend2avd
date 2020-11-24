import React from 'react';

import { Link } from 'react-router-dom';

import { Main } from './styles';

const Inicio: React.FC = () => {
  return (
    <Main>
      <h2>Bem-vindo ao nosso sistema de gestão de funcionários</h2>

      <div>
        <Link to="/lista">Ver todos os funcionários</Link>
      </div>
      <div>
        <Link to="/create">Cadastrar um novo funcionário</Link>
      </div>
    </Main>
  );
};

export default Inicio;
