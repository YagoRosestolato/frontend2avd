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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0;
  }
`;
