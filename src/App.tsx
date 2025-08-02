import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/pageRoutes';
import { Global } from '@emotion/react';
import global from './styles/global';

function App() {
  return (
    <>
      <Global styles={global} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
