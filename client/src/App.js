import { Box } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';

import { mainTheme } from './styles/themes/main.theme';
import { LandingView } from './components/view/LandingView';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      {/* <Box
        sx={{
          height: '100vh',
          width: '100vw',
          bgcolor: 'primary.main',
        }}
      >
        Undertaker
      </Box> */}
      <LandingView />
    </ThemeProvider>
  );
}

export default App;
