import React, { FormEvent, useState, ChangeEvent } from 'react';

import { Link } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';

import api from '../../services/api';

import { Main, Campo } from './styles';

const Criacao: React.FC = () => {
  const [nomeFuncionario, setNomeFuncionario] = useState('');
  const [emailFuncionario, setEmailFuncionario] = useState('');
  const [departamentoFuncionario, setDepartamentoFuncionario] = useState('');
  const [funcaoFuncionario, setFuncaoFuncionario] = useState('');
  const [telefoneFuncionario, setTelefoneFuncionario] = useState('');
  const [fotoFuncionario, setFotoFuncionario] = useState<File[]>();

  const salvarFoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null || event.target.files === undefined) {
      return;
    }
    const novaFoto = Array.from(event.target.files);

    setFotoFuncionario(novaFoto);
  };

  const salvarFuncionario = async (event: FormEvent) => {
    event.preventDefault();

    const dados = new FormData();

    if (
      nomeFuncionario !== undefined &&
      nomeFuncionario !== '' &&
      emailFuncionario !== undefined &&
      emailFuncionario !== '' &&
      departamentoFuncionario !== undefined &&
      departamentoFuncionario !== '' &&
      funcaoFuncionario !== undefined &&
      funcaoFuncionario !== '' &&
      telefoneFuncionario !== undefined &&
      telefoneFuncionario !== '' &&
      fotoFuncionario !== undefined &&
      fotoFuncionario !== null
    ) {
      dados.append('nome', nomeFuncionario);
      dados.append('email', emailFuncionario);
      dados.append('departamento', departamentoFuncionario);
      dados.append('funcao', funcaoFuncionario);
      dados.append('foto', fotoFuncionario[0]);
      dados.append('telefone', telefoneFuncionario);

      const dadosFuncionarios = await api
        .post('/funcionarios', dados)
        .then(response => response.data);

      if (dadosFuncionarios) {
        window.location.href = `/detalhes/criacao/${dadosFuncionarios.id}`;
      }
    }
  };

  return (
    <Main>
      <h2>
        <Link to="/">
          <FcLeft size={32} />
        </Link>
        Bem-vindo ao cadastro de funcionário
      </h2>
      <h2>Entre com os dados em todos os campos.</h2>
      <form onSubmit={salvarFuncionario}>
        <Campo>
          <input
            type="text"
            value={nomeFuncionario}
            onChange={event => setNomeFuncionario(event.target.value)}
            placeholder="Nome"
            required
          />
        </Campo>
        <Campo>
          <input
            type="text"
            value={funcaoFuncionario}
            onChange={event => setFuncaoFuncionario(event.target.value)}
            placeholder="Função"
            required
          />
        </Campo>
        <Campo>
          <input
            type="text"
            value={departamentoFuncionario}
            onChange={event => setDepartamentoFuncionario(event.target.value)}
            placeholder="Departamento"
            required
          />
        </Campo>

        <Campo>
          <input
            type="email"
            value={emailFuncionario}
            onChange={event => setEmailFuncionario(event.target.value)}
            placeholder="Email"
            required
          />
        </Campo>
        <Campo>
          <input
            type="text"
            value={telefoneFuncionario}
            onChange={event => setTelefoneFuncionario(event.target.value)}
            placeholder="Telefone"
            required
          />
        </Campo>
        <Campo>
          <span>Foto</span>
          <input type="file" onChange={salvarFoto} required />
        </Campo>

        <button type="submit">Enviar</button>
      </form>
    </Main>
  );
};

export default Criacao;
