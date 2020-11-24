import React, { useEffect, useState } from 'react';

import { Link, RouteComponentProps } from 'react-router-dom';
import {
  FcFullTrash,
  FcDislike,
  FcLike,
  FcLeft,
  FcSearch,
} from 'react-icons/fc';
import api from '../../services/api';
import { Main } from './styles';

interface RouterParam {
  id: string;
}

interface Funcionario {
  foto: string;
  nome: string;
  funcao: string;
  like: string;
  dislike: string;
}

const DetalhesCriacao: React.FC<RouteComponentProps<RouterParam>> = props => {
  const [funcionario, setFuncionario] = useState<Funcionario>();
  const { id } = props.match.params;

  async function carregarFuncionarioCriado() {
    const funcionaroCriado = await api
      .get(`/funcionarios/${id}`)
      .then(response => {
        return response.data;
      });

    setFuncionario(funcionaroCriado);
  }

  useEffect(() => {
    carregarFuncionarioCriado();
  }, [id]);

  return (
    <Main>
      <h2>
        {' '}
        <Link to="/">
          <FcLeft size={32} />
        </Link>
        Novo funcionário cadastrado
      </h2>
      {funcionario ? (
        <>
          <img src={`http://localhost:3333/files/${funcionario.foto}`} alt="" />
          <p>
            Nome:
            {funcionario.nome}
          </p>
          <p>
            Função:
            {funcionario.funcao}
          </p>
          <div>
            <p>
              <FcFullTrash
                size={20}
                onClick={async () => {
                  await api.delete(`/funcionarios/${id}`);
                  window.location.href = '/';
                }}
              />
            </p>
            <p>
              <FcLike
                size={20}
                onClick={async () => {
                  await api.put(`/funcionarios/like/${id}`).then(response => {
                    setFuncionario({ ...funcionario, ...response.data });
                  });
                }}
              />
              {funcionario.like}
            </p>
            <p>
              <FcDislike
                size={20}
                onClick={async () => {
                  await api
                    .put(`/funcionarios/dislike/${id}`)
                    .then(response => {
                      setFuncionario({ ...funcionario, ...response.data });
                    });
                }}
              />
              {funcionario.dislike}
            </p>

            <p>
              <FcSearch
                size={24}
                onClick={() => {
                  window.location.href = `/detalhes/${id}`;
                }}
              />
            </p>
          </div>
        </>
      ) : (
        'Carregando'
      )}
    </Main>
  );
};

export default DetalhesCriacao;
