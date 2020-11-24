import React, { useEffect, useState } from 'react';

import { Link, RouteComponentProps } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';
import api from '../../services/api';
import { Main } from './styles';

interface RouterParam {
  id: string;
}

interface Funcionario {
  foto: string;
  nome: string;
  departamento: string;
  email: string;
  telefone: string;
}

const DetalhesCriacao: React.FC<RouteComponentProps<RouterParam>> = props => {
  const [funcionario, setFuncionario] = useState<Funcionario>();
  const { id } = props.match.params;

  async function carregarFuncionario() {
    const funcionaroCriado = await api
      .get(`/funcionarios/${id}`)
      .then(response => {
        return response.data;
      });

    setFuncionario(funcionaroCriado);
  }

  useEffect(() => {
    carregarFuncionario();
  }, [id]);

  return (
    <Main>
      <h2>
        {' '}
        <Link to="/">
          <FcLeft size={32} />
        </Link>
        Voltar
      </h2>
      <p>
        Nome:
        {funcionario && funcionario.nome}
      </p>
      <p>
        Departamento:
        {funcionario && funcionario.departamento}
      </p>

      <p>
        Email:
        {funcionario && funcionario.email}
      </p>
      <p>
        Telefone:
        {funcionario && funcionario.telefone}
      </p>
    </Main>
  );
};

export default DetalhesCriacao;
