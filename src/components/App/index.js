// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchedAnimals from '../SearchedAnimals';
import SearchForm from '../SearchForm';
import NavBar from '../NavBar';
import Presentation from '../Presentation';
import LoginForm from '../LoginForm';
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
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/search" element={<SearchedAnimals />} />
        <Route path="/" element={<><Presentation /><SearchForm /></>} />
      </Routes>
      <footer
        className="footer"
      >
        <h3>Qui sommes-nous ?</h3>
        <h4>Mentions Légales</h4>
      </footer>
    </ThemeProvider>
  </div>
);

// == Export
export default App;
