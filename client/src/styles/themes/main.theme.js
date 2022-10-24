import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      // main: red[500],
      main: 'green',
    },

    typography: {
      default: '#404040',
    },

    background: {
      default: '#FFFFFF',
    },
  },
});
