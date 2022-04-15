import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.scss';

import logo from 'src/assets/img/logo_bdp_dark.png';

const NavBar = () => {
  const connectedUser = useSelector((state) => (state.Login.tokenUserConnected));
  const role = useSelector((state) => (state.Login.role));

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className="containerNav">

      <ul className="alignement">
      <li><Link to="/" label="homepage"><img className="logobouledepoils" src={logo} alt="logo" /></Link></li>
        
   
        
        <li id="title">Boule de poils</li>


        
      </ul>
      {(toggleMenu || largeur > 500) && (
        <ul className="Navbar-Menu">

          {connectedUser && (<li className="items"><a href="/favorite">Mes Favoris</a></li>)}
          <li className="items"><a href="/#search-form">Rechercher un animal</a></li>
          <li className="items"><a href="/conseils">Conseils pour adoption</a></li>
          <li className="items"><a href="associations">Les associations</a></li>
          {(role !== 'ROLE_USER' && role !== null) && (<li className="items"><a href="">Admin/compte user</a></li>)}
          <li className="items"><a href="/login">Login</a></li>
        </ul>
      )}

      <button type="button" onClick={toggleNavSmallScreen} className="btn">---</button>

    </div>
  );
};

export default NavBar;
