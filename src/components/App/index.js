// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

import NavBar from '../NavBar';
import Team from '../Presentation';


// == Composant
const App = () => (
  <div className="app">

    <NavBar />

    <Team />

    <div className='footer'>
      <h3>Qui sommes-nous ?</h3>
      <h4>Mentions Légales</h4>
    </div>
  </div>
);

// == Export
export default App;
