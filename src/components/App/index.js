// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import SearchedAnimals from '../SearchedAnimals';

// == Composant
const App = () => (
  <div className="app">
    <nav
      className="nav"
    >
      la y a la nav
    </nav>
    <Routes>
      <Route path="/search" element={<SearchedAnimals />} />
    </Routes>
    <footer
      className="footer"
    >
      la y a le footer
    </footer>
  </div>
);

// == Export
export default App;
