import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';
import api from '../../services/api';

import { Main, ListaDeFuncionarios } from './styles';

interface Request {
  nome: string;
  id: string;
}

const Listar: React.FC = () => {
  const [todosFuncionarios, setTodosFuncionarios] = useState<Request[]>();

  async function carregarFuncionarios() {
    const funcionarios = await api
      .get('/funcionarios')
      .then(response => response.data);

    setTodosFuncionarios(funcionarios);
  }

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  return (
    <Main>
      <h1>
        <Link to="/">
          <FcLeft size={32} />
        </Link>
        Listagem dos funcionários cadastrados
      </h1>
      <h2>
        Total de
        {todosFuncionarios !== undefined
          ? ` ${todosFuncionarios.length} `
          : ` ${0}`}
        funcionários
      </h2>
      <ListaDeFuncionarios>
        {todosFuncionarios !== undefined
          ? todosFuncionarios.map(func => {
              return (
                <p key={func.id}>
                  <span>{func.nome}</span>
                  <span>
                    <Link to={`/detalhes/${func.id}`}>Detalhes</Link>
                  </span>
                </p>
              );
            })
          : ''}
      </ListaDeFuncionarios>
    </Main>
  );
};

export default Listar;
