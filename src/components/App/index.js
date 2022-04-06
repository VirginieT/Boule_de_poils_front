// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import SearchedAnimals from '../SearchedAnimals';

import NavBar from '../NavBar';
import Presentation from '../Presentation';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Routes>
      <Route path="/search" element={<SearchedAnimals />} />
      <Route path="/" element={<Presentation />} />
    </Routes>
    <footer
      className="footer"
    >
      <h3>Qui sommes-nous ?</h3>
      <h4>Mentions Légales</h4>
    </footer>
  </div>
);

// == Export
export default App;
