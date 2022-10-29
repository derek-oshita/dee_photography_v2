import { Box } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import { Router } from './routes/Router';
import { mainTheme } from './styles/themes/main.theme';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
