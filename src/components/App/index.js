// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import SearchedAnimals from '../SearchedAnimals';
import SearchForm from '../SearchForm';
import NavBar from '../NavBar';
import Presentation from '../Presentation';
import LoginForm from '../LoginForm';
import AssoList from '../AssoList';
import Advices from '../Advices';
import SubscribeForm from '../SubscribeForm';
import AddAnimalForm from '../AddAnimalForm';
import AssoContactAdmin from '../AssoContactAdmin/assoContactAdmin';
import ManagerNav from '../ManagerNav';
import DashboardAnimal from '../DashboardAnimal/dashboardAnimal';
import DashboardAsso from '../DashboardAsso/dashboardAsso';
import AddAssoForm from '../AddAssoForm';
import FormResult from '../FormResult';


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
const App = () => {
  const formsubmit = useSelector((state) => state.FormReducer.formSubmit);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/manager/animal" element={<> <ManagerNav /> <DashboardAnimal /> </>} />
          <Route path="/manager/animal/add" element={<> <ManagerNav /> <AddAnimalForm /> </>} />
          <Route path="/manager/association" element={<> <ManagerNav /> <DashboardAsso /> </>} />
          <Route path="/manager/association/add" element={<> <ManagerNav /> <DashboardAsso /> </>} />
          <Route path="/add" element={<AddAnimalForm />} />
          <Route path="/conseils" element={<Advices />} />
          <Route path="/associations" element={<AssoList />} />
          <Route path="/rejoindre" element={<AssoContactAdmin />} />
          <Route path="/signin" element={<SubscribeForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              formsubmit ? (
                <SearchedAnimals />
              )
                : (
                  <>
                    <Presentation />
                    <SearchForm />
                  </>
                )
            }
          />
        </Routes>
        <footer
          className="footer"
        >
          <h3>Qui sommes-nous ?</h3>
          <h3>Rejoindre la plateforme</h3>
        </footer>
      </ThemeProvider>
    </div>
  );
};

// == Export
export default App;
