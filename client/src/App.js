import Box from '@mui/material/Box';
import { mainTheme } from './styles/themes/main.theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          bgcolor: 'primary.main',
        }}
      >
        UNDERTAKER
      </Box>
    </ThemeProvider>
  );
}

export default App;
