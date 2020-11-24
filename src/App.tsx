import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EstiloGlobal from './assets/styles/estiloGlobal';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <EstiloGlobal />
  </>
);

export default App;
