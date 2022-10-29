import { createTheme } from '@mui/material/styles';

const palette = {
  // https://mui.com/material-ui/customization/color/
  primary: {
    main: '#3f51b5',
    light: '#5c6bc0',
  },
  secondary: {
    main: '#ab47bc',
    light: '#ce93d8',
  },
  typography: {
    default: '#404040',
  },
  background: {
    default: '#FFFFFF',
  },
};

export const mainTheme = createTheme({
  palette: palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.primary.light,
          },
        },
      },
    },
  },
});
