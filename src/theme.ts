import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#363636',
    },
    secondary: {
      main: '#8B008B',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

theme = responsiveFontSizes(theme);
export default theme;
