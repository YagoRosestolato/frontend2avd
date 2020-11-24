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
  }

  form {
    border: 1px solid #ffffff;
    padding: 16px;
    margin-top: 16px;
    border-radius: 4px;

    button {
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      border-radius: 4px;
      text-align: center;
      width: 100%;
      background: #3282b8;
      padding: 4px;
      margin-top: 8px;
    }
  }

  section + section {
    margin-top: 16px;
  }
`;

export const Campo = styled.section`
  width: 100%;

  span {
    font-size: 20px;
  }

  input {
    font-size: 16px;
    padding: 4px;
    width: 100%;
    border-radius: 4px;
  }

  input::placeholder {
    font-weight: bold;
  }
`;
