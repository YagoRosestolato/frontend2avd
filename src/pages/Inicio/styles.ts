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

  h2 {
    margin: 16px 0;
  }

  div {
    text-align: center;
    width: 80%;
    background: #eeeeee;
    padding: 8px;
    border-radius: 8px;

    a {
      font-weight: bold;
      color: #000000;
      text-decoration: none;
    }

    :hover {
      transform: scale(1.1);
    }
  }

  div + div {
    margin-top: 16px;
  }
`;
