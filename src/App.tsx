import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/pageRoutes';
import { Global } from '@emotion/react';
import global from './styles/global';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Global styles={global} />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
