import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font: 16px 'Noto Sans JP' sans-serif;
    background: #ececec;
    width: 100vw;
    min-height: 100vh;
  }

  #root {
    background-image: url('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F07%2Fdesk-3139127_1920-1200x773.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 8px;
    width: 100%;
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
  }
`;
