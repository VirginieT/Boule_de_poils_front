import { useEffect, useState } from 'react';

import './navbar.scss';

import logo from 'src/assets/img/logo_bdp_dark.png';

const NavBar = () => {
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
    <div className="container">

      <ul className="alignement">

        <li><img src={logo} alt="logo" /></li>
        <li id="title">Boule de poils</li>
      </ul>
      {(toggleMenu || largeur > 500) && (
        <ul className="Navbar-Menu">

          <li className="items"><a>Mes Favoris</a></li>
          <li className="items"><a>Rechercher un animal</a></li>
          <li className="items"><a>Conseils pour adoption</a></li>
          <li className="items"><a>Les associations</a></li>
          <li className="items"><a>Admin/compte user</a></li>
          <li className="items"><a>Login</a></li>
        </ul>
      )}


      <button type="button" onClick={toggleNavSmallScreen} className="btn">---</button>

    </div>
  );
};

export default NavBar;
