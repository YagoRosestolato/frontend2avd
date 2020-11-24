import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);

  width: 100%;
  height: 100vh;
  color: #ffffff;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 24px;
  }
`;

export const ListaDeFuncionarios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    width: 550px;
    background: #1b262c;
    padding: 8px;
    border-radius: 4px;

    a {
      color: #ffffff;
      font-weight: bold;
      border-radius: 4px;
      text-decoration: none;
      padding: 4px 54px;
      background: #202040;
    }

    :hover {
      transform: translateX(20px);
      border: 1px solid #ffffff;
    }
  }

  p + p {
    margin-top: 8px;
  }
`;
