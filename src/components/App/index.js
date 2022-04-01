// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

import NavBar from '../NavBar';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <NavBar />
  </div>
);

// == Export
export default App;
