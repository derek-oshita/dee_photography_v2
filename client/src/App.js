import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import { Router } from './routes/Router';
import { mainTheme } from './styles/themes/main.theme';
import './styles/index.css';

function App() {
  const [currentUser, setCurrentUser] = useState({
    userID: '',
    isLoggedIn: false,
  });

  return (
    <ThemeProvider theme={mainTheme}>
      <Router currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </ThemeProvider>
  );
}

export default App;
