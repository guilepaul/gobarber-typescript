import React from 'react';
import SignIn from './Signin';
import SignUp from './Signup';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
