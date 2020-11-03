import React from 'react';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastConatainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
