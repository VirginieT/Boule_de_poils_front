// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

import NavBar from '../NavBar';
import Presentation from '../Presentation';


// == Composant
const App = () => (
  <div className="app">

    <NavBar />
<h1>Boule de poils</h1>
    <Presentation />
  </div>
);

// == Export
export default App;
