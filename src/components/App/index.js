// == Import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Advices from '../Advices';
import './styles.css';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#735F6E',
      contrastText: '#F2F0F2',
      light: '#8C7488',
      dark: '#594A55',
    },
    secondary: {
      main: '#D97C0B',
      light: '#F2B33D',
      dark: '#BF6D0A',
      contrastText: '#F2F0F2',
    },
  },
});

// == Composant
const App = () => (
  <div className="app">
    <ThemeProvider theme={theme}>
      <Advices />
    </ThemeProvider>
  </div>
);

// == Export
export default App;
